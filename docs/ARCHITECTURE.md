# Arquitetura

O projeto utiliza Next.js com App Router e é organizado em múltiplas rotas independentes. Cada página pode ser acessada por links a partir do CMS institucional da Secretaria da Educação, funcionando como uma extensão do site institucional da URE Ribeirão Preto.

As rotas e o layout global ficam em `src/app`. A rota `/setores-da-supervisao-de-ensino` está em `src/app/setores-da-supervisao-de-ensino/page.tsx`.

Os dados da Supervisão de Ensino ficam separados em `src/data/supervisores.ts`, com 30 supervisores cadastrados. Cada escola mantém nome, município, rede e CIE quando disponível, com listas separadas para escolas estaduais, municipais e particulares. O campo interno de código permanece preservado para refletir a fonte, mas a interface apresenta esses identificadores como CIE. A busca por supervisor, atribuição, escola, município ou CIE é executada no cliente, ignorando acentuação e diferenças entre maiúsculas/minúsculas. O termo pesquisado recebe destaque visual com `<mark>`.

`src/components/supervisao` contém os componentes de busca, destaque e accordion. Os accordions são acessíveis por teclado e usam `aria-expanded`; a página também oferece os controles `Expandir todos` e `Recolher todos`.

O layout é responsivo para mobile e desktop, sem rolagem horizontal. O projeto não utiliza banco de dados nem autenticação.

## Canais de Comunicação

A rota `/canais-de-comunicacao` está em `src/app/canais-de-comunicacao/page.tsx`. Seus dados ficam separados em `src/data/contatos.ts`, organizados por setor, seção, chefia, equipe e contatos associados. A busca e os accordions são interativos no cliente, reutilizando o componente de highlight existente e links `tel:` para os telefones.

A área EEC utiliza a rota principal `/eec` e a rota dinâmica `src/app/eec/[area]/page.tsx` para os placeholders das cinco áreas do conhecimento. Os títulos, descrições, slugs e rotas ficam centralizados em `src/data/eec.ts`; conteúdos pedagógicos reais serão adicionados posteriormente.

Ciências da Natureza é a primeira área real da EEC. Sua biblioteca hierárquica usa `/eec/ciencias-da-natureza`, uma rota catch-all para categorias, subcategorias e anos, e os dados em `src/data/eec.ts`. O site armazena somente metadados e links opcionais; os arquivos permanecem hospedados externamente, como no Google Drive, sem upload ou banco de dados.

## Escola SP Conecta 2027
A rota `/escola-sp-conecta-2027` utiliza `src/app/escola-sp-conecta-2027/page.tsx` como página de apresentação e navegação. As seis subpáginas usam a rota dinâmica `src/app/escola-sp-conecta-2027/[pagina]/page.tsx`, com parâmetros definidos em `escolaSpSubpages` dentro de `src/data/escolaSpConecta.ts`.
`EscolaSpConectaShell.tsx` concentra cabeçalho, breadcrumb, aviso, navegação entre páginas e retorno à visão geral. Os conteúdos são divididos em componentes por responsabilidade: perfil, gravação, YouTube, envio/SED, cronograma e checklist/FAQ. Todos importam os dados normativos de `src/data/escolaSpConecta.ts`; os elementos nativos `<details>` mantêm disclosures acessíveis, sem dependências adicionais ou persistência.
A identidade visual é escopada em `.escola-sp-theme` dentro de `src/app/globals.css`, sem alterar os estilos da Supervisão, dos Canais de Comunicação ou da EEC. A rota de checklist usa `InteractiveChecklist.tsx` como único limite client-side: o estado fica em memória com `useState`, sem localStorage, cookies, API ou banco de dados. A mesma lista normativa alimenta a visualização digital e a folha de impressão; `window.print()` e regras `@media print` oferecem impressão A4 e salvamento pelo diálogo do navegador, sem dependência de biblioteca de PDF.
### Manual de preparacao e gravacao
`EscolaSpConectaVideoSection.tsx` permanece como Server Component e reutiliza os dados normativos da Portaria. As orientacoes praticas e os quatro tutoriais ficam tipados em `src/data/escolaSpConecta.ts`. `VideoToolSelector.tsx` e o unico limite client-side da secao: ele controla apenas a ferramenta selecionada, sem persistencia, API ou dependencia adicional. As referencias tecnicas apontam para a documentacao oficial da Microsoft e do OBS.
`EscolaSpConectaYouTubeSection.tsx` reutiliza o requisito normativo do YouTube e separa as instrucoes tecnicas em `youtubeTutorialModes`, `youtubePrivacyOptions` e `youtubeOfficialResources`. `YouTubeTutorialSelector.tsx` controla somente o dispositivo e a etapa atualmente exibida, mantendo os dados no navegador sem receber ou armazenar links pessoais. O bloco de video tutorial permanece como placeholder sem iframe ou URL inventada.
## Produção

A aplicação está publicada pela Vercel, com deploy integrado ao repositório GitHub:

- Aplicação: [https://ure-ribeirao-preto-site.vercel.app/](https://ure-ribeirao-preto-site.vercel.app/)
- Supervisão de Ensino: [https://ure-ribeirao-preto-site.vercel.app/setores-da-supervisao-de-ensino](https://ure-ribeirao-preto-site.vercel.app/setores-da-supervisao-de-ensino)
