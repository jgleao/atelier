# Reference library

What the collectors of a real run of this method found, kept so the next run can start from it instead of browsing
again. It holds factual findings on third-party galleries and component catalogs, the full catalog listings, and
every capture.

**This is raw material, not a recommendation.** Nothing here has been judged. No project's choices are recorded
here: the curator of each new page filters the library again, for that page, against that page's
`already-used.md`. A finding being in the library says only that it existed, not that it is good.

Snapshot: 2026-09-22. Catalogs change, links break and items disappear. When a finding matters, open its link
to confirm it is still there.

## Layout

```
INDEX.md             one line per finding (ID, source, item, start of motion, first print): search here first
findings/<source>.md full findings, factual only
lists/<source>.md    complete catalog listings (what exists, including what was never opened)
prints/*.webp        captures, original resolution (up to 1600 px wide)
```

Paths are relative to this folder. It lives inside the skill folder, so it moves with the skill: resolve it from
the skill's base directory, and give collectors and the curator the absolute path in their briefs.

## Coverage

| Source | Catalog | Listed | Findings | What is not covered |
|---|---|---|---|---|
| React Bits Pro | 150 components | 150 | 150 (F-001 to F-150), all live | nothing |
| GSAP Scroll showcase | 14 blocks on one page | 14 | 11 (F-151 to F-161), 6 scroll positions each | 3 static blocks, listed only |
| Jitter templates | 404 templates | 404 | 22 (F-162 to F-183), 6 time frames each | 382 templates, listed only |
| mockups.digital | 1,274 items, 7 categories | 1,274 | 65 (F-184 to F-248): 7 category grids + devices and paper/desk items | Frame, Outdoor, Packing, Apparel, Vehicle: grids only |
| OriginKit | 502 announced, 475 found | 459 | 228 (F-249 to F-476): 2 live + 226 paid items described from grid thumbnails | 247 free "Preview" items never opened |
| Dribbble | search-based | 42 shots | 42 (R-001 to R-042) | anything outside the listed searches |
| Refero Styles | 2,000+ claimed | 340 | 14 (R-043 to R-056) + a yes/no quick pass over 149 | 177 listed entries never opened |

Totals: 532 findings, 1,620 captures. Each findings file starts with its own coverage notes.

## Findings

Written in English, whatever the language of the run that adds them, so the library stays searchable in one
language. Each block:

```
## F-037 · <source> · <item>
- link: <url>
- prints: rb-<item>-t01.webp ... -t06.webp
- what it has: shape, light, color, texture, type, composition. Facts only.
- motion: what moves, trigger, order, duration. "Still" when nothing moves.
```

Search by material and behaviour rather than by name: `glass`, `light`, `shadow`, `glow`, `grain`, `noise`,
`gradient`, `relief`, `particle`, `sphere`, `ribbon`, `wave`, `scroll`, `pointer`, `cursor`, `by itself`, `click`,
`text`, `card`, `mockup`, `phone`, `laptop`, `paper`.

## Prints

Name: `<source code>-<item slug>-<suffix>.webp`.

Source codes: `rb` React Bits Pro, `gsap` GSAP Scroll, `jit` Jitter, `mock` mockups.digital, `ok` OriginKit,
`drb` Dribbble, `ref` Refero (`ref-NNN-*` are the quick-pass prints, NNN being the entry number in
`lists/refero.md`).

| Suffix | Meaning |
|---|---|
| `-t01..t06` | 6 moments over time (plays by itself) |
| `-s01..s06` | 6 scroll positions |
| `-m01..m03` | pointer: untouched, then two positions |
| `-v01..v06` or `-v-01..` | 6 moments of a video |
| `-01..-06` | several images of one shot |
| `-00` | one still |
| `grid-*` | a category's thumbnail grid |

Findings abbreviate a sequence as `first-name.webp ... -t06.webp`: every frame in between exists.

## Adding to the library

When a run browses again (a gap search, a new source, a stale catalog), what it collects comes back here so the
next run has it:

- Continue the numbering: `F-` for component and motion catalogs, `R-` for galleries and design-system sites
  (check the last ID in `INDEX.md`). A new source gets its own `findings/<source>.md` with a coverage header like
  the existing ones, and its full listing in `lists/`.
- Facts only, in the same fields. Guesses about where a finding would fit in a specific page ("could serve")
  belong to that project's research folder, never here.
- Captures go to `prints/` with the naming above. `scripts/capture.mjs` writes WebP at quality 82 by default,
  which is the library's format.
- Update the coverage table above and the file's header, write the collection date, then rebuild the index:
  `python scripts/build_index.py`.
