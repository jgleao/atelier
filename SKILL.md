---
name: atelier
description: Art-direction research for a web page or site section, run as a small studio. Ships with a ready reference library (532 factual findings and 1,620 motion captures from Dribbble, Refero, React Bits, GSAP, Jitter, OriginKit and mockups.digital), so browsing is optional. Inventory what the site already uses, map what each section has to say, filter the library (and, only for gaps, fresh collection) in rounds with the strongest model, and put the options in front of the approver so they decide by seeing them applied, not by reading a description. Use this whenever someone wants to redesign a page that feels dead, flat, generic or "has no graphic element", asks for references, inspiration or a moodboard for a landing page, hero or section, wants to curate visual direction before building, or wants a research-to-prototype workflow for a site, even when they never say the word "research".
---

# Atelier

A method for finding the visual direction of a web page before building it: what to show, how it moves and
what it is made of, section by section, based on real references instead of taste in a vacuum. It came out of a
real run where a page was rejected as lifeless, rebuilt through this process, and approved with enthusiasm. Most of
what follows is there because skipping it failed at least once.

The output is a **direction**: the pieces chosen for each section, with the references behind them, ready to be
built as applied prototypes. The research does not write copy and does not build the final page.

**Start from the library, browse only for gaps.** The `library/` folder next to this file already holds what the
collectors of a previous run found: factual findings, complete catalog listings and every capture (see
`library/README.md` for coverage). Most of a new research is filtering that material for the new page. Browsing
is for what the library does not cover: a gap no finding fills, a source it never visited, a catalog that has
clearly changed. Whatever a new run collects goes back into the library.

## When it pays off

- A page or section was rejected for looking dead, generic or disconnected, and nobody knows what "alive" means yet.
- A new high-visibility page has to stand next to pages that are already approved.
- A section needs a graphic idea (an object, a scene, a motion) and there is none.

It does not pay off for a small tweak, a copy change, or an effect that is already named ("add parallax to the
hero"). Build those directly.

## Principles

These are the load-bearing ideas. The steps below only make sense because of them.

1. **Collecting and judging are separate jobs.** Collectors describe facts (shape, light, color, texture, type,
   motion) and are forbidden to say what is good. Only the curator judges. A fast model describes well when opinion
   is off the table, but its taste is unreliable, and a collector that filters by taste throws away the one thing
   the curator would have picked.
2. **Block the specific piece, never the category.** What the site already uses is blocked as that exact piece: that
   phone mockup, that ribbon, that before/after slider. Another phone mockup or another comparison done differently
   stays allowed. Blocking categories empties the toolbox for no reason.
3. **Take the idea, never the component as it ships.** A finding is raw material. What is chosen is the technique or
   the idea, rebuilt in the site's own brand (its colors, type, grain, radius). A catalog component pasted as-is
   reads as a template, and anyone can recognise it.
4. **Open the capture before trusting the description.** The curator looks at the frames at full size. Descriptions
   flatten exactly what makes something memorable.
5. **People decide by seeing it applied.** Nobody chooses well from a screenshot or a paragraph. The approver sees
   each option running as it would on the site, at most two options per section.
6. **Words come before form.** The research changes form, order and motion, not the copy. If the copy is not
   approved yet, settle it first or flag it, because a piece designed around a sentence breaks when the sentence
   changes.
7. **Raw material travels, choices do not.** Factual findings and captures go into the shared library and serve
   every future page. What one page *chose* never does: its chosen pieces, section texts and inventory stay in that
   project, and when the page is approved its pieces enter the next page's "already used" list, to be blocked,
   never suggested.
8. **Only a deliverable closes a step.** "Now I'll build it" is not a result. A step ends when the file, image or
   list it asked for exists.

## Roles

| Role | Model | Job |
|---|---|---|
| Coordinator | the main session | Writes the briefs, dispatches, checks what comes back, relays decisions to and from the approver. Does not execute. |
| Collectors (0 to 3, only when browsing) | a fast model (e.g. Sonnet) at maximum effort | Visit sources, capture motion, write factual findings into the library. Never judge. |
| Curator | the strongest available model, high effort | Inventories what is already used, maps the sections, filters findings in rounds, builds the board, and later the applied prototypes. |
| Recorder (optional) | a fast model | Keeps a running log of the process: steps, files, counts, decisions. No design opinions. Worth it when the process itself is worth reusing. |

Why the coordinator does not execute: when the person who reviews also builds, nobody reviews. Keeping the
coordinator's hands off the work keeps its eyes on it, and it is the coordinator who catches the problems before
the approver does.

**Mapping to tools.** In Claude Code, collectors are subagents launched with the Agent tool and a fast model; the
curator is either the main session (then the main session plays both coordinator and curator, in separate turns) or
a subagent on the strongest model. Design judgment (curating, building, critiquing a visual) always stays on the
strongest model: a fast model correcting design flattens it. Write the model and effort into every brief and check
them before dispatching, not after the work has started. If only one agent is available, keep the hats apart in
time: collect a batch without judging it, then switch to curating.

Respect the person's own limits on parallel agents and machine memory (see "Machine hygiene" below). The browser is
the expensive part; two collectors with one browser each is usually the ceiling on a laptop.

## Workflow

Use one folder per research, next to the project's docs, for example `docs/research-<page>/`:

```
RULES.md             shared rules for every worker (machine, conduct, folders, writing style)
brief-<role>.md      one brief per worker
already-used.md      inventory of the approved sibling pages (step 1)
sections.md          what the page has to say, part by part (step 2)
curation.md          the curator's rounds over the library (step 3) and any fresh findings (step 4)
fit-notes.md         collectors' guesses of where a fresh finding could fit this page (optional)
board.html           what the approver opens (step 5)
LOG.md               the recorder's log (optional)
```

Findings and reference captures do not live here: they live in the skill's `library/` (resolve its absolute path
from this skill's base directory and write it into every brief). Prototype captures go to a separate folder of the
project, outside the repository: they are output of the build, not reference.

### Step 0. Setup

Before any work starts, collect the inputs (ask the person for whatever is missing, in one go):

- the page, who reads it, and what they should leave with;
- what is wrong with the current version, **in the approver's own words** (then translate those words into concrete
  causes: "dead" usually means no object, no light direction, no depth, no non-rectangular shape, no texture, nothing
  moving in the first second; "disconnected" usually means the section switched material or world);
- the approved sibling pages of the same site, and where the brand tokens live (colors, gradients, type);
- the approved copy;
- only if browsing will be needed: machine memory, which sites need a login or block bots, time budget, item caps.

Then write `RULES.md` and one brief per worker before any work starts. Templates are in `references/briefs.md`.

### Step 1. Inventory what is already used (curator)

Read the approved sibling pages in code **and** render them: entry frame by frame, several scroll positions, the
pointer in two places. Write `already-used.md` with:

- **Grammar that may repeat** (the site's shared language: label style, title treatment, grain, button, type scale,
  material of screens). Numbered G1, G2...
- **Specific pieces that are blocked**, one per piece, each saying what exactly is blocked and what stays free.
  Numbered, for example U01, U02...
- **Moves already spent**: entrances, exits and scroll behaviours the sibling pages already use.
- What was only glanced at and not audited, so nobody over-trusts the list.

If there is no approved sibling, inventory the rejected version instead, plus anything the brand guide already
fixes. When this page is approved, its pieces enter the next page's inventory the same way.

### Step 2. Map what the page has to say (curator)

Write `sections.md`:

- why the current version fails, part by part, concretely (for example: "the only drawing on the page is four
  24 px line icons");
- who reads it and what they leave with;
- the proposed order of the parts, and a **motion map**: no part moves like its neighbour, and never two
  scroll-pinned parts in a row (two pins in a row feel like the page is stuck);
- one sheet per part: the copy that stays, what the reader should feel and understand, the kind of piece the part
  asks for, concrete directions to filter findings with, what it must not repeat from `already-used.md`;
- **decisions for the approver**, marked as such (new order, cutting or merging parts, which clients or screens can
  appear). Do not settle them silently.

### Step 3. Curate the library in rounds (curator)

Read `library/README.md`, then go through the library in batches: scan `library/INDEX.md`, read the findings of
the batch in `library/findings/`, and **open the captures** in `library/prints/` of anything promising. The
README lists good search words. Batch however suits the page: by source, or by part
(search the index and findings for what each part in `sections.md` asks for). The complete listings in
`library/lists/` show what exists but was never opened: a name there can be worth a look even without a finding.

Each round goes into `curation.md`:

- the range examined (which IDs), and the captures actually opened;
- **chosen**: ID, why it works, which part, how to adapt it to the brand, what to watch out for when adapting;
- **rejected in bulk**, with a one-line reason (generic, repeats a sibling piece, off-brand, heavy);
- swaps against earlier rounds;
- **what still has no piece**, which becomes the next gap search.

Criteria, every round:

- is it at the level of the best references, and is it memorable?
- does it bring at least three of: light with direction, depth, a shape that is not a rectangle, texture, motion
  visible in the first second?
- does it avoid every blocked piece in `already-used.md`?
- does it move differently from the neighbouring part (motion map)?

Expect the yield to drop round after round (roughly one chosen in ten examined at first, less later). When a
round yields almost nothing, stop and look at what is still missing. Design-system catalogs (sites that break
down real sites into palette, radius, shadow, type) are better mined for **style rules** (how light, corners,
shadows are handled) than for pieces.

### Step 4. Browse only for the gaps (collectors, optional)

Skip this step when the library covered every part. Otherwise, a gap in references does not always need more
searching: sometimes the curator closes it faster by sketching directly in code. When it does need searching,
send collectors after **the gaps only**, each with a narrow description of what is missing and a cap
(gap-search brief in `references/briefs.md`). Also browse when a source the page needs is not in the library, or
when a catalog has clearly changed since the snapshot.

- For a source the library does not have, list its whole catalog first (name, link, the site's description,
  counts per category) before opening items, and pick a coverage strategy (`references/sources.md`). Count from
  the files, not from memory: counts repeated in conversation drift.
- Findings use the library format (`library/README.md`), facts only, continuing the library's numbering, appended
  to `library/findings/<source>.md` every ten findings, never rewriting what is there. One finding per graphic
  idea: a shot with four ideas becomes four findings.
- Capture the motion, not a still (`references/capture.md`, `scripts/capture.mjs`), straight into
  `library/prints/` with the library's naming.
- A guess about where a finding fits *this* page goes into the project's `fit-notes.md`, never into the library.
- Stop at the brief's goal and report: how many findings, how many captures, what could not be opened and why.
  Never report "the best ones"; that is the curator's job.
- The curator runs a round on the new findings as they land, the same way as step 3. At the end, rebuild the
  index (`python scripts/build_index.py`) and update the coverage in `library/README.md`.

### Step 5. The board (curator)

`board.html` is a page the approver opens and reads part by part: the chosen piece, the reference captures next to
it, two lines on how it would look in the brand, at most two options per part, and a box at the top with what is
still missing. No presentation chrome, no captions explaining what an element does. A starting template is in
`assets/board-template.html`.

Reference captures come from `library/prints/`; link them by absolute `file:///` path so the board opens from
anywhere.

The board orients; it does not decide. The decision happens on applied prototypes (step 6).

### Step 6. Hand off to building

Once the approver has seen the board, the curator builds applied prototypes, two directions per part at first,
each a full page that looks like the site. The brief template, the quality bar item by item, the review protocol and
how revision rounds work are in `references/building.md`. Read it before writing the first build brief.

### Step 7. Close

When the page is approved: add its pieces to the next page's `already-used.md` as blocked pieces, copy the approved
files to an "approved" folder that nobody edits, and record in the log what changed in the method. Make sure every
fresh finding and capture made it into the library, with the index rebuilt. The project's choices (curation,
board, section texts, fit notes) stay in the project and never enter the library.

## Lessons from the field

Each of these cost at least one rejected round. The why matters more than the rule.

- **Narrow quick filters.** A pre-pass filter like "has a graphic element?" passes nearly everything and filters
  nothing. A quick pass needs a question narrow enough to say no most of the time.
- **Big or paywalled catalogs: shoot the grid.** Capture the thumbnail grid per category instead of opening a
  thousand items one by one. The grid is enough to spot candidates; open only those.
- **Sites that block bots or hide content behind a login:** use the person's own browser through a browser
  extension, in a tab of its own, with their permission. Never their profile in a headless browser.
- **Machine memory is the real bottleneck.** One browser per worker, capped concurrency, smaller viewports, fewer
  frames when memory is short, a timeout on every command. Close each browser by its PID when done; killing browsers
  by process name also closes the person's own browser and every dev server window in it.
- **Before calling something a flaw, check the approved sibling.** If the approved page has the same trait, it is
  an accepted piece of the site's language, not a problem.
- **Builders check less of what fails most.** They look at desktop and the main theme; what fails is phone width
  and the other theme (empty gaps on mobile, flat shapes in light mode, elements touching the logo). The coordinator
  checks those first.
- **Reject before the approver sees it.** If a delivery is below the level, the coordinator sends it back; review
  exists to reject, not only to ask for polish. A rejected direction is rebuilt from zero, not patched.
- **A new section speaks the language of the approved ones** (material, light, recurring character). A section
  that switches worlds looks disconnected even when it is well made on its own. The brief for each new section names
  that language and blocks whatever leaves it.
- **The two-second rule for scenes.** Someone scrolling understands the scene in two seconds without reading the
  text next to it. One action per scene, with a beginning and an end. If a scene needs a caption, it is wrong. After
  repeated rejections, simplify: a single element that plays with the pointer can replace a story.
- **Performance is an acceptance criterion, not polish.** Measure in a real browser window (headless underestimates
  the cost by about half), per section, at 1x and 2x pixel density, with before and after numbers.
- **The rejected list only grows.** Every piece rejected by the approver joins the blocked list and is pasted into
  every later brief, so no one rebuilds a variation of it.
- **When the coordinator gets a brief wrong, say so in the next brief** and correct it with the approver's own
  screenshots of what they liked. Owning the mistake keeps the builder from defending the wrong target.
- **Decisions in the second pass are scoped.** Approvers choose in two passes: first an option among the applied
  ones, then fine adjustments on the winner only (sharpness, the interaction mechanism, a word, even a page-wide
  rule like a single theme). Those adjustments do not reopen the discarded options, and a page-wide rule applies to
  that page, not to the site's conventions.
- **Images with people.** Stock photos read as stock. Generated images work when they carry the brand: a duotone
  gradient-map treatment in the brand palette, a treatment reference attached separately from the light reference,
  and the mobile version generated in the same conversation so clothes, table and light match. Small patch requests
  rarely work; regenerate with a more specific prompt instead. Cropping in code for the phone version often beats
  asking for a new generation.

## Machine hygiene (for every worker)

- Capture browsers run headless with their own temporary profile, never the person's browser and never a window on
  their main screen. A headed window (only for performance measurement) opens off the main screen.
- One browser per worker at a time, closed by its PID when the source is done.
- Workers edit only the research folder and, when collecting, the skill's `library/`. No git, no changes to the
  site's source during research.
- When a script writes text files on Windows, it keeps the line endings it found (in Python, `newline=""`).

## Bundled files

- `library/`: the reference library. `README.md` (coverage, format, naming, how to add), `INDEX.md` (one line per
  finding), `findings/`, `lists/`, `prints/`.
- `scripts/build_index.py`: rebuilds `library/INDEX.md` after findings are added.
- `references/briefs.md`: templates for RULES.md, collector briefs, curator brief, recorder brief, revision round.
- `references/sources.md`: coverage strategy per catalog shape and field notes per reference site.
- `references/capture.md`: frame conventions, the capture script, verifying builds, measuring performance.
- `references/building.md`: applied prototypes, the quality bar, review before the approver, revision rounds.
- `scripts/capture.mjs`: dependency-free capture of still, time, scroll, pointer and full-page frames
  (`node scripts/capture.mjs --help`).
- `assets/board-template.html`: starting point for the approver's board.

## Language

This skill and its library are written in English, but the work happens in the language of the person you are
working with: talk to them, write the briefs, the research files (`RULES.md`, `already-used.md`, `sections.md`,
`curation.md`, the board) and the prototypes' copy in the language they use or ask for. The one exception is the
library: findings added to it stay in English, so it remains searchable in a single language for everyone.
