# Findings: React Bits Pro

Source: https://reactbits.dev/pro/components  
IDs: F-001 to F-150 (150)  
Prints: `prints/rb-*.webp`

Whole catalog (150 Pro components) opened and captured. Self-running demos: 6 time frames (`-t01..t06`); scroll-driven: 6 scroll positions (`-s01..s06`); pointer effects: `-m01..m03`.

Snapshot collected on 2026-09-22. Catalogs change; recount before trusting totals. Findings are factual descriptions in Portuguese: `o que tem` (what it has) and `movimento` (motion).

---

## F-001 · React Bits Pro · 3D Letter Swap
- link: https://pro.reactbits.dev/docs/components/3d-letter-swap
- prints: rb-3d-letter-swap-m01.webp, -m02.webp, -m03.webp
- o que tem: categoria Texto. Palavra "Hover Me!" centralizada, letras chapadas brancas em negrito sobre fundo preto liso, sem textura, sem profundidade visível em repouso.
- movimento: ao passar o mouse, cada letra gira em torno do próprio eixo vertical e revela uma segunda face (efeito de cubo 3D), uma letra de cada vez, volta ao normal quando o mouse sai. Gatilho: mouse.

## F-002 · React Bits Pro · 3D Text Reveal
- link: https://pro.reactbits.dev/docs/components/3d-text-reveal
- prints: rb-3d-text-reveal-t01.webp ... -t06.webp
- o que tem: texto pequeno centralizado em fundo preto, tipografia fina e clara. O próprio site descreve como "scroll-triggered", mas dentro da caixa de preview isolada (sem página para rolar) ele repete sozinho em ciclo curto.
- movimento: o texto entra devagar com leve profundidade e perspectiva 3D, sozinho, ciclo de poucos segundos. Textura difícil de ler no tamanho pequeno do preview.

## F-003 · React Bits Pro · Agentic Ball
- link: https://pro.reactbits.dev/docs/components/agentic-ball
- prints: rb-agentic-ball-t01.webp ... -t06.webp
- o que tem: esfera 3D cinza clara e prateada, reflexo especular forte (como metal escovado ou vidro fosco), fundo preto liso, luz vindo de cima à esquerda, sombra suave embaixo.
- movimento: a esfera gira sozinha e o padrão de reflexo interno (como um redemoinho) se desloca dentro dela, contínuo, sem pausa.

## F-004 · React Bits Pro · AI Blob
- link: https://pro.reactbits.dev/docs/components/ai-blob
- prints: rb-ai-blob-t01.webp ... -t06.webp
- o que tem: esfera ou blob com borda em degradê de cor (magenta/roxo para ciano), miolo claro quase branco, fundo preto, brilho tipo neon ao redor do contorno.
- movimento: sozinho, o blob pulsa e o degradê de cor gira ao redor da borda, contínuo.

## F-005 · React Bits Pro · Animated List
- link: https://pro.reactbits.dev/docs/components/animated-list
- prints: rb-animated-list-t01.webp ... -t06.webp
- o que tem: lista de itens em formato cartão/linha (nome, campo secundário, valor à direita), fundo escuro, tipografia pequena, linhas finas separando os itens.
- movimento: os itens da lista entram e se reordenam sozinhos, um de cada vez, como uma fila viva.

## F-006 · React Bits Pro · Ascii Cursor
- link: https://pro.reactbits.dev/docs/components/ascii-cursor
- prints: rb-ascii-cursor-m01.webp, -m02.webp, -m03.webp
- o que tem: fundo preto, rótulo pequeno "MOVE CURSOR" centralizado, caracteres ASCII verdes brilhantes (estilo terminal) espalhados como partícula.
- movimento: ao mover o mouse os caracteres verdes se agrupam e seguem a posição do cursor, como um rastro. Gatilho: mouse.

## F-007 · React Bits Pro · ASCII Ripple
- link: https://pro.reactbits.dev/docs/components/ascii-ripple
- prints: rb-ascii-ripple-m01.webp, -m02.webp, -m03.webp
- o que tem: página inteira de texto monoespaçado pequeno, cinza sobre preto, como um bloco de código.
- movimento: o ponteiro sobre o texto gera ondas: os caracteres perto do cursor mudam de posição e ficam mais pesados (glifo maior), como se fosse líquido. Gatilho: mouse (mover ou arrastar).

## F-008 · React Bits Pro · ASCII Tiles
- link: https://pro.reactbits.dev/docs/components/ascii-tiles
- prints: rb-ascii-tiles-t01.webp ... -t06.webp
- o que tem: grade de blocos preenchidos por caracteres ASCII miúdos, aspecto vítreo, bordas de alguns blocos com franja colorida (separação vermelho/azul/verde, tipo aberração cromática).
- movimento: sozinho, os blocos parecem girar e piscar em sequência, textura tremendo, contínuo.

## F-009 · React Bits Pro · Ascii Waves
- link: https://pro.reactbits.dev/docs/components/ascii-waves
- prints: rb-ascii-waves-t01.webp ... -t06.webp
- o que tem: campo de pontos em meio-tom (halftone) formando ondas curvas, preto e branco, sem cor.
- movimento: sozinho, as ondas de pontos se deslocam na diagonal, como uma ondulação de água contínua.

## F-010 · React Bits Pro · Aura Blob
- link: https://pro.reactbits.dev/docs/components/aura-blob
- prints: rb-aura-blob-t01.webp ... -t06.webp
- o que tem: esfera lisa com brilho e aura roxo-magenta ao redor, fundo preto, superfície lisa da esfera, luz difusa.
- movimento: sozinho, a aura pulsa e respira (expande e contrai), contínuo, sem deslocamento de posição.

## F-011 · React Bits Pro · Aurora Beam
- link: https://pro.reactbits.dev/docs/components/aurora-beam
- prints: rb-aurora-beam-t01.webp ... -t06.webp
- o que tem: feixe horizontal de luz ciano/verde-água, como uma fita de aurora boreal, sobre fundo preto, camadas de luz sobrepostas.
- movimento: sozinho, as camadas de luz ondulam e se deslocam lateralmente, contínuo.

## F-012 · React Bits Pro · Aurora Blur
- link: https://pro.reactbits.dev/docs/components/aurora-blur
- prints: rb-aurora-blur-t01.webp ... -t06.webp
- o que tem: campo de cor borrado combinando verde, roxo e azul, sem bordas definidas, textura de névoa.
- movimento: sozinho, as manchas de cor se deslocam e mudam de tom lentamente, contínuo.

## F-013 · React Bits Pro · Bend Gallery
- link: https://pro.reactbits.dev/docs/components/bend-gallery
- prints: rb-bend-gallery-m01.webp, -m02.webp, -m03.webp
- o que tem: duas fotos em preto e branco (paisagem) empilhadas verticalmente, cada uma inclinada em perspectiva 3D para um lado diferente, fundo preto.
- movimento: ao arrastar, a coluna de imagens dobra e afunda nas bordas como se cada quadro se curvasse sobre uma superfície. Gatilho: arrastar (o site descreve como acionado por rolagem; no preview isolado a inclinação responde ao arraste do mouse).

## F-014 · React Bits Pro · Bending Marquee
- link: https://pro.reactbits.dev/docs/components/bending-marquee
- prints: rb-bending-marquee-t01.webp ... -t06.webp
- o que tem: faixa branca horizontal com texto preto corrido ("built for the web · designed in the open · shipped every week"), levemente curvada, sobre fundo preto.
- movimento: sozinho, o texto rola horizontalmente dentro da faixa curva, contínuo, sem pausa.

## F-015 · React Bits Pro · Black Hole
- link: https://pro.reactbits.dev/docs/components/black-hole
- prints: rb-black-hole-t01.webp ... -t06.webp
- o que tem: faixa horizontal clara com um vazio circular escuro no meio (silhueta tipo eclipse), alto contraste preto e branco. O site descreve também ciclo de cor, não visto nos quadros capturados.
- movimento: sozinho, o círculo escuro se desloca horizontalmente dentro da faixa, contínuo.

## F-016 · React Bits Pro · Blinking Dots
- link: https://pro.reactbits.dev/docs/components/blinking-dots
- prints: rb-blinking-dots-t01.webp ... -t06.webp
- o que tem: campo escuro com pontos minúsculos espalhados em grade, muito discreto.
- movimento: sozinho, os pontos piscam (aparecem e somem) em posições aleatórias da grade, contínuo.

## F-017 · React Bits Pro · Blinking Squares
- link: https://pro.reactbits.dev/docs/components/blinking-squares
- prints: rb-blinking-squares-t01.webp ... -t06.webp
- o que tem: grade de quadradinhos roxo/magenta espalhados sobre fundo preto, tamanho e brilho variados.
- movimento: sozinho, os quadrados piscam em posições diferentes a cada quadro, contínuo.

## F-018 · React Bits Pro · Blur Highlight
- link: https://pro.reactbits.dev/docs/components/blur-highlight
- prints: rb-blur-highlight-t01.webp ... -t06.webp
- o que tem: parágrafo de texto pequeno em fundo escuro, algumas palavras destacadas com fundo roxo/magenta.
- movimento: sozinho, o parágrafo entra com efeito de desfoque (blur-in) e as palavras destacadas acendem em sequência, ciclo curto.

## F-019 · React Bits Pro · Blurred Rays
- link: https://pro.reactbits.dev/docs/components/blurred-rays
- prints: rb-blurred-rays-t01.webp ... -t06.webp
- o que tem: feixes verticais de luz com bloom (brilho estourado), fundo preto, cor muda de roxo para verde entre quadros.
- movimento: sozinho, os feixes tremeluzem (flicker) em intensidade, contínuo.

## F-020 · React Bits Pro · Card Spread
- link: https://pro.reactbits.dev/docs/components/card-spread
- prints: rb-card-spread-m01.webp, -m02.webp, -m03.webp
- o que tem: maço de cartões com fotos (arquitetura/paisagem), empilhados como baralho fechado, fundo preto.
- movimento: ao passar o mouse, os cartões se abrem em leque, cada um girando um pouco mais que o anterior. Gatilho: mouse.

## F-021 · React Bits Pro · Center Flow
- link: https://pro.reactbits.dev/docs/components/center-flow
- prints: rb-center-flow-t01.webp ... -t06.webp
- o que tem: pequeno selo/ícone em forma de losango centralizado, halo roxo pulsante ao redor, pontinhos claros espalhados como estrelas no fundo preto.
- movimento: sozinho, o halo pulsa e flui do centro para fora, contínuo.

## F-022 · React Bits Pro · Chroma Blinds
- link: https://pro.reactbits.dev/docs/components/chroma-blinds
- prints: rb-chroma-blinds-t01.webp ... -t06.webp
- o que tem: listras diagonais em degradê neon (azul para magenta), como persiana ou cortina de luz, fundo preto.
- movimento: as listras se deslocam sozinhas mesmo sem interação; o site descreve que também se curvam em direção ao cursor.

## F-023 · React Bits Pro · Chroma Card
- link: https://pro.reactbits.dev/docs/components/chroma-card
- prints: rb-chroma-card-m01.webp, -m02.webp, -m03.webp
- o que tem: cartão retrato com foto de pessoa tocando instrumento, iluminação quente pontual, fundo preto.
- movimento: ao passar o mouse, a imagem ganha uma franja de cor (separação cromática, tipo vazamento vermelho/ciano) que se desloca. Gatilho: mouse.

## F-024 · React Bits Pro · Chroma Waves
- link: https://pro.reactbits.dev/docs/components/chroma-waves
- prints: rb-chroma-waves-t01.webp ... -t06.webp
- o que tem: textura fluida preto e branco, como tinta ou mármore em movimento, sem cor, bordas orgânicas.
- movimento: sozinho, o padrão de ruído flui e se retorce, contínuo.

## F-025 · React Bits Pro · Circle Gallery
- link: https://pro.reactbits.dev/docs/components/circle-gallery
- prints: rb-circle-gallery-t01.webp ... -t06.webp
- o que tem: uma foto (árvore/paisagem) emoldurada que se fragmenta em várias miniaturas menores da mesma galeria de fotos, formando um aglomerado. Fundo preto.
- movimento: sozinho no preview (o site descreve como carrossel arrastável com inércia e 3D), a imagem única se espalha em cluster de miniaturas e volta a agrupar.

## F-026 · React Bits Pro · Circle Stack
- link: https://pro.reactbits.dev/docs/components/circle-stack
- prints: rb-circle-stack-m01.webp, -m02.webp, -m03.webp
- o que tem: discos circulares empilhados e inclinados em perspectiva 3D, degradê de cinza para azul, fundo preto.
- movimento: ao arrastar, a pilha gira revelando o próximo disco, textura lisa e brilhante como CD ou moeda. Gatilho: arrastar.

## F-027 · React Bits Pro · Circles
- link: https://pro.reactbits.dev/docs/components/circles
- prints: rb-circles-t01.webp ... -t06.webp
- o que tem: dezenas de miniaturas circulares (fotos de rosto/avatar) espalhadas pelo quadro preto, tamanhos variados, como uma constelação.
- movimento: sozinho, os círculos orbitam e trocam de posição lentamente, contínuo.

## F-028 · React Bits Pro · Click Stack
- link: https://pro.reactbits.dev/docs/components/click-stack
- prints: rb-click-stack-c01.webp, -c02.webp
- o que tem: cartão escuro pequeno com número grande centralizado ("01", "02"), cantos levemente dobrados como página, fundo preto.
- movimento: ao clicar, o cartão da frente sai e revela o próximo número da pilha. Gatilho: clique.

## F-029 · React Bits Pro · Color Loops
- link: https://pro.reactbits.dev/docs/components/color-loops
- prints: rb-color-loops-t01.webp ... -t06.webp
- o que tem: arcos concêntricos em degradê magenta para roxo e azul, como túnel ou ondas radiais, fundo preto.
- movimento: sozinho, os arcos se expandem a partir do centro, contínuo, sensação de profundidade.

## F-030 · React Bits Pro · Comparison Slider
- link: https://pro.reactbits.dev/docs/components/comparison-slider
- prints: rb-comparison-slider-t01.webp ... -t06.webp
- o que tem: foto retrato dividida ao meio por uma linha vertical, um lado em preto e branco estourado (negativo), outro lado normal colorido.
- movimento: sozinho no preview, a linha divisória varre a imagem da esquerda para a direita (o site também permite arrastar ou usar hover manualmente).

## F-031 · React Bits Pro · Credit Card
- link: https://pro.reactbits.dev/docs/components/credit-card
- prints: rb-credit-card-m01.webp, -m02.webp, -m03.webp
- o que tem: cartão de crédito branco estilizado, número mascarado, chip, fundo preto.
- movimento: ao mover o mouse, o cartão inclina em 3D seguindo o cursor (parallax tilt). Gatilho: mouse.

## F-032 · React Bits Pro · Cursor Wave
- link: https://pro.reactbits.dev/docs/components/cursor-wave
- prints: rb-cursor-wave-m01.webp, -m02.webp, -m03.webp
- o que tem: grade fina de pontinhos sobre fundo preto, quase invisível em repouso.
- movimento: ao mover o mouse, os pontos próximos acendem em laranja e azul, formando uma ondulação que segue o cursor. Gatilho: mouse (e clique, segundo o site).

## F-033 · React Bits Pro · Custom Cursor
- link: https://pro.reactbits.dev/docs/components/custom-cursor
- prints: rb-custom-cursor-m01.webp, -m02.webp, -m03.webp
- o que tem: três rótulos de texto pequenos em linha (tipo menu), fundo preto, o cursor vira uma caixa com contorno fino.
- movimento: ao passar o mouse sobre cada rótulo, a caixa do cursor se molda (morph) ao tamanho do item e encaixa nele. Gatilho: mouse.

## F-034 · React Bits Pro · Depth Card
- link: https://pro.reactbits.dev/docs/components/depth-card
- prints: rb-depth-card-m01.webp, -m02.webp, -m03.webp
- o que tem: três cartões de foto (montanha, oceano, floresta) lado a lado, cada um com legenda, camadas com profundidade visível (primeiro plano e fundo separados).
- movimento: ao mover o mouse, as camadas de cada cartão se deslocam em velocidades diferentes (parallax), dando sensação de profundidade. Gatilho: mouse.

## F-035 · React Bits Pro · Depth Image
- link: https://pro.reactbits.dev/docs/components/depth-image
- prints: rb-depth-image-t01.webp ... -t06.webp
- o que tem: foto preto e branco de uma escultura clássica (semelhante ao Davi de Michelangelo), textura de pedra, composição dramática.
- movimento: sozinho, uma luz rasante percorre a superfície da imagem criando sombras que dão relevo 3D a uma foto originalmente plana. Contínuo.

## F-036 · React Bits Pro · Device
- link: https://pro.reactbits.dev/docs/components/device
- prints: rb-device-m01.webp, -m02.webp, -m03.webp
- o que tem: mockup de celular desenhado em CSS (moldura prateada), tela com ícone de seta/degradê, fundo preto.
- movimento: ao passar o mouse, o aparelho inclina levemente em 3D. Gatilho: mouse.

## F-037 · React Bits Pro · Dither Cursor
- link: https://pro.reactbits.dev/docs/components/dither-cursor
- prints: rb-dither-cursor-m01.webp, -m02.webp, -m03.webp
- o que tem: fundo preto, rótulo "MOVE CURSOR" centralizado, mancha rosa/magenta com textura pontilhada (dithering) que acompanha o cursor.
- movimento: ao mover o mouse, a mancha pontilhada segue o cursor deixando um rastro pixelado. Gatilho: mouse.

## F-038 · React Bits Pro · Dither Wave
- link: https://pro.reactbits.dev/docs/components/dither-wave
- prints: rb-dither-wave-t01.webp ... -t06.webp
- o que tem: padrão de onda líquida em azul/roxo com textura pontilhada (meio-tom/dithering), como mármore digital, fundo escuro.
- movimento: sozinho, as ondas fluem e se retorcem continuamente.

## F-039 · React Bits Pro · Dolly Gallery
- link: https://pro.reactbits.dev/docs/components/dolly-gallery
- prints: rb-dolly-gallery-m01.webp, -m02.webp, -m03.webp
- o que tem: fotos de paisagem em preto e branco empilhadas em profundidade (uma grande em primeiro plano, outra pequena ao fundo), fundo preto.
- movimento: a câmera avança pela pilha de imagens, cada uma surgindo do fundo e passando pela lente. O site descreve como acionado por rolagem; no preview isolado reagiu ao mouse.

## F-040 · React Bits Pro · Dot Shift
- link: https://pro.reactbits.dev/docs/components/dot-shift
- prints: rb-dot-shift-t01.webp ... -t06.webp
- o que tem: pontinhos magenta formando o contorno de um círculo sobre fundo preto.
- movimento: sozinho, os pontos se deslocam e o círculo respira (muda de raio), contínuo.

## F-041 · React Bits Pro · Draggable Grid
- link: https://pro.reactbits.dev/docs/components/draggable-grid
- prints: rb-draggable-grid-t01.webp ... -t06.webp
- o que tem: grade repetida de ícones ilustrados coloridos (bichos de estimação, estilo flat), fundo preto, várias fileiras.
- movimento: sozinho no preview, a grade desliza lateralmente (o site descreve como arrastável manualmente, com inércia).

## F-042 · React Bits Pro · Eclipse
- link: https://pro.reactbits.dev/docs/components/eclipse
- prints: rb-eclipse-t01.webp ... -t06.webp
- o que tem: anel de cor espectral (vermelho, roxo, azul, verde, amarelo em sequência ao redor do círculo) com um disco preto no centro, como corona de eclipse solar.
- movimento: sozinho, as cores do anel giram e mudam de posição, contínuo.

## F-043 · React Bits Pro · Falling Rays
- link: https://pro.reactbits.dev/docs/components/falling-rays
- prints: rb-falling-rays-t01.webp ... -t06.webp
- o que tem: raios finos de luz roxa/magenta convergindo de um ponto no topo, como chuva de luz ou fogos, fundo preto.
- movimento: sozinho, os raios caem e se movem em leque, contínuo.

## F-044 · React Bits Pro · Flame Paths
- link: https://pro.reactbits.dev/docs/components/flame-paths
- prints: rb-flame-paths-t01.webp ... -t06.webp
- o que tem: picos irregulares tipo chama ou silhueta de montanha, degradê de rosa para vermelho e magenta, fundo preto.
- movimento: sozinho, os picos oscilam de altura como labaredas, contínuo.

## F-045 · React Bits Pro · Fog Sphere
- link: https://pro.reactbits.dev/docs/components/fog-sphere
- prints: rb-fog-sphere-t01.webp ... -t06.webp
- o que tem: camadas de linhas brilhantes rosa/magenta empilhadas formando uma esfera ou barril de luz, fundo preto, efeito de neblina luminosa.
- movimento: sozinho, as camadas giram em direções opostas, contínuo.

## F-046 · React Bits Pro · Frame Border
- link: https://pro.reactbits.dev/docs/components/frame-border
- prints: rb-frame-border-t01.webp ... -t06.webp
- o que tem: moldura retangular vazada no centro, borda com brilho rosa suave e textura granulada (ruído), fundo escuro.
- movimento: sozinho, o ruído e o brilho da borda tremeluzem, contínuo.

## F-047 · React Bits Pro · Frame Scrub
- link: https://pro.reactbits.dev/docs/components/frame-scrub
- prints: rb-frame-scrub-01.webp (só 1 quadro: o gatilho é rolagem de página, que não existe dentro do preview isolado)
- o que tem: forma 3D branca e lisa, um nó ou laço torcido (tipo fita de Möbius), acabamento fosco, fundo escuro.
- movimento: não capturado. O site descreve que a rolagem da página comanda uma sequência de quadros em canvas (o objeto gira conforme se rola); no preview isolado, sem página para rolar, ficou parado.

## F-048 · React Bits Pro · Glass Cursor
- link: https://pro.reactbits.dev/docs/components/glass-cursor
- prints: rb-glass-cursor-m01.webp, -m02.webp, -m03.webp
- o que tem: foto de galho de flor de cerejeira contra céu azul, cores claras e suaves.
- movimento: ao mover o mouse, um traço branco e translúcido (como vidro com refração e desfoque) segue o cursor sobre a foto. Gatilho: mouse.

## F-049 · React Bits Pro · Glass Flow
- link: https://pro.reactbits.dev/docs/components/glass-flow
- prints: rb-glass-flow-t01.webp ... -t06.webp
- o que tem: textura líquida em escala de cinza, formas arredondadas que lembram vidro ou mercúrio derretido, sem cor.
- movimento: sozinho, as formas fluem e se fundem umas nas outras, contínuo.

## F-050 · React Bits Pro · Glass Reveal
- link: https://pro.reactbits.dev/docs/components/glass-reveal
- prints: rb-glass-reveal-t01.webp ... -t06.webp
- o que tem: fundo texturizado em preto e branco (pedra ou papel amassado) com uma lente circular no meio revelando uma foto colorida de girassóis por baixo.
- movimento: sozinho no preview (o site descreve como lente que segue o ponteiro), a lente muda de formato (quadrado, círculo, blob, portal ondulado) revelando a imagem colorida por baixo.

## F-051 · React Bits Pro · Glass Tiles
- link: https://pro.reactbits.dev/docs/components/glass-tiles
- prints: rb-glass-tiles-t01.webp ... -t06.webp
- o que tem: grade de azulejos roxo/violeta com acabamento vítreo e relevo (parecem estufados, com brilho especular), fundo escuro.
- movimento: sozinho, o brilho em cada azulejo pulsa e se desloca pela grade, contínuo.

## F-052 · React Bits Pro · Glitch Text
- link: https://pro.reactbits.dev/docs/components/glitch-text
- prints: rb-glitch-text-m01.webp, -m02.webp, -m03.webp
- o que tem: frase "Glitchy on hover." em branco, fundo preto, tipografia simples sem serifa.
- movimento: ao passar o mouse, as letras próximas ao cursor se despedaçam e ganham cores separadas (vazamento ciano/magenta, tipo falha de sinal de TV), o resto do texto permanece firme. Gatilho: mouse.

## F-053 · React Bits Pro · Glitter Warp
- link: https://pro.reactbits.dev/docs/components/glitter-warp
- prints: rb-glitter-warp-t01.webp ... -t06.webp
- o que tem: fundo quase todo preto com partículas minúsculas e esparsas, brilho muito discreto.
- movimento: sozinho, as partículas se deslocam como um túnel estelar (warp), sutil no tamanho do preview.

## F-054 · React Bits Pro · Globe
- link: https://pro.reactbits.dev/docs/components/globe
- prints: rb-globe-t01.webp ... -t06.webp
- o que tem: globo 3D em wireframe (linhas finas brancas sobre esfera escura), baixo contraste, fundo preto.
- movimento: sozinho, o globo gira devagar, contínuo. O site também descreve arcos animados e marcadores de local, não visíveis com clareza no tamanho do preview.

## F-055 · React Bits Pro · Glowing Ridges
- link: https://pro.reactbits.dev/docs/components/glowing-ridges
- prints: rb-glowing-ridges-t01.webp ... -t06.webp
- o que tem: linhas curvas em leque, brilho iridescente que passa de roxo a azul e rosa, como luz raspando sobre seda dobrada, fundo escuro.
- movimento: sozinho, o brilho percorre as cristas das linhas, contínuo.

## F-056 · React Bits Pro · Glowing Wave
- link: https://pro.reactbits.dev/docs/components/glowing-wave
- prints: rb-glowing-wave-t01.webp ... -t06.webp
- o que tem: uma única onda luminosa azul/branca, contorno suave e desfocado, fundo preto.
- movimento: sozinho, a onda se desloca lentamente pela tela, contínuo.

## F-057 · React Bits Pro · Glue Dots
- link: https://pro.reactbits.dev/docs/components/glue-dots
- prints: rb-glue-dots-m01.webp, -m02.webp, -m03.webp
- o que tem: grade regular de pontos brancos pequenos sobre fundo preto.
- movimento: ao passar o mouse, os pontos perto do cursor esticam e grudam uns nos outros (efeito metaball), formando gotas alongadas. Gatilho: mouse.

## F-058 · React Bits Pro · Gradient Bars
- link: https://pro.reactbits.dev/docs/components/gradient-bars
- prints: rb-gradient-bars-t01.webp ... -t06.webp
- o que tem: barras verticais em tons de cinza, como um equalizador ou código de barras, alturas e brilho variados.
- movimento: sozinho, as barras mudam de altura e brilho em sequência, contínuo.

## F-059 · React Bits Pro · Gradient Blob
- link: https://pro.reactbits.dev/docs/components/gradient-blob
- prints: rb-gradient-blob-t01.webp ... -t06.webp
- o que tem: esfera 3D dividida em azul e branco/rosa, fundo em degradê lilás suave, sombreamento macio.
- movimento: sozinho, a esfera muda de forma (morphing) e a divisão de cor gira, contínuo. O site descreve também interação com o cursor.

## F-060 · React Bits Pro · Gradient Carousel
- link: https://pro.reactbits.dev/docs/components/gradient-carousel
- prints: rb-gradient-carousel-t01.webp ... -t06.webp
- o que tem: fileira de cartões coloridos (laranja liso, arco-íris diagonal, cinza com diagonal escura, azul), como um carrossel 3D, fundo escuro.
- movimento: sozinho, os cartões deslizam lateralmente trocando de posição, contínuo.

## F-061 · React Bits Pro · Grain Wave
- link: https://pro.reactbits.dev/docs/components/grain-wave
- prints: rb-grain-wave-t01.webp ... -t06.webp
- o que tem: forma de onda ou fita horizontal em vermelho, azul e branco, textura granulada (ruído visível), fundo escuro.
- movimento: sozinho, a onda sobe e desce mudando de formato, contínuo.

## F-062 · React Bits Pro · Grid Rise
- link: https://pro.reactbits.dev/docs/components/grid-rise
- prints: rb-grid-rise-t01.webp ... -t06.webp
- o que tem: cúpula ou elevação feita de blocos/telhas roxas e brilhantes, aspecto 3D raymarched, fundo preto.
- movimento: sozinho, os blocos sobem e ondulam formando a elevação, contínuo. O site descreve reação ao cursor, não confirmada no teste.

## F-063 · React Bits Pro · Halftone Vortex
- link: https://pro.reactbits.dev/docs/components/halftone-vortex
- prints: rb-halftone-vortex-t01.webp ... -t06.webp
- o que tem: espiral de pontos em meio-tom rosa/magenta sobre fundo preto, como um redemoinho ou cata-vento.
- movimento: sozinho, a espiral gira continuamente. O site descreve reação ao cursor, não confirmada no teste.

## F-064 · React Bits Pro · Halftone Wave
- link: https://pro.reactbits.dev/docs/components/halftone-wave
- prints: rb-halftone-wave-t01.webp ... -t06.webp
- o que tem: padrão de pontos em meio-tom formando nuvens brancas sobre fundo preto, como estática ou nuvem de pontilhismo.
- movimento: sozinho, as nuvens de pontos se deslocam e mudam de densidade, contínuo.

## F-065 · React Bits Pro · Hover Preview
- link: https://pro.reactbits.dev/docs/components/hover-preview
- prints: rb-hover-preview-01.webp (não capturado o hover: são palavras específicas dentro da frase que abrem a prévia, e o teste automático não acertou nenhuma)
- o que tem: frase pequena centralizada "Built with React, TypeScript, and brought to life with Motion.", algumas palavras destacadas em rosa/magenta, fundo preto.
- movimento: segundo o site, ao passar o mouse sobre as palavras destacadas aparece uma prévia de imagem. Não confirmado visualmente nesta coleta.

## F-066 · React Bits Pro · Infinite Gallery
- link: https://pro.reactbits.dev/docs/components/infinite-gallery
- prints: rb-infinite-gallery-t01.webp ... -t06.webp
- o que tem: várias fotos pequenas (paisagens) espalhadas em profundidades e tamanhos diferentes, elementos circulares verde-limão entre elas, fundo preto.
- movimento: sozinho no preview, as fotos se deslocam em paralaxe (algumas mais rápido que outras); o site descreve rolagem 3D infinita com arraste.

## F-067 · React Bits Pro · Inverted Dome
- link: https://pro.reactbits.dev/docs/components/inverted-dome
- prints: rb-inverted-dome-t01.webp ... -t06.webp
- o que tem: grade de fotos em preto e branco (texturas variadas) curvada como o interior de uma cúpula, esticando nas bordas, fundo escuro.
- movimento: sozinho, a grade gira e as células se esticam para as bordas como se a câmera estivesse dentro de uma esfera. O site descreve como arrastável.

## F-068 · React Bits Pro · Landscape
- link: https://pro.reactbits.dev/docs/components/landscape
- prints: rb-landscape-t01.webp ... -t06.webp
- o que tem: paisagem procedural em tons de roxo, como dunas ou montanhas onduladas vistas de longe, horizonte baixo, fundo escuro.
- movimento: sozinho, o terreno rola em direção ao horizonte continuamente.

## F-069 · React Bits Pro · Lenticular Carousel
- link: https://pro.reactbits.dev/docs/components/lenticular-carousel
- prints: rb-lenticular-carousel-m01.webp, -m02.webp, -m03.webp
- o que tem: fileira de cartões com fotos de arquitetura (prédios), um cartão central maior em destaque, fundo preto.
- movimento: ao passar o mouse, os cartões viram como uma impressão lenticular, trocando de imagem. Gatilho: mouse.

## F-070 · React Bits Pro · Light Droplets
- link: https://pro.reactbits.dev/docs/components/light-droplets
- prints: rb-light-droplets-t01.webp ... -t06.webp
- o que tem: traços finos de luz roxa caindo na diagonal, como chuva ou faíscas, fundo preto.
- movimento: sozinho, os traços caem e giram levemente, contínuo.

## F-071 · React Bits Pro · Lightspeed
- link: https://pro.reactbits.dev/docs/components/lightspeed
- prints: rb-lightspeed-t01.webp ... -t06.webp
- o que tem: traços de luz roxa/branca convergindo para um ponto de fuga central, como viagem espacial (hyperspace), fundo preto.
- movimento: sozinho, os traços disparam do centro para fora continuamente. O site descreve também reação a clique.

## F-072 · React Bits Pro · Liquid Ascii
- link: https://pro.reactbits.dev/docs/components/liquid-ascii
- prints: rb-liquid-ascii-t01.webp ... -t06.webp
- o que tem: pontinhos e caracteres cinza claro formando uma massa fluida (como uma gota ou nuvem), fundo preto.
- movimento: sozinho, a massa de pontos flui e muda de contorno como líquido, contínuo.

## F-073 · React Bits Pro · Liquid Bars
- link: https://pro.reactbits.dev/docs/components/liquid-bars
- prints: rb-liquid-bars-t01.webp ... -t06.webp
- o que tem: colunas verticais preenchidas por líquido roxo/magenta ondulante, como provetas ou barras de equalizador líquidas, fundo escuro.
- movimento: sozinho, o nível e a forma do líquido em cada barra ondulam, contínuo.

## F-074 · React Bits Pro · Liquid Lines
- link: https://pro.reactbits.dev/docs/components/liquid-lines
- prints: rb-liquid-lines-t01.webp ... -t06.webp
- o que tem: linhas diagonais finas e brilhantes (brancas) sobre fundo preto, espaçamento irregular.
- movimento: sozinho, as linhas fluem e mudam de espessura/brilho, contínuo.

## F-075 · React Bits Pro · Liquid Swap
- link: https://pro.reactbits.dev/docs/components/liquid-swap
- prints: rb-liquid-swap-m01.webp, -m02.webp, -m03.webp
- o que tem: foto preto e branco de fachada de prédio vista de baixo, perspectiva forte.
- movimento: ao passar o mouse, uma bolha de vidro líquido percorre a imagem trocando para outra foto por dentro da bolha. Gatilho: mouse.

## F-076 · React Bits Pro · Long Exposure
- link: https://pro.reactbits.dev/docs/components/long-exposure
- prints: rb-long-exposure-t01.webp ... -t06.webp
- o que tem: rastros de luz azul brilhante ao longo de uma estrada curva em perspectiva, como foto noturna de longa exposição, fundo preto.
- movimento: sozinho, os rastros de luz avançam pela curva da estrada, contínuo.

## F-077 · React Bits Pro · Magic Transform
- link: https://pro.reactbits.dev/docs/components/magic-transform
- prints: rb-magic-transform-t01.webp ... -t06.webp
- o que tem: dois retângulos verticais (documento em branco e uma barra roxa) lado a lado, fundo escuro, composição minimalista.
- movimento: sozinho, pontinhos coloridos (vermelho, azul, laranja) voam do documento em direção a uma pilha de resultados, como partículas de dados se organizando. Contínuo.

## F-078 · React Bits Pro · Metallic Swirl
- link: https://pro.reactbits.dev/docs/components/metallic-swirl
- prints: rb-metallic-swirl-t01.webp ... -t06.webp
- o que tem: superfície metálica líquida em preto e branco, ondulada como prata derretida ou seda molhada, alto contraste, sem cor.
- movimento: sozinho, o padrão de ondas escorre e se retorce continuamente.

## F-079 · React Bits Pro · Minimal Ripple
- link: https://pro.reactbits.dev/docs/components/minimal-ripple
- prints: rb-minimal-ripple-t01.webp ... -t06.webp
- o que tem: círculos concêntricos finos em ciano, linha fina, fundo preto, composição centrada e minimalista.
- movimento: sozinho, os círculos se expandem do centro para fora como ondas na água, contínuo, desaparecendo nas bordas.

## F-080 · React Bits Pro · Modal Cards
- link: https://pro.reactbits.dev/docs/components/modal-cards
- prints: rb-modal-cards-m01.webp, -m02.webp, -m03.webp
- o que tem: três cartões de foto de paisagem (montanha, ondas, aurora) lado a lado com legenda, fundo escuro.
- movimento: ao passar o mouse, os cartões trocam de tamanho e destaque; ao clicar (segundo o site) abrem em modal cheio. Gatilho: mouse.

## F-081 · React Bits Pro · Mosaic
- link: https://pro.reactbits.dev/docs/components/mosaic
- prints: rb-mosaic-t01.webp ... -t06.webp
- o que tem: textura em preto e branco com listras verticais onduladas, como cortina metálica ou tela CRT, alto contraste.
- movimento: sozinho, as listras ondulam e se deslocam, contínuo.

## F-082 · React Bits Pro · Mosaic Waves
- link: https://pro.reactbits.dev/docs/components/mosaic-waves
- prints: rb-mosaic-waves-t01.webp ... -t06.webp
- o que tem: mosaico de blocos em tons de azul escuro, como uma colcha de retalhos ou camuflagem, fundo escuro.
- movimento: sozinho, os blocos mudam de tom em ondas que atravessam o mosaico, contínuo.

## F-083 · React Bits Pro · Neon Reveal
- link: https://pro.reactbits.dev/docs/components/neon-reveal
- prints: rb-neon-reveal-t01.webp ... -t06.webp
- o que tem: texto grande "Neon Reveal" em negrito, faixa de luz roxa/magenta com brilho realista de neon varrendo o fundo escuro, barra de controles de código visível acima (própria do preview).
- movimento: sozinho, a faixa de luz varre horizontalmente revelando o texto com brilho, contínuo.

## F-084 · React Bits Pro · Neural Flash
- link: https://pro.reactbits.dev/docs/components/neural-flash
- prints: rb-neural-flash-t01.webp ... -t06.webp
- o que tem: filamentos finos e brilhantes azul-escuro formando um risco/faísca sobre fundo preto, muito discreto.
- movimento: sozinho, os filamentos disparam como um relâmpago e se apagam, contínuo em ciclo.

## F-085 · React Bits Pro · Neural Float
- link: https://pro.reactbits.dev/docs/components/neural-float
- prints: rb-neural-float-t01.webp ... -t06.webp
- o que tem: filamentos finos rosa/magenta se espalhando a partir do centro como uma explosão suave ou flor, fundo preto.
- movimento: sozinho, os filamentos flutuam e se reorganizam devagar, contínuo.

## F-086 · React Bits Pro · Neural Tunnel
- link: https://pro.reactbits.dev/docs/components/neural-tunnel
- prints: rb-neural-tunnel-t01.webp ... -t06.webp
- o que tem: linhas magenta convergindo para um ponto de fuga central, como um túnel ou estrela, fundo preto.
- movimento: sozinho, as linhas pulsam e o túnel parece avançar continuamente.

## F-087 · React Bits Pro · Page Flip
- link: https://pro.reactbits.dev/docs/components/page-flip
- prints: rb-page-flip-m01.webp, -m02.webp, -m03.webp
- o que tem: página branca lisa em perspectiva, dobrando como papel, fundo preto.
- movimento: ao arrastar, a página vira como as folhas de um livro, revelando a próxima. Gatilho: mouse (arrastar).

## F-088 · React Bits Pro · Parallax Cards
- link: https://pro.reactbits.dev/docs/components/parallax-cards
- prints: rb-parallax-cards-m01.webp, -m02.webp, -m03.webp
- o que tem: várias fotos de paisagem/montanha em preto e branco, espalhadas em camadas de tamanhos diferentes, fundo preto.
- movimento: ao mover o mouse, as camadas se deslocam em velocidades diferentes (parallax 3D). Gatilho: mouse.

## F-089 · React Bits Pro · Parallax Carousel
- link: https://pro.reactbits.dev/docs/components/parallax-carousel
- prints: rb-parallax-carousel-t01.webp ... -t06.webp
- o que tem: três fotos coloridas lado a lado (montanha ao entardecer, retrato, mesa de som/estúdio), bordas retas, fundo preto.
- movimento: sozinho no preview, as fotos deslizam lateralmente com sensação de parallax; o site descreve como arrastável.

## F-090 · React Bits Pro · Parallax Pills
- link: https://pro.reactbits.dev/docs/components/parallax-pills
- prints: rb-parallax-pills-t01.webp ... -t06.webp
- o que tem: pequenas pílulas/etiquetas brancas com texto curto (nomes de componentes), espalhadas em posições diferentes, fundo preto.
- movimento: sozinho, as pílulas flutuam e trocam de posição como se boiassem, contínuo. O site descreve reação ao cursor.

## F-091 · React Bits Pro · Particle Image
- link: https://pro.reactbits.dev/docs/components/particle-image
- prints: rb-particle-image-t01.webp ... -t06.webp
- o que tem: foto preto e branco de escultura clássica (mesma referência do Depth Image), composta por pequenos pontos/partículas.
- movimento: sozinho, a imagem se dissolve em partículas que giram e se reagrupam de volta na forma original, contínuo.

## F-092 · React Bits Pro · Particle Morph
- link: https://pro.reactbits.dev/docs/components/particle-morph
- prints: rb-particle-morph-t01.webp ... -t06.webp
- o que tem: cubo cinza granulado (textura de partículas densas), fundo preto, luz suave definindo as faces.
- movimento: sozinho, a nuvem de partículas mantém a forma de cubo enquanto gira; o site descreve transição entre várias formas (logos, silhuetas).

## F-093 · React Bits Pro · Particle Text
- link: https://pro.reactbits.dev/docs/components/particle-text
- prints: rb-particle-text-m01.webp, -m02.webp, -m03.webp
- o que tem: palavra "brilliant." grande em cinza claro, fundo preto, tipografia sem serifa.
- movimento: ao passar o mouse, um círculo de partículas se forma sobre a palavra e distorce as letras próximas. Gatilho: mouse.

## F-094 · React Bits Pro · Perspective Grid
- link: https://pro.reactbits.dev/docs/components/perspective-grid
- prints: rb-perspective-grid-t01.webp ... -t06.webp
- o que tem: grade 3D em perspectiva (linhas roxas finas) se afastando até o horizonte, fundo preto, como um piso infinito.
- movimento: sozinho, a grade se move em direção à câmera continuamente, sensação de avanço.

## F-095 · React Bits Pro · Pixel Magnet
- link: https://pro.reactbits.dev/docs/components/pixel-magnet
- prints: rb-pixel-magnet-m01.webp, -m02.webp, -m03.webp
- o que tem: fundo preto liso, muito discreto em repouso.
- movimento: ao mover o mouse, pixels próximos são atraídos e formam um pequeno rastro de pontos brancos, como limalha de ferro num ímã. Gatilho: mouse.

## F-096 · React Bits Pro · Pixel Rain
- link: https://pro.reactbits.dev/docs/components/pixel-rain
- prints: rb-pixel-rain-t01.webp ... -t06.webp
- o que tem: traços verticais finos em magenta caindo sobre fundo preto, como chuva digital (estilo Matrix), pixelizado.
- movimento: sozinho, os traços caem continuamente de cima para baixo.

## F-097 · React Bits Pro · Pixel Reveal
- link: https://pro.reactbits.dev/docs/components/pixel-reveal
- prints: rb-pixel-reveal-t01.webp ... -t06.webp
- o que tem: foto colorida de pessoa remando em lago com montanhas ao fundo, tom acinzentado e frio.
- movimento: sozinho, a imagem se revela através de uma varredura de blocos pixelizados que vão diminuindo até a foto ficar nítida. Contínuo em ciclo.

## F-098 · React Bits Pro · Pixel Sculpt
- link: https://pro.reactbits.dev/docs/components/pixel-sculpt
- prints: rb-pixel-sculpt-m01.webp, -m02.webp, -m03.webp
- o que tem: foto de girassol em close, cores quentes (amarelo/laranja) sobre fundo preto.
- movimento: ao passar o mouse, a imagem (reconstruída em blocos/telhas) ondula em relevo seguindo o ponteiro. Gatilho: mouse.

## F-099 · React Bits Pro · Pixelate Hover
- link: https://pro.reactbits.dev/docs/components/pixelate-hover
- prints: rb-pixelate-hover-t01.webp ... -t06.webp
- o que tem: retrato em preto e branco de uma pessoa, parcialmente pixelizado em blocos grandes.
- movimento: sozinho no preview, a área pixelizada se desloca revelando e escondendo partes nítidas da foto; o site descreve como controlado pelo cursor.

## F-100 · React Bits Pro · Portal
- link: https://pro.reactbits.dev/docs/components/portal
- prints: rb-portal-t01.webp ... -t06.webp
- o que tem: círculo com borda brilhante rosa/magenta, interior com textura de linhas rápidas tipo estática, fundo preto.
- movimento: sozinho, a textura dentro do círculo gira e cintila como um portal, contínuo.

## F-101 · React Bits Pro · Preloader
- link: https://pro.reactbits.dev/docs/components/preloader
- prints: rb-preloader-m01.webp, -m02.webp, -m03.webp
- o que tem: tela cheia roxa/lilás sólida com texto pequeno centralizado "loading your experience.", terceiro quadro mostra barras tipo escada saindo de baixo.
- movimento: a tela de carregamento muda de padrão (texto, depois barras), o site oferece várias variações de estilo. Gatilho: mouse (troca de variante no preview).

## F-102 · React Bits Pro · Radial Liquid
- link: https://pro.reactbits.dev/docs/components/radial-liquid
- prints: rb-radial-liquid-t01.webp ... -t06.webp
- o que tem: ondas concêntricas em preto e branco com distorção, como água ondulando vista de cima, alto contraste.
- movimento: sozinho, as ondas se expandem do centro com distorção líquida, contínuo.

## F-103 · React Bits Pro · Ravine
- link: https://pro.reactbits.dev/docs/components/ravine
- prints: rb-ravine-t01.webp ... -t06.webp
- o que tem: paredes de um canyon monocromático vistas de dentro, em perspectiva de voo, tons de cinza muito escuros.
- movimento: sozinho, a câmera avança pelo canyon continuamente, sombreado pela distância de cada parede.

## F-104 · React Bits Pro · Reel Gallery
- link: https://pro.reactbits.dev/docs/components/reel-gallery
- prints: rb-reel-gallery-t01.webp ... -t06.webp
- o que tem: fileiras de fotos pequenas inclinadas (como rolos de filme ou tiras de negativos), várias imagens de paisagem/viagem, fundo escuro.
- movimento: sozinho no preview, as fileiras deslizam em diagonal; o site descreve como acionado por rolagem.

## F-105 · React Bits Pro · Retro Lines
- link: https://pro.reactbits.dev/docs/components/retro-lines
- prints: rb-retro-lines-t01.webp ... -t06.webp
- o que tem: grade em perspectiva estilo retrô (linhas finas magenta), horizonte baixo, fundo preto, remete a estética synthwave.
- movimento: sozinho, ondas percorrem a grade em direção à câmera, contínuo.

## F-106 · React Bits Pro · Rising Lines
- link: https://pro.reactbits.dev/docs/components/rising-lines
- prints: rb-rising-lines-t01.webp ... -t06.webp
- o que tem: linhas finas verticais tipo laser subindo de baixo, cor magenta, fundo preto, parte inferior mais densa.
- movimento: sozinho, as linhas sobem como feixes de laser ou géiseres de luz, contínuo.

## F-107 · React Bits Pro · Rising Particles
- link: https://pro.reactbits.dev/docs/components/rising-particles
- prints: rb-rising-particles-t01.webp ... -t06.webp
- o que tem: partículas pequenas roxas brilhando sobre fundo preto, como vaga-lumes ou brasas.
- movimento: sozinho, as partículas sobem lentamente e piscam, contínuo.

## F-108 · React Bits Pro · Rolling Blinds
- link: https://pro.reactbits.dev/docs/components/rolling-blinds
- prints: rb-rolling-blinds-t01.webp ... -t06.webp
- o que tem: feixe de luz branca em leque, como cortina ou persiana se abrindo, fundo preto, alto contraste.
- movimento: sozinho, as faixas de luz abrem e fecham como persiana, contínuo.

## F-109 · React Bits Pro · Rotating Cards
- link: https://pro.reactbits.dev/docs/components/rotating-cards
- prints: rb-rotating-cards-t01.webp ... -t06.webp
- o que tem: cartões numerados (1 a 7) em texturas de pedra/mármore escuro, dispostos em leque circular, fundo preto.
- movimento: sozinho, os cartões giram em carrossel 3D trocando de posição; o site descreve como arrastável.

## F-110 · React Bits Pro · Rotating Stars
- link: https://pro.reactbits.dev/docs/components/rotating-stars
- prints: rb-rotating-stars-t01.webp ... -t06.webp
- o que tem: anéis concêntricos finos em roxo/azul escuro sobre fundo preto, como órbitas.
- movimento: sozinho, os anéis giram em velocidades diferentes, contínuo.

## F-111 · React Bits Pro · Rubber Fluid
- link: https://pro.reactbits.dev/docs/components/rubber-fluid
- prints: rb-rubber-fluid-t01.webp ... -t06.webp
- o que tem: faixas líquidas em magenta vibrante, textura elástica e brilhante como borracha ou seda molhada, fundo escuro.
- movimento: sozinho, as faixas se retorcem e fluem continuamente.

## F-112 · React Bits Pro · Scroll Mask
- link: https://pro.reactbits.dev/docs/components/scroll-mask
- prints: rb-scroll-mask-t01.webp ... -t06.webp
- o que tem: quadro quase todo escuro com um numeral pequeno no canto inferior, sem imagem visível no repouso.
- movimento: não confirmado no preview isolado (mudança mínima entre quadros); o site descreve que a rolagem abre uma máscara revelando uma imagem de seis formas diferentes.

## F-113 · React Bits Pro · Scroll Portal
- link: https://pro.reactbits.dev/docs/components/scroll-portal
- prints: rb-scroll-portal-t01.webp ... -t06.webp
- o que tem: retângulo escuro com moldura fina e as palavras "Arrival" no canto inferior esquerdo, composição minimalista.
- movimento: não confirmado no preview isolado; o site descreve que a rolagem leva a câmera por molduras aninhadas, cada uma revelando a próxima cena.

## F-114 · React Bits Pro · Scroll Stack
- link: https://pro.reactbits.dev/docs/components/scroll-stack
- prints: rb-scroll-stack-m01.webp, -m02.webp, -m03.webp
- o que tem: cartão cinza claro com o texto "Read the site before it exists" e parágrafo abaixo, forma geométrica de fundo (like origami dobrado).
- movimento: no preview reagiu ao mouse; o site descreve cartões fixos que empilham, viram e somem conforme a página rola.

## F-115 · React Bits Pro · Shader Card
- link: https://pro.reactbits.dev/docs/components/shader-card
- prints: rb-shader-card-t01.webp ... -t06.webp
- o que tem: cartão com título "Shader Card", fundo do cartão em gradiente roxo animado tipo nebulosa, botão abaixo.
- movimento: sozinho, o gradiente de fundo do cartão flui e muda de forma, contínuo.

## F-116 · React Bits Pro · Shader Reveal
- link: https://pro.reactbits.dev/docs/components/shader-reveal
- prints: rb-shader-reveal-t01.webp ... -t06.webp
- o que tem: foto de pessoa com elmo/coroa prateada estilizada e cabelo vermelho, fundo claro, composição de moda/editorial.
- movimento: sozinho, a imagem se revela com distorção líquida (o site descreve como interativo, ligado ao cursor).

## F-117 · React Bits Pro · Shader Waves
- link: https://pro.reactbits.dev/docs/components/shader-waves
- prints: rb-shader-waves-t01.webp ... -t06.webp
- o que tem: ondas líquidas roxas com redemoinhos, textura de tinta se misturando, fundo saturado sem áreas pretas.
- movimento: sozinho, os redemoinhos giram e se misturam continuamente.

## F-118 · React Bits Pro · Shadow Bars
- link: https://pro.reactbits.dev/docs/components/shadow-bars
- prints: rb-shadow-bars-t01.webp ... -t06.webp
- o que tem: barras verticais finas de luz rosa/magenta em posições irregulares, fundo preto, como um equalizador esparso.
- movimento: sozinho, as barras aparecem e crescem em posições diferentes, contínuo.

## F-119 · React Bits Pro · Silk Waves
- link: https://pro.reactbits.dev/docs/components/silk-waves
- prints: rb-silk-waves-t01.webp ... -t06.webp
- o que tem: faixas curvas em azul vibrante, como seda ou fumaça densa, fundo preto, degradê suave dentro do próprio azul.
- movimento: sozinho, as faixas fluem na diagonal, contínuo.

## F-120 · React Bits Pro · Simple Graph
- link: https://pro.reactbits.dev/docs/components/simple-graph
- prints: rb-simple-graph-t01.webp ... -t06.webp
- o que tem: linha de gráfico fina com pontos, fundo preto, estilo painel de dados, cor neutra clara.
- movimento: sozinho, a linha do gráfico se redesenha com novos valores, contínuo.

## F-121 · React Bits Pro · Simple Swirl
- link: https://pro.reactbits.dev/docs/components/simple-swirl
- prints: rb-simple-swirl-t01.webp ... -t06.webp
- o que tem: mancha circular azul/roxa desfocada, brilho suave, fundo preto, forma simples sem detalhe interno.
- movimento: sozinho, a mancha gira e pulsa levemente, contínuo.

## F-122 · React Bits Pro · Skewed Carousel
- link: https://pro.reactbits.dev/docs/components/skewed-carousel
- prints: rb-skewed-carousel-t01.webp ... -t06.webp
- o que tem: fileira de cartões de foto (arquitetura) inclinados, alguns maiores e nítidos, outros menores nas laterais, fundo escuro.
- movimento: sozinho, mas em ciclo lento (a mudança só apareceu depois de espera maior), os cartões deslizam e trocam de escala e inclinação conforme passam pelo centro.

## F-123 · React Bits Pro · Smooth Cursor
- link: https://pro.reactbits.dev/docs/components/smooth-cursor
- prints: rb-smooth-cursor-m01.webp, -m02.webp, -m03.webp
- o que tem: fundo preto, texto pequeno "Move your cursor" centralizado, traço branco fino.
- movimento: ao mover o mouse, um traço branco segue o cursor com atraso elástico (física de mola), deixando rastro curvo. Gatilho: mouse.

## F-124 · React Bits Pro · Specter Orb
- link: https://pro.reactbits.dev/docs/components/specter-orb
- prints: rb-specter-orb-t01.webp ... -t06.webp
- o que tem: esfera azul brilhante com contorno definido e interior de fumaça/névoa, fundo preto, como um fantasma ou planeta.
- movimento: sozinho, a fumaça dentro da esfera gira e a borda pulsa, contínuo.

## F-125 · React Bits Pro · Spectral Clouds
- link: https://pro.reactbits.dev/docs/components/spectral-clouds
- prints: rb-spectral-clouds-t01.webp ... -t06.webp
- o que tem: nuvens volumétricas tingidas de vermelho e azul, textura densa e orgânica, fundo saturado.
- movimento: sozinho, as nuvens se movem e mudam de tom lentamente, contínuo.

## F-126 · React Bits Pro · Speeding Text
- link: https://pro.reactbits.dev/docs/components/speeding-text
- prints: rb-speeding-text-t01.webp ... -t06.webp
- o que tem: número grande em itálico branco (ex.: "18.592"), fundo preto, tipografia condensada e pesada.
- movimento: sozinho, o número muda e borra horizontalmente como se estivesse acelerando (efeito de estica/smear), contínuo.

## F-127 · React Bits Pro · Square Matrix
- link: https://pro.reactbits.dev/docs/components/square-matrix
- prints: rb-square-matrix-t01.webp ... -t06.webp
- o que tem: grade de pontos magenta formando círculos concêntricos, fundo preto, padrão regular tipo meio-tom.
- movimento: sozinho, os círculos se expandem do centro em ondas, contínuo.

## F-128 · React Bits Pro · Squares Terminal
- link: https://pro.reactbits.dev/docs/components/squares-terminal
- prints: rb-squares-terminal-t01.webp ... -t06.webp
- o que tem: grade densa de quadradinhos roxos, textura tipo terminal antigo ou tela de matriz de pontos, fundo escuro.
- movimento: sozinho, os quadrados piscam ligando e desligando em posições aleatórias, contínuo.

## F-129 · React Bits Pro · Squircle Shift
- link: https://pro.reactbits.dev/docs/components/squircle-shift
- prints: rb-squircle-shift-t01.webp ... -t06.webp
- o que tem: formas arredondadas (squircles, entre quadrado e círculo) com contorno brilhante azul/roxo, espalhadas sobre fundo preto.
- movimento: sozinho, as formas mudam de tamanho e posição, morphing contínuo.

## F-130 · React Bits Pro · Staggered Text
- link: https://pro.reactbits.dev/docs/components/staggered-text
- prints: rb-staggered-text-t01.webp ... -t06.webp
- o que tem: frase "Build faster than ever" centralizada, branca, duas linhas, fundo preto, tipografia em negrito.
- movimento: sozinho, as palavras entram uma de cada vez (staggered), efeito de digitação ou revelação em cascata.

## F-131 · React Bits Pro · Star Burst
- link: https://pro.reactbits.dev/docs/components/star-burst
- prints: rb-star-burst-t01.webp ... -t06.webp
- o que tem: traços finos rosa/magenta explodindo de um ponto na base para cima, como fogos de artifício ou fonte de luz, fundo preto.
- movimento: sozinho, os traços disparam para fora continuamente.

## F-132 · React Bits Pro · Star Swipe
- link: https://pro.reactbits.dev/docs/components/star-swipe
- prints: rb-star-swipe-t01.webp ... -t06.webp
- o que tem: padrão de linhas curvas rosa claro formando ondas simétricas tipo impressão digital ou onda sonora, fundo escuro.
- movimento: sozinho, o padrão varre e se deforma continuamente.

## F-133 · React Bits Pro · Swirl Blend
- link: https://pro.reactbits.dev/docs/components/swirl-blend
- prints: rb-swirl-blend-t01.webp ... -t06.webp
- o que tem: redemoinho de cor rosa/magenta para roxo escuro, textura líquida saturada, sem áreas pretas.
- movimento: sozinho, o redemoinho gira e as cores se misturam, contínuo.

## F-134 · React Bits Pro · Synaptic Shift
- link: https://pro.reactbits.dev/docs/components/synaptic-shift
- prints: rb-synaptic-shift-t01.webp ... -t06.webp
- o que tem: células orgânicas conectadas por linhas brilhantes brancas/azuis, como uma rede neural ou membrana, fundo escuro.
- movimento: sozinho, os pontos de conexão brilham e pulsam percorrendo a rede, contínuo.

## F-135 · React Bits Pro · Tech Wall
- link: https://pro.reactbits.dev/docs/components/tech-wall
- prints: rb-tech-wall-t01.webp ... -t06.webp
- o que tem: painel hexagonal tipo colmeia em tons de roxo, bordas com contorno luminoso, fundo escuro.
- movimento: sozinho, os painéis acendem em sequência como luzes se ligando em um painel técnico, contínuo.

## F-136 · React Bits Pro · Text Cube
- link: https://pro.reactbits.dev/docs/components/text-cube
- prints: rb-text-cube-t01.webp ... -t06.webp
- o que tem: cubo 3D fino formado por pontos/linhas brancas esparsas, fundo preto, quase invisível no tamanho do preview.
- movimento: sozinho, o cubo gira lentamente; o site descreve que seguiria o cursor com esmaecimento por profundidade.

## F-137 · React Bits Pro · Text Path
- link: https://pro.reactbits.dev/docs/components/text-path
- prints: rb-text-path-t01.webp ... -t06.webp
- o que tem: texto corrido em cinza claro, seguindo uma curva ondulada, fundo preto, tipografia leve.
- movimento: sozinho, o texto desliza ao longo do caminho curvo continuamente.

## F-138 · React Bits Pro · Text Scatter
- link: https://pro.reactbits.dev/docs/components/text-scatter
- prints: rb-text-scatter-m01.webp, -m02.webp, -m03.webp
- o que tem: frase "Bounce Back." branca centralizada, fundo preto, tipografia em negrito.
- movimento: ao mover o mouse, as letras se espalham e saltam para longe do cursor, depois voltam ao lugar. Gatilho: mouse.

## F-139 · React Bits Pro · Thinking Dots
- link: https://pro.reactbits.dev/docs/components/thinking-dots
- prints: rb-thinking-dots-t01.webp ... -t06.webp
- o que tem: nuvem de pontos pequenos magenta, densidade maior no centro, fundo preto.
- movimento: sozinho, a nuvem de pontos "respira" mudando de densidade e forma, como se pensasse, contínuo.

## F-140 · React Bits Pro · Tile Reveal
- link: https://pro.reactbits.dev/docs/components/tile-reveal
- prints: rb-tile-reveal-t01.webp ... -t06.webp
- o que tem: frase "Built for what comes next" branca centralizada sobre fundo preto, tipografia grande em negrito.
- movimento: sozinho no preview, o texto permanece fixo enquanto (segundo o site) uma grade de imagens voa coluna por coluna ao rolar, até revelar esse título.

## F-141 · React Bits Pro · Tilted Tiles
- link: https://pro.reactbits.dev/docs/components/tilted-tiles
- prints: rb-tilted-tiles-t01.webp ... -t06.webp
- o que tem: grade de fotos (paisagens, arquitetura) inclinada em perspectiva diagonal, ocupando todo o quadro, cores variadas.
- movimento: sozinho no preview, as colunas de fotos deslizam em direções opostas; o site descreve como acionado por rolagem.

## F-142 · React Bits Pro · Tumble Carousel
- link: https://pro.reactbits.dev/docs/components/tumble-carousel
- prints: rb-tumble-carousel-m01.webp, -m02.webp, -m03.webp
- o que tem: cartões pequenos com fotos variadas, girando cada um em torno do próprio eixo enquanto avançam em arco, fundo preto.
- movimento: ao arrastar, os cartões tombam (giram de ponta-cabeça) conforme avançam pelo carrossel. Gatilho: arrastar.

## F-143 · React Bits Pro · Twilight Lines
- link: https://pro.reactbits.dev/docs/components/twilight-lines
- prints: rb-twilight-lines-t01.webp ... -t06.webp
- o que tem: linhas onduladas horizontais com brilho roxo para rosa quente, empilhadas, fundo escuro.
- movimento: sozinho, o brilho varre as linhas de um lado a outro, contínuo.

## F-144 · React Bits Pro · Twisting Gallery
- link: https://pro.reactbits.dev/docs/components/twisting-gallery
- prints: rb-twisting-gallery-m01.webp, -m02.webp, -m03.webp
- o que tem: fotos em preto e branco (paisagem) numa coluna, cada uma girando em ângulo diferente, fundo preto.
- movimento: ao arrastar, as imagens giram com efeito de torção e embaçam com a velocidade. Gatilho: arrastar.

## F-145 · React Bits Pro · User Cursor
- link: https://pro.reactbits.dev/docs/components/user-cursor
- prints: rb-user-cursor-m01.webp, -m02.webp, -m03.webp
- o que tem: fundo preto, texto pequeno "Hello, Sophie" com uma etiqueta laranja ao lado, como cursor de colaboração em tempo real.
- movimento: ao mover o mouse, a etiqueta com nome segue o cursor. Gatilho: mouse.

## F-146 · React Bits Pro · Vortex
- link: https://pro.reactbits.dev/docs/components/vortex
- prints: rb-vortex-t01.webp ... -t06.webp
- o que tem: túnel 3D formado por linhas finas concêntricas, muito escuro e sutil, fundo preto, sensação de profundidade infinita.
- movimento: sozinho, o túnel gira e avança continuamente, com partículas.

## F-147 · React Bits Pro · Warp Twister
- link: https://pro.reactbits.dev/docs/components/warp-twister
- prints: rb-warp-twister-t01.webp ... -t06.webp
- o que tem: distorção sutil tipo tecido ou fumaça escura, quase monocromática, fundo preto, muito discreto no preview.
- movimento: sozinho, a distorção gira e se retorce lentamente, contínuo.

## F-148 · React Bits Pro · Warped Card
- link: https://pro.reactbits.dev/docs/components/warped-card
- prints: rb-warped-card-m01.webp, -m02.webp, -m03.webp
- o que tem: cartão vertical com ilustração de árvore e lua sobre paisagem em tons terrosos (laranja/marrom), fundo preto.
- movimento: ao mover o mouse, a imagem do cartão incha e distorce como um bojo (bulge) que segue o cursor. Gatilho: mouse.

## F-149 · React Bits Pro · Watercolor
- link: https://pro.reactbits.dev/docs/components/watercolor
- prints: rb-watercolor-t01.webp ... -t06.webp
- o que tem: manchas em preto e branco de alto contraste como tinta aguada (aquarela), textura orgânica e irregular.
- movimento: sozinho, as manchas se espalham e mudam de forma continuamente.

## F-150 · React Bits Pro · Wireframe Ball
- link: https://pro.reactbits.dev/docs/components/wireframe-ball
- prints: rb-wireframe-ball-t01.webp ... -t06.webp
- o que tem: poliedro em wireframe (linhas finas brancas conectando vértices), fundo preto, muito discreto e pequeno no preview.
- movimento: sozinho, o poliedro gira devagar, contínuo.
