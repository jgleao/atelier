#!/usr/bin/env node
// capture.mjs: capture a web page's motion as numbered frames, using a private Chrome/Edge
// driven over the DevTools protocol. No npm dependencies (Node 22+ for the built-in WebSocket).
//
// Every run starts its own browser with its own temporary profile and closes it by PID at the end,
// so it never touches the person's own browser and never leaves an orphan eating memory.

import { spawn, execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir, platform } from 'node:os';
import { join, resolve } from 'node:path';

const HELP = `
Usage: node capture.mjs --url <url> --name <prefix> [options]

Modes (--mode):
  still    one frame                                   -> <name>-00.png
  time     N frames over --duration ms (plays by itself) -> <name>-t01..tNN.png
  scroll   N frames at evenly spaced scroll positions    -> <name>-s01..sNN.png
  mouse    1 frame untouched + 2 with the pointer moved  -> <name>-m01..m03.png
  full     whole page in one tall image (catalog grids)  -> <name>-full.png

Options:
  --out <dir>          output folder (default ./captures)
  --frames <n>         frames for time/scroll (default 6)
  --duration <ms>      time span for mode time (default 3000)
  --width <px>         viewport width (default 1600; 390 with --mobile)
  --height <px>        viewport height (default 900; 844 with --mobile)
  --mobile             phone emulation (touch, mobile layout, dpr 3)
  --dpr <n>            device pixel ratio (default 1, or 3 with --mobile)
  --theme dark|light   force prefers-color-scheme
  --wait <ms>          wait after load before the first frame (default 1500)
  --settle <ms>        wait after each scroll/pointer step (default 700)
  --max-height <px>    cap for mode full (default 16000)
  --format webp|png    image format (default webp, the library's format)
  --quality <n>        webp quality (default 82)
  --headed             real window instead of headless (needed for honest performance numbers)
  --window-position x,y  where the headed window opens (put it off the main screen)
  --browser <path>     Chrome/Edge executable (or set CHROME_PATH)
`;

function parseArgs(argv) {
  const a = { out: 'captures', format: 'webp', quality: 82, mode: 'still', frames: 6, duration: 3000, wait: 1500, settle: 700, maxHeight: 16000 };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    const next = () => argv[++i];
    switch (k) {
      case '--url': a.url = next(); break;
      case '--name': a.name = next(); break;
      case '--out': a.out = next(); break;
      case '--mode': a.mode = next(); break;
      case '--frames': a.frames = +next(); break;
      case '--duration': a.duration = +next(); break;
      case '--width': a.width = +next(); break;
      case '--height': a.height = +next(); break;
      case '--mobile': a.mobile = true; break;
      case '--dpr': a.dpr = +next(); break;
      case '--theme': a.theme = next(); break;
      case '--wait': a.wait = +next(); break;
      case '--settle': a.settle = +next(); break;
      case '--max-height': a.maxHeight = +next(); break;
      case '--format': a.format = next(); break;
      case '--quality': a.quality = +next(); break;
      case '--headed': a.headed = true; break;
      case '--window-position': a.windowPosition = next(); break;
      case '--browser': a.browser = next(); break;
      case '-h': case '--help': a.help = true; break;
      default: throw new Error(`unknown option ${k}`);
    }
  }
  a.width ??= a.mobile ? 390 : 1600;
  a.height ??= a.mobile ? 844 : 900;
  a.dpr ??= a.mobile ? 3 : 1;
  return a;
}

function findBrowser(explicit) {
  if (explicit) return explicit;
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const os = platform();
  const candidates = [];
  if (os === 'win32') {
    for (const base of [process.env['PROGRAMFILES'], process.env['PROGRAMFILES(X86)'], process.env['LOCALAPPDATA']]) {
      if (!base) continue;
      candidates.push(join(base, 'Google', 'Chrome', 'Application', 'chrome.exe'));
      candidates.push(join(base, 'Microsoft', 'Edge', 'Application', 'msedge.exe'));
    }
  } else if (os === 'darwin') {
    candidates.push('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge');
  } else {
    for (const bin of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'microsoft-edge']) {
      try { candidates.push(execFileSync('which', [bin]).toString().trim()); } catch {}
    }
  }
  const found = candidates.find((p) => p && existsSync(p));
  if (!found) throw new Error('no Chrome/Edge found; pass --browser <path> or set CHROME_PATH');
  return found;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

class CDP {
  constructor(ws) {
    this.ws = ws; this.seq = 0; this.pending = new Map(); this.waiters = [];
    ws.onmessage = (e) => {
      const m = JSON.parse(e.data);
      if (m.id && this.pending.has(m.id)) {
        const { res, rej } = this.pending.get(m.id);
        this.pending.delete(m.id);
        m.error ? rej(new Error(`${m.error.message}`)) : res(m.result);
      } else if (m.method) {
        this.waiters = this.waiters.filter((w) => (w.method === m.method ? (w.res(m.params), false) : true));
      }
    };
  }
  send(method, params = {}) {
    const id = ++this.seq;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((res, rej) => this.pending.set(id, { res, rej }));
  }
  waitFor(method, timeout) {
    return new Promise((res) => {
      const w = { method, res };
      this.waiters.push(w);
      setTimeout(() => { this.waiters = this.waiters.filter((x) => x !== w); res(null); }, timeout);
    });
  }
  async eval(expression) {
    const r = await this.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    return r.result.value;
  }
}

async function launch(a) {
  const exe = findBrowser(a.browser);
  const profile = mkdtempSync(join(tmpdir(), 'atelier-capture-'));
  const args = [
    `--user-data-dir=${profile}`, '--remote-debugging-port=0', '--no-first-run', '--no-default-browser-check',
    '--hide-scrollbars', '--mute-audio', '--enable-unsafe-swiftshader', `--window-size=${a.width},${a.height}`,
  ];
  if (a.headed) { if (a.windowPosition) args.push(`--window-position=${a.windowPosition}`); }
  else args.push('--headless=new');
  args.push('about:blank');
  const proc = spawn(exe, args, { stdio: 'ignore' });
  const portFile = join(profile, 'DevToolsActivePort');
  for (let i = 0; i < 150 && !existsSync(portFile); i++) await sleep(100);
  if (!existsSync(portFile)) throw Object.assign(new Error('browser did not start'), { proc, profile });
  const port = readFileSync(portFile, 'utf8').split('\n')[0].trim();
  let page;
  for (let i = 0; i < 50 && !page; i++) {
    try { page = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page'); } catch {}
    if (!page) await sleep(100);
  }
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  return { proc, profile, ws, cdp: new CDP(ws) };
}

function shutdown(b) {
  if (!b) return;
  try { b.ws?.close(); } catch {}
  if (b.proc?.pid) {
    // Close by PID (whole tree), never by process name: a name-based kill takes the person's own browser down too.
    try {
      if (platform() === 'win32') execFileSync('taskkill', ['/PID', String(b.proc.pid), '/T', '/F'], { stdio: 'ignore' });
      else b.proc.kill('SIGKILL');
    } catch {}
  }
  for (let i = 0; i < 5; i++) { try { rmSync(b.profile, { recursive: true, force: true }); break; } catch {} }
}

async function shot(cdp, file, extra = {}) {
  const fmt = file.endsWith('.webp') ? { format: 'webp', quality: shot.quality ?? 82 } : { format: 'png' };
  const { data } = await cdp.send('Page.captureScreenshot', { ...fmt, ...extra });
  writeFileSync(file, Buffer.from(data, 'base64'));
  return file;
}

// Finds what actually scrolls: the document, or the biggest inner scroller (some sites scroll a wrapper div).
const SCROLLER_JS = `(() => {
  const doc = document.scrollingElement || document.documentElement;
  let best = { el: null, range: doc.scrollHeight - innerHeight };
  if (best.range < innerHeight / 2) {
    for (const el of document.querySelectorAll('*')) {
      const s = getComputedStyle(el).overflowY;
      const r = el.scrollHeight - el.clientHeight;
      if ((s === 'auto' || s === 'scroll') && r > best.range) best = { el, range: r };
    }
  }
  window.__atelierScroller = best.el;
  const box = best.el ? best.el.getBoundingClientRect() : { left: 0, top: 0, width: innerWidth, height: innerHeight };
  return { range: Math.max(0, best.range), x: box.left + box.width / 2, y: box.top + box.height / 2 };
})()`;
const SCROLL_POS_JS = `(window.__atelierScroller ? window.__atelierScroller.scrollTop : scrollY)`;

// Scrolls with real wheel events so smooth-scroll libraries and scroll-driven animations react as they would for a person.
async function scrollTo(cdp, target, at, settle) {
  for (let guard = 0; guard < 400; guard++) {
    const pos = await cdp.eval(SCROLL_POS_JS);
    const left = target - pos;
    if (Math.abs(left) < 30) break;
    const delta = Math.sign(left) * Math.min(Math.abs(left), 120);
    await cdp.send('Input.dispatchMouseEvent', { type: 'mouseWheel', x: at.x, y: at.y, deltaX: 0, deltaY: delta });
    await sleep(16);
    if (guard > 0 && guard % 40 === 0 && Math.abs((await cdp.eval(SCROLL_POS_JS)) - pos) < 1) {
      await cdp.eval(`(window.__atelierScroller || window).scrollTo(0, ${target})`);
      break;
    }
  }
  await sleep(settle);
}

async function movePointer(cdp, from, to, steps = 20) {
  for (let i = 1; i <= steps; i++) {
    const x = from.x + ((to.x - from.x) * i) / steps;
    const y = from.y + ((to.y - from.y) * i) / steps;
    await cdp.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y });
    await sleep(16);
  }
}

async function run(a) {
  mkdirSync(a.out, { recursive: true });
  shot.quality = a.quality;
  const base = (suffix) => resolve(a.out, `${a.name}-${suffix}.${a.format === 'png' ? 'png' : 'webp'}`);
  const files = [];
  let b;
  const onSignal = () => { shutdown(b); process.exit(130); };
  process.on('SIGINT', onSignal);
  try {
    b = await launch(a);
    const { cdp } = b;
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: a.width, height: a.height, deviceScaleFactor: a.dpr, mobile: !!a.mobile });
    if (a.mobile) await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
    if (a.theme) await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: a.theme }] });
    const loaded = cdp.waitFor('Page.loadEventFired', 30000);
    await cdp.send('Page.navigate', { url: a.url });
    await loaded;
    await sleep(a.wait);

    if (a.mode === 'still') {
      files.push(await shot(cdp, base('00')));
    } else if (a.mode === 'time') {
      const step = a.frames > 1 ? a.duration / (a.frames - 1) : 0;
      const t0 = Date.now();
      for (let i = 0; i < a.frames; i++) {
        const due = t0 + i * step - Date.now();
        if (due > 0) await sleep(due);
        files.push(await shot(cdp, base(`t${String(i + 1).padStart(2, '0')}`)));
      }
    } else if (a.mode === 'scroll') {
      const s = await cdp.eval(SCROLLER_JS);
      await cdp.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: s.x, y: s.y });
      for (let i = 0; i < a.frames; i++) {
        const target = a.frames > 1 ? Math.round((s.range * i) / (a.frames - 1)) : 0;
        await scrollTo(cdp, target, s, a.settle);
        files.push(await shot(cdp, base(`s${String(i + 1).padStart(2, '0')}`)));
      }
    } else if (a.mode === 'mouse') {
      files.push(await shot(cdp, base('m01')));
      const p1 = { x: a.width * 0.33, y: a.height * 0.4 };
      const p2 = { x: a.width * 0.66, y: a.height * 0.6 };
      await movePointer(cdp, { x: 2, y: 2 }, p1);
      await sleep(a.settle);
      files.push(await shot(cdp, base('m02')));
      await movePointer(cdp, p1, p2);
      await sleep(a.settle);
      files.push(await shot(cdp, base('m03')));
    } else if (a.mode === 'full') {
      // Walk down first so lazy-loaded thumbnails exist, then come back and shoot the whole height.
      const s = await cdp.eval(SCROLLER_JS);
      for (let y = 0; y < Math.min(s.range, a.maxHeight); y += a.height) await scrollTo(cdp, y, s, 250);
      await scrollTo(cdp, 0, s, a.settle);
      const m = await cdp.send('Page.getLayoutMetrics');
      const h = Math.min(Math.ceil((m.cssContentSize || m.contentSize).height), a.maxHeight);
      files.push(await shot(cdp, base('full'), { captureBeyondViewport: true, clip: { x: 0, y: 0, width: a.width, height: h, scale: 1 } }));
    } else {
      throw new Error(`unknown mode ${a.mode}`);
    }
  } finally {
    shutdown(b);
  }
  console.log(JSON.stringify({ url: a.url, mode: a.mode, width: a.width, files }, null, 2));
}

const a = parseArgs(process.argv.slice(2));
if (a.help || !a.url || !a.name) { console.log(HELP); process.exit(a.help ? 0 : 1); }
run(a).catch((e) => { console.error(`capture failed: ${e.message}`); shutdown(e); process.exit(1); });
