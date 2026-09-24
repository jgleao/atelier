# Findings: React Bits Pro

Source: https://reactbits.dev/pro/components  
IDs: F-001 to F-150 (150)  
Prints: `prints/rb-*.webp`

Whole catalog (150 Pro components) opened and captured. Self-running demos: 6 time frames (`-t01..t06`); scroll-driven: 6 scroll positions (`-s01..s06`); pointer effects: `-m01..m03`.

Snapshot collected on 2026-09-22. Catalogs change; recount before trusting totals. Findings are factual descriptions: `what it has` and `motion`.

---

## F-001 · React Bits Pro · 3D Letter Swap
- link: https://pro.reactbits.dev/docs/components/3d-letter-swap
- prints: rb-3d-letter-swap-m01.webp, -m02.webp, -m03.webp
- what it has: Text category. Word "Hover Me!" centered, flat white bold letters on a plain black background, no texture, no visible depth at rest.
- motion: on hover, each letter rotates around its own vertical axis and reveals a second face (3D cube effect), one letter at a time, returns to normal when the mouse leaves. Trigger: pointer.

## F-002 · React Bits Pro · 3D Text Reveal
- link: https://pro.reactbits.dev/docs/components/3d-text-reveal
- prints: rb-3d-text-reveal-t01.webp ... -t06.webp
- what it has: small centered text on a black background, thin light typography. The site itself describes it as "scroll-triggered," but inside the isolated preview box (no page to scroll) it repeats on its own in a short cycle.
- motion: the text enters slowly with slight depth and 3D perspective, on its own, cycle of a few seconds. Texture hard to read at the preview's small size.

## F-003 · React Bits Pro · Agentic Ball
- link: https://pro.reactbits.dev/docs/components/agentic-ball
- prints: rb-agentic-ball-t01.webp ... -t06.webp
- what it has: light gray and silver 3D sphere, strong specular reflection (like brushed metal or frosted glass), plain black background, light coming from the upper left, soft shadow below.
- motion: the sphere spins on its own and the internal reflection pattern (like a swirl) shifts inside it, continuous, no pause.

## F-004 · React Bits Pro · AI Blob
- link: https://pro.reactbits.dev/docs/components/ai-blob
- prints: rb-ai-blob-t01.webp ... -t06.webp
- what it has: sphere or blob with a color-gradient edge (magenta/purple to cyan), near-white core, black background, neon-like glow around the outline.
- motion: on its own, the blob pulses and the color gradient rotates around the edge, continuous.

## F-005 · React Bits Pro · Animated List
- link: https://pro.reactbits.dev/docs/components/animated-list
- prints: rb-animated-list-t01.webp ... -t06.webp
- what it has: list of items in card/row format (name, secondary field, value on the right), dark background, small typography, thin lines separating the items.
- motion: the list items enter and reorder on their own, one at a time, like a live queue.

## F-006 · React Bits Pro · Ascii Cursor
- link: https://pro.reactbits.dev/docs/components/ascii-cursor
- prints: rb-ascii-cursor-m01.webp, -m02.webp, -m03.webp
- what it has: black background, small centered label "MOVE CURSOR," bright green ASCII characters (terminal style) scattered like particles.
- motion: as the mouse moves, the green characters cluster and follow the cursor's position, like a trail. Trigger: pointer.

## F-007 · React Bits Pro · ASCII Ripple
- link: https://pro.reactbits.dev/docs/components/ascii-ripple
- prints: rb-ascii-ripple-m01.webp, -m02.webp, -m03.webp
- what it has: whole page of small monospace text, gray on black, like a code block.
- motion: the pointer over the text generates waves: the characters near the cursor change position and get heavier (larger glyph), as if it were liquid. Trigger: pointer (move or drag).

## F-008 · React Bits Pro · ASCII Tiles
- link: https://pro.reactbits.dev/docs/components/ascii-tiles
- prints: rb-ascii-tiles-t01.webp ... -t06.webp
- what it has: grid of blocks filled with tiny ASCII characters, glassy look, edges of some blocks with a colored fringe (red/blue/green separation, like chromatic aberration).
- motion: on its own, the blocks appear to rotate and flicker in sequence, texture shimmering, continuous.

## F-009 · React Bits Pro · Ascii Waves
- link: https://pro.reactbits.dev/docs/components/ascii-waves
- prints: rb-ascii-waves-t01.webp ... -t06.webp
- what it has: field of halftone dots forming curved waves, black and white, no color.
- motion: on its own, the dot waves shift diagonally, like a continuous water ripple.

## F-010 · React Bits Pro · Aura Blob
- link: https://pro.reactbits.dev/docs/components/aura-blob
- prints: rb-aura-blob-t01.webp ... -t06.webp
- what it has: smooth sphere with a purple-magenta glow and aura around it, black background, smooth sphere surface, diffuse light.
- motion: on its own, the aura pulses and breathes (expands and contracts), continuous, no positional shift.

## F-011 · React Bits Pro · Aurora Beam
- link: https://pro.reactbits.dev/docs/components/aurora-beam
- prints: rb-aurora-beam-t01.webp ... -t06.webp
- what it has: horizontal beam of cyan/aqua light, like a ribbon of aurora borealis, over a black background, overlapping layers of light.
- motion: on its own, the layers of light undulate and shift sideways, continuous.

## F-012 · React Bits Pro · Aurora Blur
- link: https://pro.reactbits.dev/docs/components/aurora-blur
- prints: rb-aurora-blur-t01.webp ... -t06.webp
- what it has: blurred color field combining green, purple and blue, no defined edges, mist-like texture.
- motion: on its own, the color patches shift and change tone slowly, continuous.

## F-013 · React Bits Pro · Bend Gallery
- link: https://pro.reactbits.dev/docs/components/bend-gallery
- prints: rb-bend-gallery-m01.webp, -m02.webp, -m03.webp
- what it has: two black-and-white photos (landscape) stacked vertically, each tilted in 3D perspective toward a different side, black background.
- motion: on drag, the column of images bends and dips at the edges as if each frame were curving over a surface. Trigger: drag (the site describes it as scroll-triggered; in the isolated preview the tilt responds to mouse drag).

## F-014 · React Bits Pro · Bending Marquee
- link: https://pro.reactbits.dev/docs/components/bending-marquee
- prints: rb-bending-marquee-t01.webp ... -t06.webp
- what it has: horizontal white strip with running black text ("built for the web · designed in the open · shipped every week"), slightly curved, over a black background.
- motion: on its own, the text scrolls horizontally within the curved strip, continuous, no pause.

## F-015 · React Bits Pro · Black Hole
- link: https://pro.reactbits.dev/docs/components/black-hole
- prints: rb-black-hole-t01.webp ... -t06.webp
- what it has: light horizontal strip with a dark circular void in the middle (eclipse-like silhouette), high black-and-white contrast. The site also describes a color cycle, not seen in the captured frames.
- motion: on its own, the dark circle moves horizontally within the strip, continuous.

## F-016 · React Bits Pro · Blinking Dots
- link: https://pro.reactbits.dev/docs/components/blinking-dots
- prints: rb-blinking-dots-t01.webp ... -t06.webp
- what it has: dark field with tiny dots scattered in a grid, very subtle.
- motion: on its own, the dots blink (appear and vanish) at random grid positions, continuous.

## F-017 · React Bits Pro · Blinking Squares
- link: https://pro.reactbits.dev/docs/components/blinking-squares
- prints: rb-blinking-squares-t01.webp ... -t06.webp
- what it has: grid of small purple/magenta squares scattered over a black background, varying size and brightness.
- motion: on its own, the squares blink in different positions each frame, continuous.

## F-018 · React Bits Pro · Blur Highlight
- link: https://pro.reactbits.dev/docs/components/blur-highlight
- prints: rb-blur-highlight-t01.webp ... -t06.webp
- what it has: small paragraph of text on a dark background, some words highlighted with a purple/magenta background.
- motion: on its own, the paragraph enters with a blur-in effect and the highlighted words light up in sequence, short cycle.

## F-019 · React Bits Pro · Blurred Rays
- link: https://pro.reactbits.dev/docs/components/blurred-rays
- prints: rb-blurred-rays-t01.webp ... -t06.webp
- what it has: vertical light beams with bloom (blown-out glow), black background, color shifts from purple to green between frames.
- motion: on its own, the beams flicker in intensity, continuous.

## F-020 · React Bits Pro · Card Spread
- link: https://pro.reactbits.dev/docs/components/card-spread
- prints: rb-card-spread-m01.webp, -m02.webp, -m03.webp
- what it has: stack of photo cards (architecture/landscape), stacked like a closed deck, black background.
- motion: on hover, the cards fan out, each rotating a bit more than the previous one. Trigger: pointer.

## F-021 · React Bits Pro · Center Flow
- link: https://pro.reactbits.dev/docs/components/center-flow
- prints: rb-center-flow-t01.webp ... -t06.webp
- what it has: small diamond-shaped seal/icon centered, pulsing purple halo around it, light dots scattered like stars on the black background.
- motion: on its own, the halo pulses and flows from the center outward, continuous.

## F-022 · React Bits Pro · Chroma Blinds
- link: https://pro.reactbits.dev/docs/components/chroma-blinds
- prints: rb-chroma-blinds-t01.webp ... -t06.webp
- what it has: diagonal stripes in a neon gradient (blue to magenta), like blinds or a curtain of light, black background.
- motion: the stripes move on their own even without interaction; the site describes them as also curving toward the cursor.

## F-023 · React Bits Pro · Chroma Card
- link: https://pro.reactbits.dev/docs/components/chroma-card
- prints: rb-chroma-card-m01.webp, -m02.webp, -m03.webp
- what it has: portrait card with a photo of a person playing an instrument, warm point lighting, black background.
- motion: on hover, the image gains a color fringe (chromatic separation, like a red/cyan leak) that shifts. Trigger: pointer.

## F-024 · React Bits Pro · Chroma Waves
- link: https://pro.reactbits.dev/docs/components/chroma-waves
- prints: rb-chroma-waves-t01.webp ... -t06.webp
- what it has: black-and-white fluid texture, like ink or marble in motion, no color, organic edges.
- motion: on its own, the noise pattern flows and twists, continuous.

## F-025 · React Bits Pro · Circle Gallery
- link: https://pro.reactbits.dev/docs/components/circle-gallery
- prints: rb-circle-gallery-t01.webp ... -t06.webp
- what it has: a framed photo (tree/landscape) that fragments into several smaller thumbnails from the same photo gallery, forming a cluster. Black background.
- motion: on its own in the preview (the site describes it as a draggable carousel with inertia and 3D), the single image spreads into a cluster of thumbnails and regroups.

## F-026 · React Bits Pro · Circle Stack
- link: https://pro.reactbits.dev/docs/components/circle-stack
- prints: rb-circle-stack-m01.webp, -m02.webp, -m03.webp
- what it has: circular discs stacked and tilted in 3D perspective, gray-to-blue gradient, black background.
- motion: on drag, the stack rotates revealing the next disc, smooth and glossy texture like a CD or coin. Trigger: drag.

## F-027 · React Bits Pro · Circles
- link: https://pro.reactbits.dev/docs/components/circles
- prints: rb-circles-t01.webp ... -t06.webp
- what it has: dozens of circular thumbnails (face/avatar photos) scattered across the black frame, varying sizes, like a constellation.
- motion: on its own, the circles orbit and swap positions slowly, continuous.

## F-028 · React Bits Pro · Click Stack
- link: https://pro.reactbits.dev/docs/components/click-stack
- prints: rb-click-stack-c01.webp, -c02.webp
- what it has: small dark card with a large centered number ("01", "02"), corners slightly folded like a page, black background.
- motion: on click, the front card slides away revealing the next number in the stack. Trigger: click.

## F-029 · React Bits Pro · Color Loops
- link: https://pro.reactbits.dev/docs/components/color-loops
- prints: rb-color-loops-t01.webp ... -t06.webp
- what it has: concentric arcs in a magenta-to-purple-and-blue gradient, like a tunnel or radial waves, black background.
- motion: on its own, the arcs expand outward from the center, continuous, sense of depth.

## F-030 · React Bits Pro · Comparison Slider
- link: https://pro.reactbits.dev/docs/components/comparison-slider
- prints: rb-comparison-slider-t01.webp ... -t06.webp
- what it has: portrait photo split down the middle by a vertical line, one side in blown-out black and white (negative), the other side normal color.
- motion: on its own in the preview, the dividing line sweeps the image from left to right (the site also allows dragging or manual hover).

## F-031 · React Bits Pro · Credit Card
- link: https://pro.reactbits.dev/docs/components/credit-card
- prints: rb-credit-card-m01.webp, -m02.webp, -m03.webp
- what it has: stylized white credit card, masked number, chip, black background.
- motion: as the mouse moves, the card tilts in 3D following the cursor (parallax tilt). Trigger: pointer.

## F-032 · React Bits Pro · Cursor Wave
- link: https://pro.reactbits.dev/docs/components/cursor-wave
- prints: rb-cursor-wave-m01.webp, -m02.webp, -m03.webp
- what it has: fine grid of small dots over a black background, almost invisible at rest.
- motion: as the mouse moves, nearby dots light up in orange and blue, forming a ripple that follows the cursor. Trigger: pointer (and click, per the site).

## F-033 · React Bits Pro · Custom Cursor
- link: https://pro.reactbits.dev/docs/components/custom-cursor
- prints: rb-custom-cursor-m01.webp, -m02.webp, -m03.webp
- what it has: three small text labels in a row (menu-like), black background, the cursor becomes a thin-outline box.
- motion: on hovering over each label, the cursor box morphs to the item's size and snaps onto it. Trigger: pointer.

## F-034 · React Bits Pro · Depth Card
- link: https://pro.reactbits.dev/docs/components/depth-card
- prints: rb-depth-card-m01.webp, -m02.webp, -m03.webp
- what it has: three photo cards (mountain, ocean, forest) side by side, each with a caption, layers with visible depth (foreground and background separated).
- motion: as the mouse moves, each card's layers shift at different speeds (parallax), giving a sense of depth. Trigger: pointer.

## F-035 · React Bits Pro · Depth Image
- link: https://pro.reactbits.dev/docs/components/depth-image
- prints: rb-depth-image-t01.webp ... -t06.webp
- what it has: black-and-white photo of a classical sculpture (similar to Michelangelo's David), stone texture, dramatic composition.
- motion: on its own, a raking light travels across the image's surface creating shadows that give 3D relief to an originally flat photo. Continuous.

## F-036 · React Bits Pro · Device
- link: https://pro.reactbits.dev/docs/components/device
- prints: rb-device-m01.webp, -m02.webp, -m03.webp
- what it has: phone mockup drawn in CSS (silver frame), screen with an arrow/gradient icon, black background.
- motion: on hover, the device tilts slightly in 3D. Trigger: pointer.

## F-037 · React Bits Pro · Dither Cursor
- link: https://pro.reactbits.dev/docs/components/dither-cursor
- prints: rb-dither-cursor-m01.webp, -m02.webp, -m03.webp
- what it has: black background, centered "MOVE CURSOR" label, pink/magenta smudge with a dotted texture (dithering) that follows the cursor.
- motion: as the mouse moves, the dotted smudge follows the cursor leaving a pixelated trail. Trigger: pointer.

## F-038 · React Bits Pro · Dither Wave
- link: https://pro.reactbits.dev/docs/components/dither-wave
- prints: rb-dither-wave-t01.webp ... -t06.webp
- what it has: blue/purple liquid wave pattern with a dotted texture (halftone/dithering), like digital marble, dark background.
- motion: on its own, the waves flow and twist continuously.

## F-039 · React Bits Pro · Dolly Gallery
- link: https://pro.reactbits.dev/docs/components/dolly-gallery
- prints: rb-dolly-gallery-m01.webp, -m02.webp, -m03.webp
- what it has: black-and-white landscape photos stacked in depth (one large in the foreground, another small in the background), black background.
- motion: the camera moves forward through the stack of images, each emerging from the background and passing through the lens. The site describes it as scroll-triggered; in the isolated preview it responded to the mouse.

## F-040 · React Bits Pro · Dot Shift
- link: https://pro.reactbits.dev/docs/components/dot-shift
- prints: rb-dot-shift-t01.webp ... -t06.webp
- what it has: small magenta dots forming the outline of a circle over a black background.
- motion: on its own, the dots shift and the circle breathes (changes radius), continuous.

## F-041 · React Bits Pro · Draggable Grid
- link: https://pro.reactbits.dev/docs/components/draggable-grid
- prints: rb-draggable-grid-t01.webp ... -t06.webp
- what it has: repeating grid of colorful illustrated icons (pets, flat style), black background, several rows.
- motion: on its own in the preview, the grid slides sideways (the site describes it as manually draggable, with inertia).

## F-042 · React Bits Pro · Eclipse
- link: https://pro.reactbits.dev/docs/components/eclipse
- prints: rb-eclipse-t01.webp ... -t06.webp
- what it has: spectral-color ring (red, purple, blue, green, yellow in sequence around the circle) with a black disc at the center, like a solar eclipse corona.
- motion: on its own, the ring's colors rotate and shift position, continuous.

## F-043 · React Bits Pro · Falling Rays
- link: https://pro.reactbits.dev/docs/components/falling-rays
- prints: rb-falling-rays-t01.webp ... -t06.webp
- what it has: thin purple/magenta light rays converging from a point at the top, like a rain of light or fireworks, black background.
- motion: on its own, the rays fall and fan out, continuous.

## F-044 · React Bits Pro · Flame Paths
- link: https://pro.reactbits.dev/docs/components/flame-paths
- prints: rb-flame-paths-t01.webp ... -t06.webp
- what it has: irregular flame-like or mountain-silhouette peaks, pink-to-red-and-magenta gradient, black background.
- motion: on its own, the peaks flicker in height like flames, continuous.

## F-045 · React Bits Pro · Fog Sphere
- link: https://pro.reactbits.dev/docs/components/fog-sphere
- prints: rb-fog-sphere-t01.webp ... -t06.webp
- what it has: layers of bright pink/magenta lines stacked forming a sphere or barrel of light, black background, luminous fog effect.
- motion: on its own, the layers rotate in opposite directions, continuous.

## F-046 · React Bits Pro · Frame Border
- link: https://pro.reactbits.dev/docs/components/frame-border
- prints: rb-frame-border-t01.webp ... -t06.webp
- what it has: rectangular frame hollow in the center, border with a soft pink glow and grainy (noise) texture, dark background.
- motion: on its own, the noise and the border's glow flicker, continuous.

## F-047 · React Bits Pro · Frame Scrub
- link: https://pro.reactbits.dev/docs/components/frame-scrub
- prints: rb-frame-scrub-01.webp (only 1 frame: the trigger is page scroll, which doesn't exist within the isolated preview)
- what it has: white, smooth 3D shape, a twisted knot or loop (Möbius-strip-like), matte finish, dark background.
- motion: not captured. The site describes page scroll driving a sequence of canvas frames (the object rotates as you scroll); in the isolated preview, with no page to scroll, it stayed still.

## F-048 · React Bits Pro · Glass Cursor
- link: https://pro.reactbits.dev/docs/components/glass-cursor
- prints: rb-glass-cursor-m01.webp, -m02.webp, -m03.webp
- what it has: photo of a cherry blossom branch against a blue sky, light and soft colors.
- motion: as the mouse moves, a white, translucent streak (like glass with refraction and blur) follows the cursor over the photo. Trigger: pointer.

## F-049 · React Bits Pro · Glass Flow
- link: https://pro.reactbits.dev/docs/components/glass-flow
- prints: rb-glass-flow-t01.webp ... -t06.webp
- what it has: grayscale liquid texture, rounded shapes resembling glass or molten mercury, no color.
- motion: on its own, the shapes flow and merge into one another, continuous.

## F-050 · React Bits Pro · Glass Reveal
- link: https://pro.reactbits.dev/docs/components/glass-reveal
- prints: rb-glass-reveal-t01.webp ... -t06.webp
- what it has: black-and-white textured background (stone or crumpled paper) with a circular lens in the middle revealing a colored photo of sunflowers underneath.
- motion: on its own in the preview (the site describes it as a lens that follows the pointer), the lens changes shape (square, circle, blob, wavy portal) revealing the colored image underneath.
## F-051 · React Bits Pro · Glass Tiles
- link: https://pro.reactbits.dev/docs/components/glass-tiles
- prints: rb-glass-tiles-t01.webp ... -t06.webp
- what it has: grid of purple/violet tiles with a glassy, relief finish (they look puffed up, with specular shine), dark background.
- motion: on its own, the shine on each tile pulses and moves across the grid, continuous.

## F-052 · React Bits Pro · Glitch Text
- link: https://pro.reactbits.dev/docs/components/glitch-text
- prints: rb-glitch-text-m01.webp, -m02.webp, -m03.webp
- what it has: phrase "Glitchy on hover." in white, black background, simple sans-serif typography.
- motion: on hover, the letters near the cursor shatter and gain separated colors (cyan/magenta leak, like a TV signal glitch), the rest of the text stays steady. Trigger: pointer.

## F-053 · React Bits Pro · Glitter Warp
- link: https://pro.reactbits.dev/docs/components/glitter-warp
- prints: rb-glitter-warp-t01.webp ... -t06.webp
- what it has: nearly all-black background with tiny, sparse particles, very subtle glow.
- motion: on its own, the particles move like a starfield tunnel (warp), subtle at the preview's size.

## F-054 · React Bits Pro · Globe
- link: https://pro.reactbits.dev/docs/components/globe
- prints: rb-globe-t01.webp ... -t06.webp
- what it has: 3D wireframe globe (thin white lines over a dark sphere), low contrast, black background.
- motion: on its own, the globe spins slowly, continuous. The site also describes animated arcs and location markers, not clearly visible at the preview's size.

## F-055 · React Bits Pro · Glowing Ridges
- link: https://pro.reactbits.dev/docs/components/glowing-ridges
- prints: rb-glowing-ridges-t01.webp ... -t06.webp
- what it has: fan-shaped curved lines, iridescent glow shifting from purple to blue and pink, like light grazing over folded silk, dark background.
- motion: on its own, the glow travels along the ridges of the lines, continuous.

## F-056 · React Bits Pro · Glowing Wave
- link: https://pro.reactbits.dev/docs/components/glowing-wave
- prints: rb-glowing-wave-t01.webp ... -t06.webp
- what it has: a single blue/white luminous wave, soft blurred outline, black background.
- motion: on its own, the wave drifts slowly across the screen, continuous.

## F-057 · React Bits Pro · Glue Dots
- link: https://pro.reactbits.dev/docs/components/glue-dots
- prints: rb-glue-dots-m01.webp, -m02.webp, -m03.webp
- what it has: regular grid of small white dots over a black background.
- motion: on hover, the dots near the cursor stretch and stick to one another (metaball effect), forming elongated drops. Trigger: pointer.

## F-058 · React Bits Pro · Gradient Bars
- link: https://pro.reactbits.dev/docs/components/gradient-bars
- prints: rb-gradient-bars-t01.webp ... -t06.webp
- what it has: vertical bars in shades of gray, like an equalizer or barcode, varying heights and brightness.
- motion: on its own, the bars change height and brightness in sequence, continuous.

## F-059 · React Bits Pro · Gradient Blob
- link: https://pro.reactbits.dev/docs/components/gradient-blob
- prints: rb-gradient-blob-t01.webp ... -t06.webp
- what it has: 3D sphere split into blue and white/pink, soft lilac gradient background, soft shading.
- motion: on its own, the sphere morphs and the color split rotates, continuous. The site also describes interaction with the cursor.

## F-060 · React Bits Pro · Gradient Carousel
- link: https://pro.reactbits.dev/docs/components/gradient-carousel
- prints: rb-gradient-carousel-t01.webp ... -t06.webp
- what it has: row of colored cards (solid orange, diagonal rainbow, gray with a dark diagonal, blue), like a 3D carousel, dark background.
- motion: on its own, the cards slide sideways swapping positions, continuous.

## F-061 · React Bits Pro · Grain Wave
- link: https://pro.reactbits.dev/docs/components/grain-wave
- prints: rb-grain-wave-t01.webp ... -t06.webp
- what it has: wave or horizontal-ribbon shape in red, blue and white, grainy texture (visible noise), dark background.
- motion: on its own, the wave rises and falls changing shape, continuous.

## F-062 · React Bits Pro · Grid Rise
- link: https://pro.reactbits.dev/docs/components/grid-rise
- prints: rb-grid-rise-t01.webp ... -t06.webp
- what it has: dome or elevation made of purple, glossy blocks/tiles, raymarched 3D look, black background.
- motion: on its own, the blocks rise and undulate forming the elevation, continuous. The site describes a reaction to the cursor, not confirmed in the test.

## F-063 · React Bits Pro · Halftone Vortex
- link: https://pro.reactbits.dev/docs/components/halftone-vortex
- prints: rb-halftone-vortex-t01.webp ... -t06.webp
- what it has: spiral of pink/magenta halftone dots over a black background, like a swirl or pinwheel.
- motion: on its own, the spiral spins continuously. The site describes a reaction to the cursor, not confirmed in the test.

## F-064 · React Bits Pro · Halftone Wave
- link: https://pro.reactbits.dev/docs/components/halftone-wave
- prints: rb-halftone-wave-t01.webp ... -t06.webp
- what it has: halftone dot pattern forming white clouds over a black background, like static or a stippled cloud.
- motion: on its own, the dot clouds shift and change density, continuous.

## F-065 · React Bits Pro · Hover Preview
- link: https://pro.reactbits.dev/docs/components/hover-preview
- prints: rb-hover-preview-01.webp (hover not captured: specific words within the sentence trigger the preview, and the automated test didn't hit any of them)
- what it has: small centered sentence "Built with React, TypeScript, and brought to life with Motion.", some words highlighted in pink/magenta, black background.
- motion: per the site, hovering over the highlighted words shows an image preview. Not visually confirmed in this collection.

## F-066 · React Bits Pro · Infinite Gallery
- link: https://pro.reactbits.dev/docs/components/infinite-gallery
- prints: rb-infinite-gallery-t01.webp ... -t06.webp
- what it has: several small photos (landscapes) scattered at different depths and sizes, lime-green circular elements between them, black background.
- motion: on its own in the preview, the photos shift in parallax (some faster than others); the site describes an infinite 3D scroll with drag.

## F-067 · React Bits Pro · Inverted Dome
- link: https://pro.reactbits.dev/docs/components/inverted-dome
- prints: rb-inverted-dome-t01.webp ... -t06.webp
- what it has: grid of black-and-white photos (varied textures) curved like the inside of a dome, stretching at the edges, dark background.
- motion: on its own, the grid rotates and the cells stretch toward the edges as if the camera were inside a sphere. The site describes it as draggable.

## F-068 · React Bits Pro · Landscape
- link: https://pro.reactbits.dev/docs/components/landscape
- prints: rb-landscape-t01.webp ... -t06.webp
- what it has: procedural landscape in purple tones, like dunes or rolling mountains seen from afar, low horizon, dark background.
- motion: on its own, the terrain scrolls toward the horizon continuously.

## F-069 · React Bits Pro · Lenticular Carousel
- link: https://pro.reactbits.dev/docs/components/lenticular-carousel
- prints: rb-lenticular-carousel-m01.webp, -m02.webp, -m03.webp
- what it has: row of cards with architecture photos (buildings), a larger central card highlighted, black background.
- motion: on hover, the cards flip like a lenticular print, swapping images. Trigger: pointer.

## F-070 · React Bits Pro · Light Droplets
- link: https://pro.reactbits.dev/docs/components/light-droplets
- prints: rb-light-droplets-t01.webp ... -t06.webp
- what it has: thin purple light streaks falling diagonally, like rain or sparks, black background.
- motion: on its own, the streaks fall and rotate slightly, continuous.

## F-071 · React Bits Pro · Lightspeed
- link: https://pro.reactbits.dev/docs/components/lightspeed
- prints: rb-lightspeed-t01.webp ... -t06.webp
- what it has: purple/white light streaks converging toward a central vanishing point, like space travel (hyperspace), black background.
- motion: on its own, the streaks shoot outward from the center continuously. The site also describes a reaction to click.

## F-072 · React Bits Pro · Liquid Ascii
- link: https://pro.reactbits.dev/docs/components/liquid-ascii
- prints: rb-liquid-ascii-t01.webp ... -t06.webp
- what it has: small light-gray dots and characters forming a fluid mass (like a drop or a cloud), black background.
- motion: on its own, the mass of dots flows and changes outline like a liquid, continuous.

## F-073 · React Bits Pro · Liquid Bars
- link: https://pro.reactbits.dev/docs/components/liquid-bars
- prints: rb-liquid-bars-t01.webp ... -t06.webp
- what it has: vertical columns filled with rippling purple/magenta liquid, like test tubes or liquid equalizer bars, dark background.
- motion: on its own, the level and shape of the liquid in each bar ripple, continuous.

## F-074 · React Bits Pro · Liquid Lines
- link: https://pro.reactbits.dev/docs/components/liquid-lines
- prints: rb-liquid-lines-t01.webp ... -t06.webp
- what it has: thin, bright diagonal (white) lines over a black background, irregular spacing.
- motion: on its own, the lines flow and change thickness/brightness, continuous.

## F-075 · React Bits Pro · Liquid Swap
- link: https://pro.reactbits.dev/docs/components/liquid-swap
- prints: rb-liquid-swap-m01.webp, -m02.webp, -m03.webp
- what it has: black-and-white photo of a building facade seen from below, strong perspective.
- motion: on hover, a liquid glass bubble travels across the image, swapping to another photo inside the bubble. Trigger: pointer.

## F-076 · React Bits Pro · Long Exposure
- link: https://pro.reactbits.dev/docs/components/long-exposure
- prints: rb-long-exposure-t01.webp ... -t06.webp
- what it has: bright blue light trails along a curved road in perspective, like a long-exposure night photo, black background.
- motion: on its own, the light trails move along the road's curve, continuous.

## F-077 · React Bits Pro · Magic Transform
- link: https://pro.reactbits.dev/docs/components/magic-transform
- prints: rb-magic-transform-t01.webp ... -t06.webp
- what it has: two vertical rectangles (a blank document and a purple bar) side by side, dark background, minimalist composition.
- motion: on its own, small colored dots (red, blue, orange) fly from the document toward a stack of results, like data particles organizing themselves. Continuous.

## F-078 · React Bits Pro · Metallic Swirl
- link: https://pro.reactbits.dev/docs/components/metallic-swirl
- prints: rb-metallic-swirl-t01.webp ... -t06.webp
- what it has: black-and-white liquid metal surface, rippling like molten silver or wet silk, high contrast, no color.
- motion: on its own, the wave pattern flows and twists continuously.

## F-079 · React Bits Pro · Minimal Ripple
- link: https://pro.reactbits.dev/docs/components/minimal-ripple
- prints: rb-minimal-ripple-t01.webp ... -t06.webp
- what it has: thin concentric circles in cyan, fine line, black background, centered and minimalist composition.
- motion: on its own, the circles expand outward from the center like ripples on water, continuous, fading at the edges.

## F-080 · React Bits Pro · Modal Cards
- link: https://pro.reactbits.dev/docs/components/modal-cards
- prints: rb-modal-cards-m01.webp, -m02.webp, -m03.webp
- what it has: three landscape photo cards (mountain, waves, aurora) side by side with a caption, dark background.
- motion: on hover, the cards swap size and prominence; on click (per the site) they open in a full modal. Trigger: pointer.

## F-081 · React Bits Pro · Mosaic
- link: https://pro.reactbits.dev/docs/components/mosaic
- prints: rb-mosaic-t01.webp ... -t06.webp
- what it has: black-and-white texture with wavy vertical stripes, like a metallic curtain or CRT screen, high contrast.
- motion: on its own, the stripes ripple and shift, continuous.

## F-082 · React Bits Pro · Mosaic Waves
- link: https://pro.reactbits.dev/docs/components/mosaic-waves
- prints: rb-mosaic-waves-t01.webp ... -t06.webp
- what it has: mosaic of blocks in dark blue tones, like a patchwork quilt or camouflage, dark background.
- motion: on its own, the blocks change tone in waves that sweep across the mosaic, continuous.

## F-083 · React Bits Pro · Neon Reveal
- link: https://pro.reactbits.dev/docs/components/neon-reveal
- prints: rb-neon-reveal-t01.webp ... -t06.webp
- what it has: large bold text "Neon Reveal," purple/magenta light band with a realistic neon glow sweeping the dark background, code-control bar visible above (part of the preview itself).
- motion: on its own, the light band sweeps horizontally revealing the text with a glow, continuous.

## F-084 · React Bits Pro · Neural Flash
- link: https://pro.reactbits.dev/docs/components/neural-flash
- prints: rb-neural-flash-t01.webp ... -t06.webp
- what it has: thin, bright dark-blue filaments forming a streak/spark over a black background, very subtle.
- motion: on its own, the filaments flash like lightning and fade out, continuous loop.

## F-085 · React Bits Pro · Neural Float
- link: https://pro.reactbits.dev/docs/components/neural-float
- prints: rb-neural-float-t01.webp ... -t06.webp
- what it has: thin pink/magenta filaments spreading out from the center like a soft explosion or flower, black background.
- motion: on its own, the filaments float and reorganize slowly, continuous.

## F-086 · React Bits Pro · Neural Tunnel
- link: https://pro.reactbits.dev/docs/components/neural-tunnel
- prints: rb-neural-tunnel-t01.webp ... -t06.webp
- what it has: magenta lines converging toward a central vanishing point, like a tunnel or star, black background.
- motion: on its own, the lines pulse and the tunnel seems to advance continuously.

## F-087 · React Bits Pro · Page Flip
- link: https://pro.reactbits.dev/docs/components/page-flip
- prints: rb-page-flip-m01.webp, -m02.webp, -m03.webp
- what it has: smooth white page in perspective, folding like paper, black background.
- motion: on drag, the page turns like the pages of a book, revealing the next one. Trigger: pointer (drag).

## F-088 · React Bits Pro · Parallax Cards
- link: https://pro.reactbits.dev/docs/components/parallax-cards
- prints: rb-parallax-cards-m01.webp, -m02.webp, -m03.webp
- what it has: several black-and-white landscape/mountain photos, scattered in layers of different sizes, black background.
- motion: as the mouse moves, the layers shift at different speeds (3D parallax). Trigger: pointer.

## F-089 · React Bits Pro · Parallax Carousel
- link: https://pro.reactbits.dev/docs/components/parallax-carousel
- prints: rb-parallax-carousel-t01.webp ... -t06.webp
- what it has: three colored photos side by side (mountain at dusk, portrait, mixing desk/studio), straight edges, black background.
- motion: on its own in the preview, the photos slide sideways with a sense of parallax; the site describes it as draggable.

## F-090 · React Bits Pro · Parallax Pills
- link: https://pro.reactbits.dev/docs/components/parallax-pills
- prints: rb-parallax-pills-t01.webp ... -t06.webp
- what it has: small white pill/label shapes with short text (component names), scattered at different positions, black background.
- motion: on its own, the pills float and swap positions as if drifting, continuous. The site describes a reaction to the cursor.

## F-091 · React Bits Pro · Particle Image
- link: https://pro.reactbits.dev/docs/components/particle-image
- prints: rb-particle-image-t01.webp ... -t06.webp
- what it has: black-and-white photo of a classical sculpture (same reference as Depth Image), composed of small dots/particles.
- motion: on its own, the image dissolves into particles that rotate and regroup back into the original shape, continuous.

## F-092 · React Bits Pro · Particle Morph
- link: https://pro.reactbits.dev/docs/components/particle-morph
- prints: rb-particle-morph-t01.webp ... -t06.webp
- what it has: gray grainy cube (dense particle texture), black background, soft light defining the faces.
- motion: on its own, the particle cloud keeps the cube shape while rotating; the site describes a transition between several shapes (logos, silhouettes).

## F-093 · React Bits Pro · Particle Text
- link: https://pro.reactbits.dev/docs/components/particle-text
- prints: rb-particle-text-m01.webp, -m02.webp, -m03.webp
- what it has: large word "brilliant." in light gray, black background, sans-serif typography.
- motion: on hover, a circle of particles forms over the word and distorts the nearby letters. Trigger: pointer.

## F-094 · React Bits Pro · Perspective Grid
- link: https://pro.reactbits.dev/docs/components/perspective-grid
- prints: rb-perspective-grid-t01.webp ... -t06.webp
- what it has: 3D grid in perspective (thin purple lines) receding to the horizon, black background, like an infinite floor.
- motion: on its own, the grid moves toward the camera continuously, sense of advancing.

## F-095 · React Bits Pro · Pixel Magnet
- link: https://pro.reactbits.dev/docs/components/pixel-magnet
- prints: rb-pixel-magnet-m01.webp, -m02.webp, -m03.webp
- what it has: plain black background, very subtle at rest.
- motion: as the mouse moves, nearby pixels are attracted and form a small trail of white dots, like iron filings on a magnet. Trigger: pointer.

## F-096 · React Bits Pro · Pixel Rain
- link: https://pro.reactbits.dev/docs/components/pixel-rain
- prints: rb-pixel-rain-t01.webp ... -t06.webp
- what it has: thin vertical magenta streaks falling over a black background, like digital rain (Matrix-style), pixelated.
- motion: on its own, the streaks fall continuously from top to bottom.

## F-097 · React Bits Pro · Pixel Reveal
- link: https://pro.reactbits.dev/docs/components/pixel-reveal
- prints: rb-pixel-reveal-t01.webp ... -t06.webp
- what it has: colored photo of a person rowing on a lake with mountains in the background, grayish, cool tone.
- motion: on its own, the image reveals itself through a sweep of pixelated blocks that shrink until the photo is sharp. Continuous loop.

## F-098 · React Bits Pro · Pixel Sculpt
- link: https://pro.reactbits.dev/docs/components/pixel-sculpt
- prints: rb-pixel-sculpt-m01.webp, -m02.webp, -m03.webp
- what it has: close-up sunflower photo, warm colors (yellow/orange) over a black background.
- motion: on hover, the image (rebuilt in blocks/tiles) ripples in relief following the pointer. Trigger: pointer.

## F-099 · React Bits Pro · Pixelate Hover
- link: https://pro.reactbits.dev/docs/components/pixelate-hover
- prints: rb-pixelate-hover-t01.webp ... -t06.webp
- what it has: black-and-white portrait of a person, partially pixelated in large blocks.
- motion: on its own in the preview, the pixelated area shifts, revealing and hiding sharp parts of the photo; the site describes it as controlled by the cursor.

## F-100 · React Bits Pro · Portal
- link: https://pro.reactbits.dev/docs/components/portal
- prints: rb-portal-t01.webp ... -t06.webp
- what it has: circle with a glowing pink/magenta edge, interior with a fast-line static-like texture, black background.
- motion: on its own, the texture inside the circle spins and flickers like a portal, continuous.

## F-101 · React Bits Pro · Preloader
- link: https://pro.reactbits.dev/docs/components/preloader
- prints: rb-preloader-m01.webp, -m02.webp, -m03.webp
- what it has: full-screen solid purple/lilac screen with small centered text "loading your experience.", third frame shows staircase-like bars rising from below.
- motion: the loading screen changes pattern (text, then bars), the site offers several style variants. Trigger: pointer (variant switch in the preview).

## F-102 · React Bits Pro · Radial Liquid
- link: https://pro.reactbits.dev/docs/components/radial-liquid
- prints: rb-radial-liquid-t01.webp ... -t06.webp
- what it has: concentric black-and-white waves with distortion, like water rippling seen from above, high contrast.
- motion: on its own, the waves expand from the center with liquid distortion, continuous.

## F-103 · React Bits Pro · Ravine
- link: https://pro.reactbits.dev/docs/components/ravine
- prints: rb-ravine-t01.webp ... -t06.webp
- what it has: walls of a monochrome canyon seen from inside, flying perspective, very dark gray tones.
- motion: on its own, the camera advances through the canyon continuously, each wall shaded by distance.

## F-104 · React Bits Pro · Reel Gallery
- link: https://pro.reactbits.dev/docs/components/reel-gallery
- prints: rb-reel-gallery-t01.webp ... -t06.webp
- what it has: rows of small tilted photos (like film reels or negative strips), several landscape/travel images, dark background.
- motion: on its own in the preview, the rows slide diagonally; the site describes it as scroll-triggered.

## F-105 · React Bits Pro · Retro Lines
- link: https://pro.reactbits.dev/docs/components/retro-lines
- prints: rb-retro-lines-t01.webp ... -t06.webp
- what it has: retro-style perspective grid (thin magenta lines), low horizon, black background, evokes a synthwave aesthetic.
- motion: on its own, waves travel across the grid toward the camera, continuous.

## F-106 · React Bits Pro · Rising Lines
- link: https://pro.reactbits.dev/docs/components/rising-lines
- prints: rb-rising-lines-t01.webp ... -t06.webp
- what it has: thin vertical laser-like lines rising from below, magenta color, black background, denser at the bottom.
- motion: on its own, the lines rise like laser beams or geysers of light, continuous.

## F-107 · React Bits Pro · Rising Particles
- link: https://pro.reactbits.dev/docs/components/rising-particles
- prints: rb-rising-particles-t01.webp ... -t06.webp
- what it has: small glowing purple particles over a black background, like fireflies or embers.
- motion: on its own, the particles rise slowly and flicker, continuous.

## F-108 · React Bits Pro · Rolling Blinds
- link: https://pro.reactbits.dev/docs/components/rolling-blinds
- prints: rb-rolling-blinds-t01.webp ... -t06.webp
- what it has: fan-shaped beam of white light, like a curtain or blinds opening, black background, high contrast.
- motion: on its own, the light bands open and close like blinds, continuous.

## F-109 · React Bits Pro · Rotating Cards
- link: https://pro.reactbits.dev/docs/components/rotating-cards
- prints: rb-rotating-cards-t01.webp ... -t06.webp
- what it has: numbered cards (1 to 7) with dark stone/marble textures, arranged in a circular fan, black background.
- motion: on its own, the cards rotate in a 3D carousel swapping positions; the site describes it as draggable.

## F-110 · React Bits Pro · Rotating Stars
- link: https://pro.reactbits.dev/docs/components/rotating-stars
- prints: rb-rotating-stars-t01.webp ... -t06.webp
- what it has: thin concentric rings in dark purple/blue over a black background, like orbits.
- motion: on its own, the rings spin at different speeds, continuous.

## F-111 · React Bits Pro · Rubber Fluid
- link: https://pro.reactbits.dev/docs/components/rubber-fluid
- prints: rb-rubber-fluid-t01.webp ... -t06.webp
- what it has: vibrant magenta liquid bands, elastic and glossy texture like rubber or wet silk, dark background.
- motion: on its own, the bands twist and flow continuously.

## F-112 · React Bits Pro · Scroll Mask
- link: https://pro.reactbits.dev/docs/components/scroll-mask
- prints: rb-scroll-mask-t01.webp ... -t06.webp
- what it has: nearly all-dark frame with a small numeral in the bottom corner, no visible image at rest.
- motion: not confirmed in the isolated preview (minimal change between frames); the site describes scroll opening a mask revealing an image, in six different shapes.

## F-113 · React Bits Pro · Scroll Portal
- link: https://pro.reactbits.dev/docs/components/scroll-portal
- prints: rb-scroll-portal-t01.webp ... -t06.webp
- what it has: dark rectangle with a thin frame and the word "Arrival" in the bottom-left corner, minimalist composition.
- motion: not confirmed in the isolated preview; the site describes scroll carrying the camera through nested frames, each revealing the next scene.

## F-114 · React Bits Pro · Scroll Stack
- link: https://pro.reactbits.dev/docs/components/scroll-stack
- prints: rb-scroll-stack-m01.webp, -m02.webp, -m03.webp
- what it has: light-gray card with the text "Read the site before it exists" and a paragraph below, geometric background shape (like folded origami).
- motion: in the preview it reacted to the mouse; the site describes fixed cards that stack, flip and disappear as the page scrolls.

## F-115 · React Bits Pro · Shader Card
- link: https://pro.reactbits.dev/docs/components/shader-card
- prints: rb-shader-card-t01.webp ... -t06.webp
- what it has: card titled "Shader Card," the card's background in an animated purple nebula-like gradient, button below.
- motion: on its own, the card's background gradient flows and changes shape, continuous.

## F-116 · React Bits Pro · Shader Reveal
- link: https://pro.reactbits.dev/docs/components/shader-reveal
- prints: rb-shader-reveal-t01.webp ... -t06.webp
- what it has: photo of a person with a stylized silver helmet/crown and red hair, light background, fashion/editorial composition.
- motion: on its own, the image reveals itself with liquid distortion (the site describes it as interactive, tied to the cursor).

## F-117 · React Bits Pro · Shader Waves
- link: https://pro.reactbits.dev/docs/components/shader-waves
- prints: rb-shader-waves-t01.webp ... -t06.webp
- what it has: purple liquid waves with swirls, ink-mixing texture, saturated background with no black areas.
- motion: on its own, the swirls rotate and blend continuously.

## F-118 · React Bits Pro · Shadow Bars
- link: https://pro.reactbits.dev/docs/components/shadow-bars
- prints: rb-shadow-bars-t01.webp ... -t06.webp
- what it has: thin vertical bars of pink/magenta light at irregular positions, black background, like a sparse equalizer.
- motion: on its own, the bars appear and grow at different positions, continuous.

## F-119 · React Bits Pro · Silk Waves
- link: https://pro.reactbits.dev/docs/components/silk-waves
- prints: rb-silk-waves-t01.webp ... -t06.webp
- what it has: curved bands in vibrant blue, like silk or dense smoke, black background, soft gradient within the blue itself.
- motion: on its own, the bands flow diagonally, continuous.

## F-120 · React Bits Pro · Simple Graph
- link: https://pro.reactbits.dev/docs/components/simple-graph
- prints: rb-simple-graph-t01.webp ... -t06.webp
- what it has: thin chart line with data points, black background, dashboard-panel style, neutral light color.
- motion: on its own, the chart line redraws itself with new values, continuous.

## F-121 · React Bits Pro · Simple Swirl
- link: https://pro.reactbits.dev/docs/components/simple-swirl
- prints: rb-simple-swirl-t01.webp ... -t06.webp
- what it has: blurred blue/purple circular smudge, soft glow, black background, simple shape with no internal detail.
- motion: on its own, the smudge rotates and pulses slightly, continuous.

## F-122 · React Bits Pro · Skewed Carousel
- link: https://pro.reactbits.dev/docs/components/skewed-carousel
- prints: rb-skewed-carousel-t01.webp ... -t06.webp
- what it has: row of tilted photo cards (architecture), some larger and sharp, others smaller on the sides, dark background.
- motion: on its own, but on a slow cycle (the change only appeared after a longer wait), the cards slide and swap scale and tilt as they pass through the center.

## F-123 · React Bits Pro · Smooth Cursor
- link: https://pro.reactbits.dev/docs/components/smooth-cursor
- prints: rb-smooth-cursor-m01.webp, -m02.webp, -m03.webp
- what it has: black background, small centered text "Move your cursor," thin white streak.
- motion: as the mouse moves, a white streak follows the cursor with elastic lag (spring physics), leaving a curved trail. Trigger: pointer.

## F-124 · React Bits Pro · Specter Orb
- link: https://pro.reactbits.dev/docs/components/specter-orb
- prints: rb-specter-orb-t01.webp ... -t06.webp
- what it has: bright blue sphere with a defined outline and a smoke/mist interior, black background, like a ghost or planet.
- motion: on its own, the smoke inside the sphere rotates and the edge pulses, continuous.

## F-125 · React Bits Pro · Spectral Clouds
- link: https://pro.reactbits.dev/docs/components/spectral-clouds
- prints: rb-spectral-clouds-t01.webp ... -t06.webp
- what it has: volumetric clouds tinted red and blue, dense organic texture, saturated background.
- motion: on its own, the clouds move and shift tone slowly, continuous.

## F-126 · React Bits Pro · Speeding Text
- link: https://pro.reactbits.dev/docs/components/speeding-text
- prints: rb-speeding-text-t01.webp ... -t06.webp
- what it has: large white italic number (e.g., "18.592"), black background, condensed heavy typography.
- motion: on its own, the number changes and blurs horizontally as if accelerating (stretch/smear effect), continuous.

## F-127 · React Bits Pro · Square Matrix
- link: https://pro.reactbits.dev/docs/components/square-matrix
- prints: rb-square-matrix-t01.webp ... -t06.webp
- what it has: grid of magenta dots forming concentric circles, black background, regular halftone-like pattern.
- motion: on its own, the circles expand outward from the center in waves, continuous.

## F-128 · React Bits Pro · Squares Terminal
- link: https://pro.reactbits.dev/docs/components/squares-terminal
- prints: rb-squares-terminal-t01.webp ... -t06.webp
- what it has: dense grid of small purple squares, texture like an old terminal or dot-matrix screen, dark background.
- motion: on its own, the squares blink on and off at random positions, continuous.

## F-129 · React Bits Pro · Squircle Shift
- link: https://pro.reactbits.dev/docs/components/squircle-shift
- prints: rb-squircle-shift-t01.webp ... -t06.webp
- what it has: rounded shapes (squircles, between square and circle) with a glowing blue/purple outline, scattered over a black background.
- motion: on its own, the shapes change size and position, continuous morphing.

## F-130 · React Bits Pro · Staggered Text
- link: https://pro.reactbits.dev/docs/components/staggered-text
- prints: rb-staggered-text-t01.webp ... -t06.webp
- what it has: centered phrase "Build faster than ever," white, two lines, black background, bold typography.
- motion: on its own, the words enter one at a time (staggered), a typing or cascading-reveal effect.

## F-131 · React Bits Pro · Star Burst
- link: https://pro.reactbits.dev/docs/components/star-burst
- prints: rb-star-burst-t01.webp ... -t06.webp
- what it has: thin pink/magenta streaks exploding upward from a point at the base, like fireworks or a light source, black background.
- motion: on its own, the streaks shoot outward continuously.

## F-132 · React Bits Pro · Star Swipe
- link: https://pro.reactbits.dev/docs/components/star-swipe
- prints: rb-star-swipe-t01.webp ... -t06.webp
- what it has: pattern of light-pink curved lines forming symmetric waves like a fingerprint or sound wave, dark background.
- motion: on its own, the pattern sweeps and deforms continuously.

## F-133 · React Bits Pro · Swirl Blend
- link: https://pro.reactbits.dev/docs/components/swirl-blend
- prints: rb-swirl-blend-t01.webp ... -t06.webp
- what it has: swirl of pink/magenta into dark purple, saturated liquid texture, no black areas.
- motion: on its own, the swirl rotates and the colors blend, continuous.

## F-134 · React Bits Pro · Synaptic Shift
- link: https://pro.reactbits.dev/docs/components/synaptic-shift
- prints: rb-synaptic-shift-t01.webp ... -t06.webp
- what it has: organic cells connected by bright white/blue lines, like a neural network or membrane, dark background.
- motion: on its own, the connection points glow and pulse traveling through the network, continuous.

## F-135 · React Bits Pro · Tech Wall
- link: https://pro.reactbits.dev/docs/components/tech-wall
- prints: rb-tech-wall-t01.webp ... -t06.webp
- what it has: honeycomb-like hexagonal panel in purple tones, edges with a glowing outline, dark background.
- motion: on its own, the panels light up in sequence like lights switching on a technical panel, continuous.

## F-136 · React Bits Pro · Text Cube
- link: https://pro.reactbits.dev/docs/components/text-cube
- prints: rb-text-cube-t01.webp ... -t06.webp
- what it has: thin 3D cube formed of sparse white dots/lines, black background, nearly invisible at the preview's size.
- motion: on its own, the cube rotates slowly; the site describes it as following the cursor with depth fading.

## F-137 · React Bits Pro · Text Path
- link: https://pro.reactbits.dev/docs/components/text-path
- prints: rb-text-path-t01.webp ... -t06.webp
- what it has: running text in light gray, following a wavy curve, black background, light typography.
- motion: on its own, the text slides along the curved path continuously.

## F-138 · React Bits Pro · Text Scatter
- link: https://pro.reactbits.dev/docs/components/text-scatter
- prints: rb-text-scatter-m01.webp, -m02.webp, -m03.webp
- what it has: centered white phrase "Bounce Back.", black background, bold typography.
- motion: as the mouse moves, the letters scatter and jump away from the cursor, then return to place. Trigger: pointer.

## F-139 · React Bits Pro · Thinking Dots
- link: https://pro.reactbits.dev/docs/components/thinking-dots
- prints: rb-thinking-dots-t01.webp ... -t06.webp
- what it has: cloud of small magenta dots, denser at the center, black background.
- motion: on its own, the dot cloud "breathes," changing density and shape, as if thinking, continuous.

## F-140 · React Bits Pro · Tile Reveal
- link: https://pro.reactbits.dev/docs/components/tile-reveal
- prints: rb-tile-reveal-t01.webp ... -t06.webp
- what it has: centered white phrase "Built for what comes next" over a black background, large bold typography.
- motion: on its own in the preview, the text stays fixed while (per the site) a grid of images flies away column by column as you scroll, until revealing this title.

## F-141 · React Bits Pro · Tilted Tiles
- link: https://pro.reactbits.dev/docs/components/tilted-tiles
- prints: rb-tilted-tiles-t01.webp ... -t06.webp
- what it has: grid of photos (landscapes, architecture) tilted in diagonal perspective, filling the whole frame, varied colors.
- motion: on its own in the preview, the columns of photos slide in opposite directions; the site describes it as scroll-triggered.

## F-142 · React Bits Pro · Tumble Carousel
- link: https://pro.reactbits.dev/docs/components/tumble-carousel
- prints: rb-tumble-carousel-m01.webp, -m02.webp, -m03.webp
- what it has: small cards with varied photos, each spinning around its own axis while advancing in an arc, black background.
- motion: on drag, the cards tumble (flip end over end) as they advance through the carousel. Trigger: drag.

## F-143 · React Bits Pro · Twilight Lines
- link: https://pro.reactbits.dev/docs/components/twilight-lines
- prints: rb-twilight-lines-t01.webp ... -t06.webp
- what it has: horizontal wavy lines with a purple-to-warm-pink glow, stacked, dark background.
- motion: on its own, the glow sweeps across the lines from side to side, continuous.

## F-144 · React Bits Pro · Twisting Gallery
- link: https://pro.reactbits.dev/docs/components/twisting-gallery
- prints: rb-twisting-gallery-m01.webp, -m02.webp, -m03.webp
- what it has: black-and-white photos (landscape) in a column, each rotated at a different angle, black background.
- motion: on drag, the images rotate with a twisting effect and blur with speed. Trigger: drag.

## F-145 · React Bits Pro · User Cursor
- link: https://pro.reactbits.dev/docs/components/user-cursor
- prints: rb-user-cursor-m01.webp, -m02.webp, -m03.webp
- what it has: black background, small text "Hello, Sophie" with an orange label beside it, like a real-time collaboration cursor.
- motion: as the mouse moves, the name label follows the cursor. Trigger: pointer.

## F-146 · React Bits Pro · Vortex
- link: https://pro.reactbits.dev/docs/components/vortex
- prints: rb-vortex-t01.webp ... -t06.webp
- what it has: 3D tunnel formed of thin concentric lines, very dark and subtle, black background, sense of infinite depth.
- motion: on its own, the tunnel rotates and advances continuously, with particles.

## F-147 · React Bits Pro · Warp Twister
- link: https://pro.reactbits.dev/docs/components/warp-twister
- prints: rb-warp-twister-t01.webp ... -t06.webp
- what it has: subtle distortion like fabric or dark smoke, nearly monochrome, black background, very subtle in the preview.
- motion: on its own, the distortion rotates and twists slowly, continuous.

## F-148 · React Bits Pro · Warped Card
- link: https://pro.reactbits.dev/docs/components/warped-card
- prints: rb-warped-card-m01.webp, -m02.webp, -m03.webp
- what it has: vertical card with an illustration of a tree and moon over an earth-toned (orange/brown) landscape, black background.
- motion: as the mouse moves, the card's image bulges and distorts like a bulge following the cursor. Trigger: pointer.

## F-149 · React Bits Pro · Watercolor
- link: https://pro.reactbits.dev/docs/components/watercolor
- prints: rb-watercolor-t01.webp ... -t06.webp
- what it has: high-contrast black-and-white blots like watery ink (watercolor), organic and irregular texture.
- motion: on its own, the blots spread and change shape continuously.

## F-150 · React Bits Pro · Wireframe Ball
- link: https://pro.reactbits.dev/docs/components/wireframe-ball
- prints: rb-wireframe-ball-t01.webp ... -t06.webp
- what it has: wireframe polyhedron (thin white lines connecting vertices), black background, very subtle and small in the preview.
- motion: on its own, the polyhedron rotates slowly, continuous.
