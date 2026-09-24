# Sources

## Coverage strategy by catalog shape

For browsing a source the library does not cover yet (SKILL.md, step 4). Pick the strategy from the full listing,
not from the site's reputation.

| Shape | Example | Strategy |
|---|---|---|
| Small closed catalog of interactive demos | a component library of a couple hundred items | Can be covered in full. Open every demo and capture motion. |
| Single long showcase page | a scroll-animation showcase | List each block; capture each moving block at 6 scroll positions; list static blocks without capturing sequences. |
| Large closed catalog | hundreds to thousands of templates or components | List everything, then open a capped sample chosen by category relevance. Capture the thumbnail grid per category for the rest. |
| Paid items without a demo | "Pro" components behind a paywall | Capture the grid, describe from thumbnails, mark as not opened. Open the free ones. |
| Search-based gallery | shot or post sites | No total to cover: run a fixed set of queries and set a goal of shots opened to the end. |
| Infinite scroll without an index | design-system breakdown sites | List up to a cap, report the number, then a quick yes/no pass with a **narrow** question, then full findings only for the yes items. |
| Photo mockups | device and scene mockup libraries | Only the categories that fit the page (devices, desks, walls, paper); one still each; grids for the rest. |

Whatever the shape: a short first sweep with a cap, then gap search. Full sweeps look thorough and mostly produce
material nobody picks.

## Field notes: sources already in the library

These seven are in `library/` with the coverage listed in `library/README.md`. The notes below are for going back
to them (a stale catalog, a part the snapshot left unopened). Sizes are approximate and change over time; recount
when you list.

**Dribbble** (`https://dribbble.com/search/<query>`)
- Search-based. Useful queries for a marketing page: landing page, services page, agency website, software
  development website, saas features section, process section, about us page, manifesto, dark website, 3d website,
  web animation. Adapt to the page.
- A shot is a page: several images and often a video at the bottom. Open to the end. For video, capture 6 moments.
- Blocks automated browsers and hides content without a login. Use the person's own browser through a browser
  extension, in its own tab, with permission.
- Strength: art direction and scenes. Weakness: many shots are concepts that never had to work on a real page.

**Refero Styles** (`https://styles.refero.design/`, sort by popular)
- Real sites broken down into palette, typography, spacing, radius, shadows. Infinite scroll, no index; the site
  claims thousands of entries.
- List up to a cap (a few hundred), then a quick pass. "Does it have a graphic element?" was too broad a question
  (almost everything passed); ask something narrower tied to the gap.
- Best used for **style rules** (how light, corners, shadows and color are handled) rather than for pieces.

**React Bits** (`https://reactbits.dev/`, Pro catalog under `/pro/components`)
- Around 150 Pro components in categories like Text, 3D & Shaders, UI & Cards, Cursor Effects, Backgrounds. Small
  enough to cover in full.
- Every demo is live: capture time frames for self-running ones and pointer frames for cursor effects.

**GSAP scroll showcase** (`https://gsap.com/scroll/`)
- One very long page of scroll demos (around a dozen blocks), plus a few static blocks at the end.
- Capture each moving block at 6 scroll positions. The bundled script's scroll mode uses real wheel events, which
  scroll-driven animations need.

**Jitter templates** (`https://jitter.video/templates/all/`)
- Hundreds of animation templates, all video or canvas, no categories.
- Good for motion ideas and image treatments (duotone, blur, reveals). Capture time frames. Cap the sample.

**OriginKit** (`https://www.originkit.dev/`)
- Hundreds of components across categories (text, interactive elements, image gallery, animations, cursor, buttons,
  loaders, many backgrounds). Some items appear in more than one category, so the site's per-category total is
  higher than the number of unique items; dedupe when listing.
- Split between free "Preview" items (open them) and "Pro" items behind a paywall (grid only). Watch for the same
  component photographed twice from two category grids.
- Put the large Backgrounds category last.

**mockups.digital** (`https://mockups.digital/`)
- Over a thousand photo mockups in categories like Device, Frame, Outdoor, Packaging, Stationery, Apparel, Vehicle.
- Open only what can hold the page's content (devices, scenes, paper). Grids for the rest.

## Other galleries worth knowing

Not exercised in the original run; apply the same shapes above.

- Awwwards, Godly, Land-book, Lapa Ninja, SiteInspire: curated live sites. Open the real site and capture motion
  there, not the gallery's thumbnail.
- Codrops: experiments and tutorials with live demos and source; strong for techniques (WebGL, scroll, text).
- CodePen: search by technique; demos are live and small.
- Mobbin and similar app-screen libraries: product UI flows; usually need a login (use the person's browser).
