# Findings: Refero Styles

Source: https://styles.refero.design/  
IDs: R-043 to R-056 (14)  
Prints: `prints/ref-*.webp`

Design-system breakdowns of real sites. 340 entries listed (the site claims 2,000+, infinite scroll, no index); 14 read in full here. Linear, Resend, Vercel, Raycast, Steep, shadcn/ui, Attio and Stripe were read in an earlier session and have no finding here. A quick yes/no pass over 149 more entries is in `lists/refero-quick-pass.md`.

Snapshot collected on 2026-09-22. Catalogs change; recount before trusting totals. Findings are factual descriptions in Portuguese: `o que tem` (what it has) and `movimento` (motion).

---

## R-043 · Refero · Mercury (banco digital)
- link: https://styles.refero.design/style/3172cd4d-118a-4a16-a259-6b634d32322e
- prints: ref-mercury-01.webp
- o que tem: ficha de sistema de design (paleta, tipografia, espaçamento, regras), não um shot solto.
  Tema escuro: fundo quase preto (#171721), cartões um tom mais claro (#1e1e2a) sem nenhuma sombra (a
  separação vem só da diferença de valor entre os dois cinzas escuros, nunca de drop-shadow). Uma cor de
  destaque só (azul-cobalto #5266eb), usada exclusivamente no botão principal "Open account", nunca
  decorativa. Tipografia em peso intermediário (480), nem bold nem regular, título grande com leading bem
  apertado (1.1). Todos os controles (botão, input, nav) em formato pílula (raio 32-40px); só elementos
  estruturais usam canto reto de 4px. Herói em foto real full-bleed (mesa isolada no topo de montanha
  nevoenta) com overlay escuro por trás do texto.
- regras: nunca mais de 1 cor de destaque por página; nunca sombra em cartão; nunca peso 700+ no título;
  nunca canto reto (0-4px) em botão/input; espaço vertical generoso entre seções (72px).

## R-044 · Refero · ElevenLabs (voz sintética por IA)
- link: https://styles.refero.design/style/031056ff-7af1-46db-8daa-115f731c5d26
- prints: ref-elevenlabs-01.webp
- o que tem: tema claro em "papel creme": fundo quase branco mas quente (#fdfcfc), nunca branco puro,
  cartões num bege-taupe (#f5f3f1) um tom abaixo, texto preto puro. Título de destaque numa fonte peso
  300 (bem fina, "sussurrada") com letras bem juntas (tracking negativo), contrastando com o corpo de
  texto em peso 400/500 com tracking levemente positivo, o oposto do título. Só 2 cores de destaque (azul
  #0447ff e laranja #ff4704), mas usadas SÓ dentro de ilustrações de produto (esferas de gradiente tipo
  "bolha de áudio"), nunca em botão, link ou qualquer parte da interface. Botões 100% em pílula (raio
  9999px), bordas finas de 1px no lugar de sombra pra separar cartão do fundo.
- regras: nunca engrossar a fonte de título (peso 300 é assinatura da marca); as 2 cores de destaque
  nunca podem virar cor de botão/link; sempre bege quente, nunca branco/cinza puro.

## R-045 · Refero · Notion (produtividade/IA)
- link: https://styles.refero.design/style/2bf4c61f-de10-4614-ba1b-20c0453bd2a9
- prints: ref-notion-01.webp
- o que tem: tema claro em papel quente (#f6f5f4), cartões brancos com borda fina de 1px, sem sombra
  nenhuma. Só 1 azul de destaque pro botão principal; todo o resto de cor (laranja, coral, céu, marinho)
  fica reservado pra pintar o FUNDO de cartões de recurso (cada cartão de feature é uma cor sólida
  diferente, tipo post-it). No título do herói, uma palavra do meio da frase ganha uma pílula colorida
  atrás dela (aqui "Create"), técnica de destacar 1 palavra específica dentro da frase toda, sem mudar a
  fonte. Título gigante com tracking bem negativo (letras quase coladas) nos tamanhos grandes. Fileira de
  avatares circulares ilustrados (rostinhos redondos com borda colorida) espalhados como pontuação visual,
  junto com rabiscos e estrelinhas soltas ao redor do texto, sem função nenhuma além de dar vida.
- regras: nunca branco puro de fundo (sempre o bege); nunca sombra em cartão, só borda fina; nunca mais
  de 1 botão azul cheio por tela; nunca gradiente, só cor sólida chapada.

## R-046 · Refero · Anthropic (pesquisa em IA)
- link: https://styles.refero.design/style/d469cba4-c448-4a43-a033-883f8bfcdc42
- prints: ref-anthropic-01.webp
- o que tem: tema claro "revista científica em papel pergaminho": fundo bege-marfim (#f0eee6), nunca
  branco puro, texto quase preto mas com calor (#141413). Corpo de texto inteiro em fonte SERIFADA a 20px
  (raro em site de tecnologia, a maioria usa sem-serifa até no corpo), título grande em sem-serifa bold
  ao lado de outro título em serifa mais fina, os dois convivendo lado a lado na mesma página (um "grita",
  o outro "narra"). Só 1 cor de destaque (terracota #d97757), reservada só pro botão de ação mais
  importante da tela. Botão preenchido tem cantos arredondados só embaixo (reto em cima), assinatura
  visual em vez do botão pílula padrão. Card de destaque usa ilustração de prancha naturalista antiga
  (borboletas e mariposas estilo livro de campo do século 19), colorida em tom terroso combinando com o
  fundo. Links dentro do texto sempre sublinhados (não só ao passar o mouse), como convenção de material
  impresso.
- regras: nunca cor fria (azul, cinza-frio) em lugar nenhum; nunca sombra, só variação sutil de tom entre
  as camadas de bege; nunca branco puro de superfície; a cor terracota nunca decora, só aparece no botão
  de ação principal.

## R-047 · Refero · Cal.com (agendamento)
- link: https://styles.refero.design/style/5d7aa503-8cfa-49a4-bd3b-0c2f0f075c70
- prints: ref-calcom-01.webp
- o que tem: tema claro monocromático quase absoluto: preto/grafite/cinza sobre fundo cinza-papel
  (#f4f4f4), cartões brancos com sombra bem sutil e difusa (nunca borda). Só 1 azul de destaque, usado
  só em link secundário/banner informativo, nunca em botão principal (o botão principal é preto sólido).
  Fonte própria (Cal Sans) só nos títulos, geométrica mas "amigável"; corpo de texto numa variante bem
  leve da mesma família com tracking negativo apertado. Botões de página em pílula (9999px); só o botão
  do cabeçalho fixo usa canto reto de 8px (regra específica por contexto, não por hierarquia). Imagem é
  só print de produto real (calendário funcionando) e logo de integração (Google, etc.), nunca foto nem
  ilustração.
- regras: nunca introduzir cor nova além do azul único; nunca canto reto em botão/cartão fora do
  cabeçalho; nunca peso de fonte acima de 600; nunca borda em cartão (só sombra).

## R-048 · Refero · Supabase (banco de dados/dev tools)
- link: https://styles.refero.design/style/632249f1-fd78-4c77-9b34-7bae37ff3e9b
- prints: ref-supabase-01.webp
- o que tem: "editor de código à meia-noite": fundo quase preto, 99% da tela em escala de cinza, e 1 verde
  fósforo vibrante (#3ecf8e) só em CTA, destaque de título e logo. Título do herói em 2 linhas, segunda
  linha ("Scale to millions") inteira na cor verde por cima da primeira em branco: aqui a "palavra de
  destaque" vira a FRASE inteira de uma linha, não só 1 palavra. Fonte geométrica (Circular) em peso
  regular, sem bold gritando. Botões em pílula. Cartões flutuam 1 nível acima do fundo por contraste de
  borda, não por sombra. Logos de clientes em cinza monocromático abaixo do herói, tira de "recursos"
  (Postgres Database, Authentication) com ícone pequeno + título curto.

## R-049 · Refero · Framer (construtor de sites)
- link: https://styles.refero.design/style/d417b42f-824d-45ba-a02e-cbef3b8ea0d8
- prints: ref-framer-01.webp
- o que tem: "galeria neon no vazio": tela quase 100% preta (#000000), conteúdo flutua como "letreiro de
  neon numa galeria" com pouquíssimos degraus de cinza pra dar profundidade (nada de gradiente). Um azul
  elétrico único (#0099ff) em borda, brilho, badge e estado ativo, nunca decorativo. Título com tracking
  bem negativo e entrelinha apertada (0.8-1.1), tipografia "comprimida" que empurra pra frente em vez de
  ficar quieta na página. Seção "Shipped with Framer" mostra 3 sites reais lado a lado em miniatura
  (foto de mesa de trabalho, still de vídeo com rosto de pessoa e legenda, paisagem de nuvem), como prova
  social visual em vez de logo de empresa.

## R-050 · Refero · Headspace (saúde mental)
- link: https://styles.refero.design/style/035a098b-5a27-48a3-8a3a-c68a698e3eab
- prints: ref-headspace-01.webp
- o que tem: "retiro de bem-estar ensolarado em papel quente": fundo creme (#f9f4f2), texto nunca preto
  puro (cinza-carvão quente). Faixa fina laranja no topo da página com aviso pequeno. Formas bem
  arredondadas em tudo (cantos de 16-32px em cartão, pílula de 9999px em botão/elemento circular).
  Ilustração de personagem tipo blob (círculo laranja com carinha) ao lado do nome da marca. Mockup de
  celular com FOTO REAL de pessoa (homem de óculos) dentro da tela do app, não ilustração. Várias cores
  de destaque, cada uma com um significado emocional específico (amarelo = energia, azul = ação
  principal, violeta = contemplação), ao contrário da maioria da coleta que usa só 1 cor.

## R-051 · Refero · Runway (planejamento financeiro)
- link: https://styles.refero.design/style/874aaea0-c718-454e-8a58-f3beed1284ec
- prints: ref-runway-01.webp
- o que tem: "caderno-razão de papel kraft sob luz de mesa âmbar": fundo creme (#f8f7f5), cartões brancos,
  divisórias num tom bege-linho, texto num marrom-café escuro (nunca preto), tudo "impresso" em vez de
  "renderizado". Só 1 cor de destaque âmbar, funcionando como marca-texto só no botão de ação principal.
  Fonte humanista com pesos não convencionais (492, 584 em vez de 400/600). Print de produto real logo
  abaixo do herói: dashboard financeiro com gráfico de área em cores pastel suaves (lilás, verde-água),
  tabela de métricas (ARR, Cash, Average ACV) ao lado do gráfico.

## R-052 · Refero · Wise (câmbio/pagamento internacional)
- link: https://styles.refero.design/style/367c0c6e-73a7-441c-a8ff-91d139ac60dc
- prints: ref-wise-01.webp
- o que tem: tema claro, mas "gritado": verde-floresta bem escuro (#163300) é a cor DOMINANTE (não só
  destaque) em texto, nav e seções escuras; um verde-lima elétrico (#9fe870) funciona como pontuação
  funcional em botão e aba ativa. Título do herói gigante (100px+), caixa alta, peso 900, letras bem
  juntas ("MONEY FOR HERE, THERE AND EVERYWHERE"), tom mais "gritado" que a maioria dos achados
  encontrados até aqui. Ilustração 3D de um globo azul-turquesa com moedas douradas flutuando ao redor,
  em vez de foto ou print de produto. Botões em pílula, cartões com raio pequeno (10px).

## R-053 · Refero · Todoist (lista de tarefas)
- link: https://styles.refero.design/style/729ba7a8-35d5-44f3-abc0-1078ff6a3467
- prints: ref-todoist-01.webp
- o que tem: "mesa de trabalho ensolarada com planner de papel": fundo quase branco mas quente, texto
  quase preto, 1 vermelho-laranja de destaque só em botão/rótulo, nunca decorativo. Atrás dos mockups de
  produto (print de celular + desktop flutuando), ondas decorativas bem suaves em tom creme (formas
  orgânicas de baixo contraste, quase imperceptíveis, só textura de fundo). Faixa de depoimentos em
  citação itálica curta ("Simple, straightforward, and super powerful") ao lado de logos de imprensa
  pequenos (The Verge, PC Mag, TechRadar) em vez de logos de clientes. Estrelinhas/sparkles soltas perto
  do botão principal.

## R-054 · Refero · GitHub (código/colaboração)
- link: https://styles.refero.design/style/c3ceca5c-d329-4559-b947-016172941ba2
- prints: ref-github-01.webp
- o que tem: "convés de comando cósmico": fundo quase preto (#0d1117) com uma atmosfera radial violeta
  atrás do herói, 1 verde de destaque só no botão principal, funcionando como "cursor de terminal" trazido
  pra interface. Título simples branco/cinza, sem tratamento especial. Flutuando no meio do herói, 3 a 4
  esferas 3D glossy coloridas (roxo, rosa, laranja) tipo planetas/bolhas de sabão, sem conexão nenhuma com
  texto ou ícone, só decoração ambiental. Abaixo, print real de editor de código com destaque de sintaxe
  colorida (chat "GitHub Copilot" ao lado de um arquivo de código). Elevação feita só por borda (não
  sombra); botões em 2 formas diferentes de propósito (pílula pra navegação/tag, retângulo de canto raso
  pra botão de ação).

## R-055 · Refero · Intercom (atendimento/helpdesk)
- link: https://styles.refero.design/style/12255b63-e506-4bc1-a4cd-d05487de32f3
- prints: ref-intercom-01.webp
- o que tem: "revista editorial em papel creme": fundo bege bem claro, tipografia toda em peso 300 (bem
  fina) pro corpo E pro título, dando um ar "sussurrado". Cantos de TODO elemento (botão, cartão, campo)
  são retos, só 4px de raio: é uma exceção que rejeita de propósito a tendência de cantos bem arredondados
  que domina a maioria da coleta. Faixa de 6 fotos editoriais bem diferentes entre si lado a lado (céu,
  silhueta em contraluz, gradiente de pôr do sol, close de olho, ilustração de flor rabiscada à mão,
  still abstrato), tipo mood board de revista, não fotos de produto. Abaixo, abas de texto simples
  (sem ícone) alternando o que aparece no print de produto embaixo.
- regras: nunca mais de 4px de raio em nenhum elemento; nunca sombra decorativa; a cor violeta só em
  ícone/tag pontual, nunca em área grande.

## R-056 · Refero · Webflow (construtor de sites)
- link: https://styles.refero.design/style/31471407-598a-45fd-a505-d921980d8855
- prints: ref-webflow-01.webp
- o que tem: "estúdio branco, tinta preta, 1 marca azul": fundo branco quase puro com leve gradiente
  azul-clarinho por trás só do herói (dá profundidade sem virar cor de fundo geral), texto quase preto,
  1 azul saturado de destaque. Título monumental (56-80px), fonte geométrica variável com tracking bem
  negativo. Print de produto sempre embutido dentro de moldura de navegador realista (barra de endereço,
  botões de janela), nunca solto. 3 blocos de recurso lado a lado, cada um com nome curto + mini preview
  (AI site builder / Template / From scratch). Fileira de logos de clientes bem conhecidos (monday.com,
  Spotify, TED, Dropbox) no rodapé do herói.
