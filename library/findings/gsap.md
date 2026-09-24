# Findings: GSAP Scroll showcase

Source: https://gsap.com/scroll/  
IDs: F-151 to F-161 (11)  
Prints: `prints/gsap-*.webp`

One long page of 14 blocks. The 11 scroll demos were captured at 6 scroll positions each; the 3 static blocks at the end (plugin grid, links, showcase) are only listed.

Snapshot collected on 2026-09-22. Catalogs change; recount before trusting totals. Findings are factual descriptions: `what it has` and `motion`.

---

## F-151 · GSAP Scroll · Hero "Scroll"
- link: https://gsap.com/scroll/ (top of the page)
- prints: gsap-hero-s01.webp ... -s06.webp
- what it has: the word "Scroll" huge in light pink, below it pill-shaped forms with a blue-to-pink/purple gradient (one in a cross/four-leaf-clover shape, long capsules, a circle), large sans-serif type, black background, green warning bar at the top.
- motion: on scroll, the green bar at the top exits the frame, the title and the shapes shrink and rise, giving way to the next section's title ("Scroll Plugins") which enters from below. Trigger: scroll, continuous while scrolling, returns to the initial state on scroll-up.

## F-152 · GSAP Scroll · Scroll Plugins
- link: https://gsap.com/scroll/
- prints: gsap-plugins-intro-s01.webp ... -s06.webp
- what it has: 3D ring/hoop with a blue-to-pink gradient, bright specular light on the edge (like a glass or liquid-metal donut), text "Infinitely Flexible, Highly Optimised" and a paragraph about slide/zoom/morph/draw, black background.
- motion: the ring rotates in 3D as you scroll, the text rises and fades out, giving way to the next title. Trigger: scroll, reversible on scroll-up.

## F-153 · GSAP Scroll · ScrollTrigger, Ready Set Scroll
- link: https://gsap.com/scroll/
- prints: gsap-trigger-ready-s01.webp ... -s06.webp
- what it has: 3D tubular shape with a blue-to-pink gradient, bent like a pipe or worm with spherical ends, next to it a code-editor mockup with "Demo"/"Code" tabs and a variant selector, colored monospace type in the code block.
- motion: the tube twists and stretches, changing shape as the scroll progresses, as if being drawn. Trigger: scroll, reversible.

## F-154 · GSAP Scroll · Pin, Scrub, Debug
- link: https://gsap.com/scroll/
- prints: gsap-trigger-pin-s01.webp ... -s06.webp
- what it has: four-blade pinwheel in alternating blue and pink, code-editor mockup beside it, title "Pin, Scrub, Debug", black background.
- motion: the section stays fixed on screen (pin) while the pinwheel spins and the content beside it changes, only releasing scroll once the cycle completes. Trigger: scroll, with a temporary lock (pin).

## F-155 · GSAP Scroll · Any Size
- link: https://gsap.com/scroll/
- prints: gsap-trigger-size-s01.webp ... -s06.webp
- what it has: the phrase "Any [shape] Size" where the middle word is replaced by a long pink capsule with a blue dot inside, like an illustrated letter, black background, large type.
- motion: the pink capsule and the blue dot move within the phrase as you scroll, playing with the text's scale. Trigger: scroll, reversible.

## F-156 · GSAP Scroll · ScrollSmoother, gentle breeze
- link: https://gsap.com/scroll/
- prints: gsap-smooth-breeze-s01.webp ... -s06.webp
- what it has: small paper airplane with a blue/pink gradient, curved dotted line marking its path, title "It's like a gentle breeze", black background.
- motion: the paper airplane flies along the curved line as the page scrolls, with a slight sway. Trigger: scroll, reversible.

## F-157 · GSAP Scroll · Effortless
- link: https://gsap.com/scroll/
- prints: gsap-smooth-effortless-s01.webp ... -s06.webp
- what it has: ribbon/tube curved in an "S" with a blue-to-pink gradient, rounded ends like bubbles, black background, text "Effortlessly guiding your users from one section to another."
- motion: the ribbon changes curve (twists) as you scroll, as if guiding the eye from one section to another. Trigger: scroll, reversible.

## F-158 · GSAP Scroll · Smooth like butter
- link: https://gsap.com/scroll/
- prints: gsap-smooth-butter-s01.webp ... -s06.webp
- what it has: the same blue/pink gradient ribbon mentioned above, and a disc with an iridescent swirl pattern (like mother-of-pearl or vinyl), title "It's smooth like butter", paragraph, two pill-shaped buttons "Demos"/"Docs".
- motion: the ribbon finishes its motion and a spinning swirl disc appears and rotates continuously as the section passes across the screen. Trigger: scroll.

## F-159 · GSAP Scroll · Create mesmerising effects (parallax)
- link: https://gsap.com/scroll/
- prints: gsap-smooth-effects-s01.webp ... -s06.webp
- what it has: several small elements (blue dot, gradient bars, a four-petal flower/clover) scattered at different depths, each labeled with a number (0.8, 2.0, 1.2), code block showing the `data-speed` attribute, title "Create mesmerising effects".
- motion: each element moves at a different speed as you scroll (parallax), the "faster" ones (higher number) move more than the "slower" ones. Trigger: scroll, reversible.

## F-160 · GSAP Scroll · Seamlessly integrated
- link: https://gsap.com/scroll/
- prints: gsap-seamless-s01.webp ... -s06.webp
- what it has: two rounded vertical bars/columns with a blue-to-pink gradient, different heights, title "Seamlessly integrated", paragraph, black background.
- motion: the bars grow and shrink in height as the scroll progresses, like an animated chart. Trigger: scroll, reversible.

## F-161 · GSAP Scroll · Back to Basics with Observer
- link: https://gsap.com/scroll/
- prints: gsap-observer-s01.webp ... -s06.webp
- what it has: title "Back to Basics with Observer" (the dot of the "i" in "Basics" is a blue dot), paragraph, two pill-shaped buttons, and a final panel with a solid pink background reading "Buttery Smooth Scrolling With GSAP Scroll Plugins" and two small cards with icons.
- motion: the text rises and gives way to a full pink panel that closes out the page, like a closing card. Trigger: scroll.
