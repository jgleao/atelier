# Findings: Refero Styles

Source: https://styles.refero.design/  
IDs: R-043 to R-056 (14)  
Prints: `prints/ref-*.webp`

Design-system breakdowns of real sites. 340 entries listed (the site claims 2,000+, infinite scroll, no index); 14 read in full here. Linear, Resend, Vercel, Raycast, Steep, shadcn/ui, Attio and Stripe were read in an earlier session and have no finding here. A quick yes/no pass over 149 more entries is in `lists/refero-quick-pass.md`.

Snapshot collected on 2026-09-22. Catalogs change; recount before trusting totals. Findings are factual descriptions: `what it has` and `motion`.

---

## R-043 · Refero · Mercury (digital bank)
- link: https://styles.refero.design/style/3172cd4d-118a-4a16-a259-6b634d32322e
- prints: ref-mercury-01.webp
- what it has: design-system data sheet (palette, typography, spacing, rules), not a loose shot.
  Dark theme: near-black background (#171721), cards one shade lighter (#1e1e2a) with no shadow at all (the
  separation comes only from the value difference between the two dark grays, never from a drop shadow). One
  accent color only (cobalt blue #5266eb), used exclusively on the main "Open account" button, never
  decorative. Mid-weight typography (480), neither bold nor regular, large title with very tight leading
  (1.1). All controls (button, input, nav) in pill shape (32-40px radius); only structural elements use a
  4px square corner. Hero in a full-bleed real photo (an isolated desk atop a foggy mountain) with a dark
  overlay behind the text.
- rules: never more than 1 accent color per page; never a shadow on a card; never weight 700+ on a title;
  never a square corner (0-4px) on a button/input; generous vertical space between sections (72px).

## R-044 · Refero · ElevenLabs (AI-synthesized voice)
- link: https://styles.refero.design/style/031056ff-7af1-46db-8daa-115f731c5d26
- prints: ref-elevenlabs-01.webp
- what it has: light theme in "cream paper": near-white but warm background (#fdfcfc), never pure white,
  cards in a taupe-beige (#f5f3f1) one shade below, pure black text. Headline title in a weight-300 font
  (very thin, "whispered") with tight letter spacing (negative tracking), contrasting with body
  text in weight 400/500 with slightly positive tracking, the opposite of the title. Only 2 accent colors
  (blue #0447ff and orange #ff4704), but used ONLY inside product illustrations (gradient spheres like
  "audio bubbles"), never in a button, link or any interface part. Buttons 100% in pill shape (radius
  9999px), thin 1px borders instead of shadow to separate the card from the background.
- rules: never thicken the title font (weight 300 is the brand's signature); the 2 accent colors can
  never become button/link color; always warm beige, never pure white/gray.

## R-045 · Refero · Notion (productivity/AI)
- link: https://styles.refero.design/style/2bf4c61f-de10-4614-ba1b-20c0453bd2a9
- prints: ref-notion-01.webp
- what it has: light theme in warm paper (#f6f5f4), white cards with a thin 1px border, no shadow at
  all. Only 1 blue accent for the main button; all other color (orange, coral, sky, navy)
  is reserved for painting feature card BACKGROUNDS (each feature card is a different solid color,
  like a post-it). In the hero title, one word in the middle of the sentence gets a colored pill
  behind it (here "Create"), a technique for highlighting 1 specific word within the whole sentence, without
  changing the font. Giant title with very negative tracking (letters almost touching) at large
  sizes. A row of illustrated circular avatars (small round faces with a colored border) scattered as visual
  punctuation, together with loose doodles and little stars around the text, with no function
  beyond bringing it to life.
- rules: never pure white background (always the beige); never a card shadow, only a thin border; never
  more than 1 solid blue button per screen; never a gradient, only flat solid color.

## R-046 · Refero · Anthropic (AI research)
- link: https://styles.refero.design/style/d469cba4-c448-4a43-a033-883f8bfcdc42
- prints: ref-anthropic-01.webp
- what it has: light theme, "scientific journal on parchment paper": ivory-beige background (#f0eee6), never
  pure white, near-black text but warm (#141413). Entire body text in a SERIF font at 20px
  (rare for a tech site, most use sans-serif even in the body), large sans-serif bold title next to
  another, thinner serif title, the two coexisting side by side on the same page (one "shouts",
  the other "narrates"). Only 1 accent color (terracotta #d97757), reserved only for the most
  important call-to-action button on the screen. The filled button has rounded corners only at the bottom
  (square on top), a visual signature instead of the standard pill button. Featured card uses an
  antique naturalist-plate illustration (butterflies and moths in a 19th-century field-guide style),
  colored in an earthy tone matching the background. Links within the text are always underlined (not
  only on hover), as a print-material convention.
- rules: never a cool color (blue, cool gray) anywhere; never a shadow, only a subtle tone
  variation between beige layers; never pure white as a surface; the terracotta color never decorates,
  it only appears on the main call-to-action button.

## R-047 · Refero · Cal.com (scheduling)
- link: https://styles.refero.design/style/5d7aa503-8cfa-49a4-bd3b-0c2f0f075c70
- prints: ref-calcom-01.webp
- what it has: nearly absolute monochromatic light theme: black/graphite/gray on a paper-gray
  background (#f4f4f4), white cards with a very subtle, diffuse shadow (never a border). Only 1
  accent blue, used only on a secondary link/informational banner, never on the main button (the main
  button is solid black). Custom font (Cal Sans) only on titles, geometric but "friendly"; body
  text in a much lighter variant of the same family with tight negative tracking. Page buttons in
  pill shape (9999px); only the fixed header button uses an 8px square corner (a rule specific to
  context, not to hierarchy). Imagery is only real product screenshots (a working calendar) and
  integration logos (Google, etc.), never photo or illustration.
- rules: never introduce a new color beyond the single blue; never a square corner on a button/card outside the
  header; never a font weight above 600; never a border on a card (only shadow).

## R-048 · Refero · Supabase (database/dev tools)
- link: https://styles.refero.design/style/632249f1-fd78-4c77-9b34-7bae37ff3e9b
- prints: ref-supabase-01.webp
- what it has: "code editor at midnight": near-black background, 99% of the screen in grayscale, and 1 vibrant
  phosphor green (#3ecf8e) only on CTAs, title highlights and the logo. Hero title in 2 lines, second
  line ("Scale to millions") entirely in green over the first in white: here the "highlighted
  word" becomes the whole PHRASE of one line, not just 1 word. Geometric font (Circular) in regular
  weight, no bold shouting. Buttons in pill shape. Cards float 1 level above the background through border
  contrast, not shadow. Client logos in monochrome gray below the hero, a "features" strip
  (Postgres Database, Authentication) with a small icon + short title.

## R-049 · Refero · Framer (site builder)
- link: https://styles.refero.design/style/d417b42f-824d-45ba-a02e-cbef3b8ea0d8
- prints: ref-framer-01.webp
- what it has: "neon gallery in the void": nearly 100% black screen (#000000), content floats like a "neon
  sign in a gallery" with very few gray steps to give depth (no gradient at all). A single electric
  blue (#0099ff) on border, glow, badge and active state, never decorative. Title with very negative tracking
  and tight leading (0.8-1.1), "compressed" typography that pushes forward instead of sitting quietly on
  the page. "Shipped with Framer" section shows 3 real sites side by side as thumbnails
  (a workspace desk photo, a video still with a person's face and caption, a cloud landscape), as
  visual social proof instead of a company logo.

## R-050 · Refero · Headspace (mental health)
- link: https://styles.refero.design/style/035a098b-5a27-48a3-8a3a-c68a698e3eab
- prints: ref-headspace-01.webp
- what it has: "sunny wellness retreat on warm paper": cream background (#f9f4f2), text never pure
  black (warm charcoal gray). Thin orange stripe at the top of the page with a small notice. Very
  rounded shapes throughout (16-32px corners on cards, 9999px pill on button/circular elements).
  Blob-style illustrated character (orange circle with a little face) next to the brand name. Phone
  mockup with a REAL PHOTO of a person (a man with glasses) inside the app screen, not an illustration. Several
  accent colors, each with a specific emotional meaning (yellow = energy, blue = main
  action, violet = contemplation), unlike most of the collection, which uses only 1 color.

## R-051 · Refero · Runway (financial planning)
- link: https://styles.refero.design/style/874aaea0-c718-454e-8a58-f3beed1284ec
- prints: ref-runway-01.webp
- what it has: "kraft-paper ledger under amber desk light": cream background (#f8f7f5), white cards,
  linen-beige dividers, dark coffee-brown text (never black), everything "printed" rather than
  "rendered". Only 1 amber accent color, functioning as a highlighter only on the main call-to-action button.
  Humanist font with unconventional weights (492, 584 instead of 400/600). Real product screenshot right
  below the hero: financial dashboard with an area chart in soft pastel colors (lilac, aqua green),
  a metrics table (ARR, Cash, Average ACV) next to the chart.

## R-052 · Refero · Wise (foreign exchange/international payment)
- link: https://styles.refero.design/style/367c0c6e-73a7-441c-a8ff-91d139ac60dc
- prints: ref-wise-01.webp
- what it has: light theme, but "shouted": very dark forest green (#163300) is the DOMINANT color (not just
  an accent) in text, nav and dark sections; an electric lime green (#9fe870) works as functional
  punctuation on buttons and the active tab. Giant hero title (100px+), uppercase, weight 900, letters very
  tight together ("MONEY FOR HERE, THERE AND EVERYWHERE"), a more "shouted" tone than most of the
  findings encountered so far. 3D illustration of a blue-turquoise globe with golden coins floating
  around it, instead of a photo or product screenshot. Buttons in pill shape, cards with a small radius (10px).

## R-053 · Refero · Todoist (to-do list)
- link: https://styles.refero.design/style/729ba7a8-35d5-44f3-abc0-1078ff6a3467
- prints: ref-todoist-01.webp
- what it has: "sunny desk with a paper planner": near-white but warm background, near-black
  text, 1 red-orange accent used only on button/label, never decorative. Behind the product
  mockups (phone + desktop screenshot floating), very soft decorative waves in a cream tone
  (organic low-contrast shapes, almost imperceptible, just background texture). Testimonial strip
  in a short italic quote ("Simple, straightforward, and super powerful") next to small press
  logos (The Verge, PC Mag, TechRadar) instead of client logos. Loose stars/sparkles near
  the main button.

## R-054 · Refero · GitHub (code/collaboration)
- link: https://styles.refero.design/style/c3ceca5c-d329-4559-b947-016172941ba2
- prints: ref-github-01.webp
- what it has: "cosmic command deck": near-black background (#0d1117) with a violet radial atmosphere
  behind the hero, 1 accent green only on the main button, functioning as a "terminal cursor" brought
  into the interface. Simple white/gray title, no special treatment. Floating in the middle of the hero, 3 to 4
  glossy colorful 3D spheres (purple, pink, orange) like planets/soap bubbles, with no connection to
  text or icon, just ambient decoration. Below, a real code editor screenshot with colored syntax
  highlighting (a "GitHub Copilot" chat next to a code file). Elevation done only through border (not
  shadow); buttons in 2 different shapes by purpose (pill for navigation/tag, shallow-corner rectangle
  for action button).

## R-055 · Refero · Intercom (customer support/helpdesk)
- link: https://styles.refero.design/style/12255b63-e506-4bc1-a4cd-d05487de32f3
- prints: ref-intercom-01.webp
- what it has: "editorial magazine on cream paper": very light beige background, typography entirely in weight 300
  (very thin) for both body AND title, giving a "whispered" feel. Every element's corners (button,
  card, field) are square, only a 4px radius: it is an exception that deliberately rejects the
  very-rounded-corners trend that dominates most of the collection. Strip of 6 very different editorial
  photos side by side (sky, backlit silhouette, sunset gradient, close-up eye, hand-drawn scribbled
  flower illustration, abstract still life), like a magazine mood board, not product photos.
  Below, simple text tabs (no icon) alternating what appears in the product screenshot below.
- rules: never more than 4px radius on any element; never a decorative shadow; the violet color only
  in a punctual icon/tag, never in a large area.

## R-056 · Refero · Webflow (site builder)
- link: https://styles.refero.design/style/31471407-598a-45fd-a505-d921980d8855
- prints: ref-webflow-01.webp
- what it has: "white studio, black ink, 1 brand blue": nearly pure white background with a slight
  light-blue gradient behind only the hero (gives depth without becoming an overall background color), near-black
  text, 1 saturated accent blue. Monumental title (56-80px), variable geometric font with very
  negative tracking. Product screenshot always embedded inside a realistic browser frame (address
  bar, window buttons), never loose. 3 feature blocks side by side, each with a short name + mini
  preview (AI site builder / Template / From scratch). Row of well-known client logos (monday.com,
  Spotify, TED, Dropbox) at the bottom of the hero.
