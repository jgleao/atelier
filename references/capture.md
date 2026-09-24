# Capture

A still frame hides the thing the curator most needs to judge: how it moves. Every capture of a moving reference is
a short sequence.

## Frame conventions

| What it is | Frames | Suffix |
|---|---|---|
| Plays by itself | 6 over its cycle (default 3 s) | `-t01..t06` |
| Scroll-driven | 6 at evenly spaced scroll positions | `-s01..s06` |
| Pointer effect | 1 untouched, 2 with the pointer in different places | `-m01..m03` |
| Video (shots, templates) | 6 moments of the video | `-v01..v06` |
| Still (photo mockups) | 1 | `-00` |
| Catalog grid | 1 tall image per category | `-full` |

Reference captures follow the library's naming (`library/README.md`): `<source code>-<item slug>-<suffix>`, for
example `rb-liquid-ribbon-t03`, one short code per source (`drb`, `ref`, `rb`, `gsap`, `jit`, `ok`, `mock`, or a new
one for a new source), written straight into `library/prints/` and converted to WebP. Width 1600 for desktop.
Prototype captures are not references: they go to the project's own folder, named after the prototype file.

## The bundled script

`scripts/capture.mjs` needs Node 22 or later and an installed Chrome or Edge (found automatically, or pass
`--browser` / set `CHROME_PATH`). It starts a private headless browser with a temporary profile, captures, and
closes that browser by PID, so it never touches the person's browser and never leaves orphans.

```bash
node scripts/capture.mjs --url <demo url> --name rb-liquid-ribbon --mode time   --out library/prints
node scripts/capture.mjs --url <demo url> --name gsap-block-03   --mode scroll --out library/prints
node scripts/capture.mjs --url <demo url> --name rb-cursor-trail --mode mouse  --out library/prints
node scripts/capture.mjs --url <grid url> --name ok-grid-text    --mode full   --out library/prints
node scripts/capture.mjs --url <page>     --name proto-a-390-dark --mode scroll --mobile --theme dark --format png --out <project prototype captures>
```

It writes WebP at quality 82 by default (the library's format; `--format png` for prototype checks) and prints
a JSON list of the files it wrote. Useful options: `--frames`, `--duration`, `--wait` (for slow pages),
`--settle` (for long scroll transitions), `--width/--height`, `--mobile`, `--dpr`, `--theme dark|light`,
`--headed --window-position x,y`. Run `--help` for all.

Scroll mode dispatches real wheel events (smooth-scroll libraries and scroll-triggered animations ignore a plain
`scrollTo`), and finds the inner scroller when a site scrolls a wrapper instead of the document.

It cannot get past logins or bot walls. For those sites, use the person's own browser through a browser extension,
in a tab of its own.

## Verifying a build (prototypes)

Check every applied prototype before calling it done, and before the coordinator shows it to anyone:

- **Widths:** desktop 1600 and phone 390 (`--mobile`, which emulates touch and the mobile layout). The phone
  version is designed, not shrunk.
- **Themes:** every theme the page supports.
- **Time:** frames from 0.3 s to 3 s after load, to see the first-second motion.
- **Scroll:** several positions through the built part and into the next one, to see the exit and the transition.
- **Pointer:** at rest, and in two positions, including a corner (lights that follow the pointer tend to go dark
  when it sits in a corner or leaves the window; there must be a base light that always reveals the scene).
- **WebGL on:** headless uses software rendering; the script enables it, but check the canvas is not blank.
- **Crop at 100 %:** zoom into the capture to judge sharpness (blurry edges, noise veiling the scene, halos). Render
  at the real device pixel ratio, with a cap if it gets heavy.

Then look at the captures next to the references and next to the approved parts, and ask: is it at their level? is
it memorable? does it read in two seconds without the text? A build that was never looked at is not verified.

## Measuring performance

Performance is part of acceptance, so it is measured like it:

- in a **real window** (`--headed`, placed off the main screen with `--window-position`), because headless
  underestimates the cost by about half;
- per section (opening, each scene, pinned parts), at 1x and 2x pixel density;
- as frame rate while the page scrolls through that section, before and after each optimisation.

What paid off most in practice: a single GPU context shared by several scenes instead of one per scene; nothing
drawing while off screen (IntersectionObserver) and nothing redrawing while idle; everything static (normal maps,
height maps of still pieces) computed once; pixel density capped by measured cost rather than fixed; no heavy
filters animated every frame (a double animated drop-shadow is enough to stutter a page).
