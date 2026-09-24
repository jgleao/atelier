# From direction to applied prototypes

The research ends with a board, but nobody decides from a board. The approver decides by seeing each option
running as it would on the site. This file covers how to get there without losing the level the research found.

## What an applied prototype is

- A **full page that looks like the site**: the site's top bar, the built part with the approved copy, and the
  beginning of the next part below it, so the transition and the exit on scroll are visible.
- Built on the approved sibling's visual base: fonts, color tokens per theme, grain, top bar, buttons (the G items
  of `already-used.md`). None of the blocked pieces.
- No presentation chrome: no frame around it, no "Option A" box, no caption explaining what the element does.
- No invented data that looks real (fake client names, fake numbers presented as facts).
- **Two directions** per part in the first round, different from each other, as separate files. Later rounds may
  build one file when the work is finishing, or two or three when the idea itself is still open.
- Once some parts are approved, new parts are built inside the page with the approved parts around them, so the
  approver judges the section where it will live, not in isolation.

## The quality bar, item by item

Write this list into every build brief. It is what made approved pages get approved on sight:

- light and depth in layers, not a flat background with an object placed on top;
- the brand's colors and gradient with real weight, not as a tint;
- a shape that is not a rectangle;
- texture;
- motion noticed **in the first second**, without scrolling;
- reaction to the pointer, and on touch a movement of its own that does not depend on a mouse;
- an exit on scroll that is not one the sibling pages already use;
- runs smoothly (see performance in `capture.md`).

Plus the page-level rules from `sections.md`: the motion map (no part moves like its neighbour, no two pins in a
row), the language of the approved parts (material, light, recurring character), and the two-second rule for
scenes.

## Build brief template

```markdown
# Build <N>: applied prototypes for the approver to decide by seeing

The approver cannot choose from screenshots: they need each option working as it would on the site.
You (Curator, <strongest model>, high effort) know the whole research: sections.md, curation.md,
already-used.md, board.html.

## What to build (<k> files in <folder>)
1. `<page>-<part>-a.html`: <part>, direction A (<the piece, with the finding IDs behind it>).
2. `<page>-<part>-b.html`: <part>, direction B (<...>).

Each file is a full page that looks like the site: top bar, the part built with the approved copy
(sections.md), and the start of the next part. No presentation frame, no captions, no "option" labels.
Visual base: copy fonts, theme tokens, grain, top bar and button from <approved sibling> (G items).
Copy none of the blocked pieces (U items).

## The level required
<paste the quality bar above>
Use <effect libraries or skills available> and the captures cited in curation.md.

## Rules
- Themes: <which>. Phone at 390 designed, not shrunk.
- Check as in `capture.md` (1600 and 390, themes, time 0.3 to 3 s, scroll, pointer), captures in
  <prototype captures folder> with prefix `<page>-<part>-a-` / `-b-`.
- Look at the captures and compare with the references before saying it is done.
- <Machine rules: one browser at a time, closed by PID.> No git. Do not touch the site's source.
- Order: <first pair>, report when ready and checked; then <second pair>.
```

Set the model and effort in the brief before sending it. A build brief that names the wrong model gets built by the
wrong model.

## Review before the approver sees anything

The coordinator opens the builder's captures before showing anything:

1. Phone width first, then the secondary theme: that is where builds break (an empty gap of a few hundred pixels
   on mobile, a shape that goes flat without the dark background, a light band touching the logo, a title sliding
   under the top bar).
2. Then the level: would this stand next to the approved sibling? Is it memorable? Does each scene read in two
   seconds?
3. If it is below the level, send it back with the concrete reasons. Rejecting here is cheaper than rejecting in
   front of the approver, and a direction that misses the level is rebuilt from zero, not patched.
4. Only a real artifact counts as delivery. A reply saying the work is about to happen is not a delivery.

## Rounds with the approver

- **First pass:** the approver sees the applied options and picks one per part.
- **Second pass:** fine adjustments on the winner only (sharpness, how an interaction is driven, e.g. scroll instead
  of dragging, a word that morphs, even a page-wide rule such as a single theme). These do not reopen the discarded
  options. A page-wide rule applies to that page only.
- Translate every reaction into a concrete cause before writing the next brief ("low resolution" became "render
  at the device pixel ratio, sharp bevels, grain only as surface texture"; "disconnected" became "switched
  material").
- The rejected list grows with every round and goes into every later brief.
- When the approver praises one element of a rejected option, keep that element and say so explicitly in the
  next brief, with their screenshot.
- If the coordinator misread which element they meant, correct it openly in the next brief, using their own
  screenshots as the reference to compare against.
- When a scene keeps failing, simplify rather than trying yet another story: a single element that reacts to the
  pointer, alive when idle (a slight breathing motion), obvious on the first gesture and fun to repeat, can take
  the place of a narrative.

## Generated images

When a part needs people or a real scene and stock photos look like stock:

- Generate with an image model, treated in the brand: a gradient-map duotone in the brand palette.
- Attach the treatment reference separately from the lighting reference, and say which is which.
- Keep correction requests short and targeted (hands, face, off-brand color); if a patch does not take after a
  try, regenerate with a more specific prompt instead of patching again.
- Generate the phone crop in the same conversation so clothes, table and light match, or crop in code from the
  desktop image, which often works better than another generation.
- Record which files were chosen, at what size, and what is still missing (for example a version for another theme).
