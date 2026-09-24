# atelier

A [Claude Code](https://claude.com/claude-code) skill for art-direction research on a web page: finding what a
page should show, how it should move and what it should be made of, section by section, from real references
instead of taste in a vacuum, and getting the approver to decide by seeing options applied.

It is a method and a library:

- **The method** (`SKILL.md`, `references/`): inventory what the site already uses and block those specific pieces,
  map what each section has to say, filter references in rounds with the strongest model (fast models only
  collect facts, never judge), present a board, then build applied prototypes and review them before the approver
  sees them. It came out of a real run where a page rejected as lifeless was rebuilt this way and approved.
- **The library** (`library/`): 532 factual findings and 1,620 motion captures from Dribbble, Refero Styles,
  React Bits Pro, the GSAP scroll showcase, Jitter, OriginKit and mockups.digital, plus the complete catalog
  listings of those sites (snapshot of September 2026). A new research starts by filtering it; browsing is only
  for gaps, and whatever a new run collects goes back in.

## Install

Clone it into your skills folder, keeping the folder name:

```bash
git clone https://github.com/jgleao/atelier ~/.claude/skills/atelier
```

Claude Code picks it up on the next session. Ask for references or a visual direction for a page, or type
`/atelier`.

## Requirements

- For the method and the library: nothing beyond Claude Code.
- To capture new references (`scripts/capture.mjs`): Node 22+ and Chrome or Edge installed. No npm packages.
- To rebuild the library index (`scripts/build_index.py`): Python 3.

## Layout

```
SKILL.md                  the method (what Claude reads)
references/               brief templates, sources, capture and verification, building prototypes
assets/board-template.html
scripts/capture.mjs       motion capture: time, scroll, pointer, full page
scripts/build_index.py    rebuilds library/INDEX.md
library/                  README, INDEX, findings/, lists/, prints/
```

Everything in the repository is in English. When you use the skill, Claude works and writes the research files
in the language you use.

## Authors

[jgleao](https://github.com/jgleao) and Claude ([Anthropic](https://www.anthropic.com)).

## About the captures

The images in `library/prints/` are screenshots of third-party websites and components, kept for reference and
research. They belong to their respective owners and authors; each finding links to its source. They are not
licensed for reuse in your own work, and the method itself says not to: take the idea, never the component as
it ships.
