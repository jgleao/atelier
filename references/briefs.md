# Brief templates

Fill the `<angle brackets>`, delete what does not apply, and keep each brief short enough to read in two minutes.
Every brief starts by pointing to `RULES.md`, states the role and the model, says exactly which files to write, when
to stop and what to report. A brief that leaves the stop condition vague produces either a worker that stops at the
first obstacle or one that sweeps a catalog for hours.

## Contents

1. RULES.md (shared)
2. Collector brief, search-based sources (galleries, shots): only for sources the library lacks
3. Collector brief, catalogs with motion (component libraries, animation templates, mockups): same
4. Curator brief (inventory, sections, rounds over the library, board)
5. Gap-search brief (the usual reason to browse at all)
6. Recorder brief (optional)
7. Revision round brief (after the approver reacts)

---

## 1. RULES.md

```markdown
# Reference research: <page name> (shared rules)

## What this is for
We are designing <page name> of <site>. It sells <what> to <who reads it>.
Parts the page has today (they may change): <list>.
The approved sibling page, which sets the level and the site's language, is <path or URL>.
The new page has to have a life of its own: graphic elements, light, depth, shapes that are not only rectangles,
texture, motion you notice in the first second. The previous version was rejected for <approver's words>.

## Folders
- Research files (briefs, inventory, sections, curation, board): <research folder>
- Reference library (findings, catalog lists, captures): <absolute path of the skill's library/>. Read
  `library/README.md` first: format, naming, numbering.
- Prototype captures: <project folder outside the repo>

## Machine rules (not negotiable)
- Capture browser: headless only, with its own temporary profile. Never a window on the main screen. Never the
  person's own browser (except where a brief explicitly says to use it through the extension).
- <Memory is short: one browser of yours at a time.> When a source is done, close that browser by its PID
  (found by its profile folder). Never kill browsers by process name.
- Edit nothing outside <research folder> and, for collectors, the library. No git. Do not touch the site's source.
- Scripts keep the file's line endings (Python: `newline=""`).
- <Writing-style rules of the person, e.g. banned punctuation, language.>
```

## 2. Collector brief: search-based sources

```markdown
# Brief: <collector name> (<fast model>, maximum effort): <sources>

Read `RULES.md` first.

## Your role
You collect, you do not choose. Do not say whether something is good or bad, and do not drop anything for taste.
The curator chooses from what you bring. The more that is well described, the better.

## Sources
1. <search URL>
   - Scroll the results until nothing new loads.
   - Then run these searches too: <queries: page types and styles relevant to the page, e.g. "services page",
     "process section", "about us page", "dark website", "3d website", "web animation">.
   - Open every shot to the very end of its page (shots often have several images and a video below).
   - Shot with video: capture 6 moments of the video (`<code>-<name>-v01..v06.webp`).
   - Goal: at least <N> shots opened to the end, from varied authors.
2. <catalog URL without an index>
   - First list every entry (name, link) in `library/lists/<source>.md`, scrolling up to <cap> entries.
   - If there are more than <trigger> entries, write "<SOURCE>: N entries" at the top of your findings file and
     keep going in list order.
   - Already read in earlier sessions, skip: <names>.

## What to write
File: `library/findings/<source>.md`, one block per finding in the library format (`library/README.md`),
continuing the library's numbering from <last ID in library/INDEX.md>.
- Describe each graphic element of a shot, not the shot in one sentence. Four ideas, four findings.
- Append every 10 findings, never rewrite.
- Captures at width 1600 in `library/prints/`, library naming.
- Your guess of where a finding fits this page, if any, goes to `<research folder>/fit-notes.md`, never into the
  library.

## When to stop
When the goals above are met. Then report: how many findings, how many captures, what you could not open and why.
Do not summarise "the best ones".

## Not allowed
Do not spawn subagents to browse (one browser at a time on the whole machine). Edit nothing outside the research
folder.
```

## 3. Collector brief: catalogs with motion

```markdown
# Brief: <collector name> (<fast model>, maximum effort): component and motion catalogs

Read `RULES.md` first.

## Your role
You collect, you do not choose. Here what matters is the motion: a still frame does not show a component. Always
capture the sequence.

## Sources, in this order
1. <component library URL> (<approx. size>)
2. <scroll-animation showcase URL>
3. <animation template gallery URL> (videos)
4. <large component catalog URL> (<size>, <free vs paid split>)
5. <mockup library URL> (photos; the only still source, one capture each is enough)

For each source:
- First list everything (name, link, the site's description) in `library/lists/<source>.md`, with counts per
  category.
- Then open the demo of each item <within the cap: N per source> and capture the motion
  (see `references/capture.md` or run `node <skill>/scripts/capture.mjs`):
  - plays by itself: 6 frames over time (`-t01..t06`);
  - scroll-driven: 6 frames at scroll positions (`-s01..s06`);
  - pointer effect: 1 frame untouched and 2 with the pointer in different places (`-m01..m03`).
- Purely decorative backgrounds (shader, sphere, tunnel, particles) are listed but opened last; open first the
  text, image, card, scroll, navigation and interaction items.
- Paid items without a demo: capture the thumbnail grid of each category and describe from the thumbnails,
  marking each such finding "not opened (paid), described from the grid".
- Mockup library: open only <device or scene> items (laptop, phone, tablet, monitor, desk, wall, paper, packaging).

## What to write
File: `library/findings/<source>.md`, library format and numbering. Append every 10 findings. Captures in
`library/prints/`. Guesses of fit go to `<research folder>/fit-notes.md`.

## When to stop
When every source is listed and opened within its cap. Report counts, captures, and what failed (paywall, broken
demo, bot wall). Do not summarise "the best ones".
```

## 4. Curator brief

```markdown
# Brief: Curator (<strongest model>, high effort): visual direction of <page name>

Read `RULES.md` first.

## Your role
You decide the design. The collectors only collect: they write factual findings with captures. Their taste is not
reliable; yours is the one that counts. Do not delegate judgment to subagents.

## Task 1: what is already used (now)
Open the approved sibling <path>, read the code and render it (entry frame by frame, scroll positions, pointer).
Write `already-used.md`: the grammar that may repeat (G1...), each specific piece that is blocked (U01...) with what
is blocked and what stays free, and the moves already spent. The rule: block the piece, never the category.

## Task 2: what the page has to say
Read the current page (<path, section id>) and the approved copy (<paths>). Write `sections.md`: why the current
version fails, part by part; who reads it; the proposed order; the motion map; one sheet per part (copy that stays,
feel/understand, the piece it asks for, directions to filter findings, what it must not repeat); decisions for the
approver, marked.

## Task 3: filter the library, in rounds
The reference library is at <absolute path of library/>: read its README, then work in batches (by source, or by
part of `sections.md`), from `INDEX.md` to the findings to the captures in `prints/`. Open the captures of anything
promising (never judge from the description alone). Append a round to `curation.md`: range examined, chosen (ID,
why, which part, how to adapt, care), rejected in bulk with a reason, swaps, what still has no piece. When the
coordinator says fresh findings landed from a gap search, run a round on them the same way.
Criteria: level of the references; memorable; at least three of light, depth, non-rectangular shape, texture,
first-second motion; no blocked piece; moves differently from its neighbour. Brand: <tokens source>.

## Task 4: the board (when asked)
`board.html`: part by part, the chosen piece with its reference captures and two lines on how it would look in
the brand. At most two options per part. Start from `<skill>/assets/board-template.html`.

## Do not
Build the page yet. Touch the site's source. Use git.
After each task, report to the coordinator in a few lines with the file paths.
```

## 5. Gap-search brief

Use after the first rounds, instead of another full sweep.

```markdown
# Brief: <collector> gap search, round <N>

Read `RULES.md` first. Same role and finding format as before; continue numbering from <last ID>.

## What is still missing (from `curation.md`)
- <part>: <a narrow description of the missing piece, e.g. "the continuous transformation from paper to screen,
  in one movement; the isolated states already have references">
- <part>: <...>

## Where to look
The library (<path>) has already been searched for these gaps; do not repeat what is there.
<Only the sources and searches likely to have it, with queries. Entries in `library/lists/` that were listed but
never opened are a cheap first place to look.>

## Cap and stop
At most <N> findings per gap. Stop when each gap has <M> candidates or the cap is hit, and report which gaps
stayed empty.
```

## 6. Recorder brief (optional)

```markdown
# Brief: Recorder (<fast model>): the process log

You document; you do not give opinions on design and do not choose references.
Keep `LOG.md`, cumulative (append, never rewrite from scratch), with:
1. what the work is and why the previous version failed;
2. roles and models;
3. the steps in order: who, input, output (file, line count), timing from file timestamps;
4. numbers: findings per source, captures per prefix, chosen per curation round, all recounted from the files
   (never copied from a brief or a chat message; where a cited number does not match the files, write both);
5. coverage per source: catalog size, listed, opened, where it stopped and why;
6. lessons and decisions, as the coordinator sends them;
7. file index;
8. what is method and what is only this project's result, marked step by step;
9. what is still open.
Mark anything that was still changing while you wrote it.
```

## 7. Revision round brief

The approver reacted to the applied prototypes. Every revision brief follows the same shape:

```markdown
# <Part>, round <N>: <one line on the goal>

You: Curator, <strongest model> at high effort. No git, nothing in the site's source.

## What the approver said
- <their words, quoted, per scene or element>
- <what was kept, what was rejected>
(Attach their screenshots when they sent any, and say which file is which.)

## Why (coordinator's reading)
<The concrete cause behind the words: e.g. "the section switched material: paper and wood next to a page made of
light and glass".>

## Blocked pieces (already used or rejected: do not repeat or vary)
<The growing list: every rejected piece so far, plus the sibling pieces relevant here.>

## What to build
<Files, e.g. `<page>-<part>-e.html` and `-f.html`, each the full page with the approved parts around it. Two
directions that differ from each other when the idea itself is open; one file when it is finishing work.>
<What stays as it is, and the approved files that must not be touched.>

## Level and check
Same bar as the first build brief, item by item. <Page-wide decisions in force, e.g. single theme.>
Check at desktop and phone widths, <themes>, with capture prefixes `<page>-<part>-e-`.
Look at the captures and ask: does it read in two seconds without the text? does it look like the same page as the
approved parts? is it at their level?
```

Name files with a running letter per round (a, b, c...) and never overwrite an approved file; approved copies live
in their own folder that nobody edits.
