# Findings: GSAP Scroll showcase

Source: https://gsap.com/scroll/  
IDs: F-151 to F-161 (11)  
Prints: `prints/gsap-*.webp`

One long page of 14 blocks. The 11 scroll demos were captured at 6 scroll positions each; the 3 static blocks at the end (plugin grid, links, showcase) are only listed.

Snapshot collected on 2026-09-22. Catalogs change; recount before trusting totals. Findings are factual descriptions in Portuguese: `o que tem` (what it has) and `movimento` (motion).

---

## F-151 · GSAP Scroll · Herói "Scroll"
- link: https://gsap.com/scroll/ (topo da página)
- prints: gsap-hero-s01.webp ... -s06.webp
- o que tem: palavra "Scroll" enorme em rosa claro, abaixo dela formas em pílula com degradê azul para rosa/roxo (uma em cruz/trevo de quatro folhas, cápsulas compridas, um círculo), tipografia grande sem serifa, fundo preto, barra verde de aviso no topo.
- movimento: ao rolar, a barra verde do topo sai de cena, o título e as formas encolhem e sobem, dando lugar ao título da próxima seção ("Scroll Plugins") que entra por baixo. Gatilho: rolagem, contínuo enquanto rola, volta ao estado inicial se rolar para cima.

## F-152 · GSAP Scroll · Scroll Plugins
- link: https://gsap.com/scroll/
- prints: gsap-plugins-intro-s01.webp ... -s06.webp
- o que tem: anel/argola 3D com degradê azul para rosa, luz especular clara na borda (como um donut de vidro ou metal líquido), texto "Infinitely Flexible, Highly Optimised" e parágrafo sobre slide/zoom/morph/draw, fundo preto.
- movimento: o anel gira em 3D conforme rola, o texto sobe e some, dando lugar ao próximo título. Gatilho: rolagem, reversível ao subir.

## F-153 · GSAP Scroll · ScrollTrigger, Ready Set Scroll
- link: https://gsap.com/scroll/
- prints: gsap-trigger-ready-s01.webp ... -s06.webp
- o que tem: forma tubular 3D com degradê azul para rosa, dobrada como um cano ou minhoca com pontas esféricas, ao lado um mockup de editor de código com abas "Demo"/"Code" e um seletor de variante, tipografia monoespaçada colorida no bloco de código.
- movimento: o tubo se contorce e se estica mudando de forma conforme a rolagem avança, como se estivesse sendo desenhado. Gatilho: rolagem, reversível.

## F-154 · GSAP Scroll · Pin, Scrub, Debug
- link: https://gsap.com/scroll/
- prints: gsap-trigger-pin-s01.webp ... -s06.webp
- o que tem: cata-vento de quatro pás em azul e rosa alternados, mockup de editor de código ao lado, título "Pin, Scrub, Debug", fundo preto.
- movimento: a seção fica fixa na tela (pin) enquanto o cata-vento gira e o conteúdo ao lado muda, só soltando a rolagem depois de completar o ciclo. Gatilho: rolagem, com trava temporária (pin).

## F-155 · GSAP Scroll · Any Size
- link: https://gsap.com/scroll/
- prints: gsap-trigger-size-s01.webp ... -s06.webp
- o que tem: frase "Any [forma] Size" onde a palavra do meio é substituída por uma cápsula rosa comprida com uma bolinha azul dentro, como se fosse uma letra ilustrada, fundo preto, tipografia grande.
- movimento: a cápsula rosa e a bolinha azul se movem dentro da frase conforme rola, brincando com a escala do texto. Gatilho: rolagem, reversível.

## F-156 · GSAP Scroll · ScrollSmoother, gentle breeze
- link: https://gsap.com/scroll/
- prints: gsap-smooth-breeze-s01.webp ... -s06.webp
- o que tem: aviãozinho de papel com degradê azul/rosa, linha pontilhada curva marcando sua trajetória, título "It's like a gentle breeze", fundo preto.
- movimento: o avião de papel voa ao longo da linha curva conforme a página rola, com leve balanço. Gatilho: rolagem, reversível.

## F-157 · GSAP Scroll · Effortless
- link: https://gsap.com/scroll/
- prints: gsap-smooth-effortless-s01.webp ... -s06.webp
- o que tem: fita/tubo em curva de "S" com degradê azul para rosa, pontas arredondadas como bolhas, fundo preto, texto "Effortlessly guiding your users from one section to another."
- movimento: a fita muda de curva (se contorce) conforme rola, como se estivesse guiando o olhar de uma seção a outra. Gatilho: rolagem, reversível.

## F-158 · GSAP Scroll · Smooth like butter
- link: https://gsap.com/scroll/
- prints: gsap-smooth-butter-s01.webp ... -s06.webp
- o que tem: a mesma fita em degradê azul/rosa citada acima, e um disco com padrão de redemoinho iridescente (como madrepérola ou vinil), título "It's smooth like butter", parágrafo, dois botões em pílula "Demos"/"Docs".
- movimento: a fita termina seu movimento e um disco giratório de redemoinho aparece e gira continuamente conforme a seção passa pela tela. Gatilho: rolagem.

## F-159 · GSAP Scroll · Create mesmerising effects (paralaxe)
- link: https://gsap.com/scroll/
- prints: gsap-smooth-effects-s01.webp ... -s06.webp
- o que tem: vários elementos pequenos (bolinha azul, barras em degradê, uma flor/trevo de quatro pétalas) espalhados em profundidades diferentes, cada um rotulado com um número (0.8, 2.0, 1.2), bloco de código mostrando o atributo `data-speed`, título "Create mesmerising effects".
- movimento: cada elemento se desloca em velocidade diferente conforme rola (paralaxe), os mais "rápidos" (número maior) andam mais que os "lentos". Gatilho: rolagem, reversível.

## F-160 · GSAP Scroll · Seamlessly integrated
- link: https://gsap.com/scroll/
- prints: gsap-seamless-s01.webp ... -s06.webp
- o que tem: duas barras/colunas verticais arredondadas em degradê azul para rosa, alturas diferentes, título "Seamlessly integrated", parágrafo, fundo preto.
- movimento: as barras crescem e diminuem de altura conforme a rolagem avança, como um gráfico animado. Gatilho: rolagem, reversível.

## F-161 · GSAP Scroll · Back to Basics with Observer
- link: https://gsap.com/scroll/
- prints: gsap-observer-s01.webp ... -s06.webp
- o que tem: título "Back to Basics with Observer" (o ponto do "i" de "Basics" é uma bolinha azul), parágrafo, dois botões em pílula, e um painel final cor de fundo rosa sólido com o texto "Buttery Smooth Scrolling With GSAP Scroll Plugins" e dois cartõezinhos com ícone.
- movimento: o texto sobe e dá lugar a um painel rosa cheio que fecha a página, como um cartão de encerramento. Gatilho: rolagem.
