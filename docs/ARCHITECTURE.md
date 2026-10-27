# Arquitetura

O projeto utiliza Next.js com App Router e é organizado em múltiplas rotas independentes. Cada página pode ser acessada por links a partir do CMS institucional da Secretaria da Educação, funcionando como uma extensão do site institucional da URE Ribeirão Preto.

As rotas e o layout global ficam em `src/app`. A rota `/setores-da-supervisao-de-ensino` está em `src/app/setores-da-supervisao-de-ensino/page.tsx`.

Os dados da Supervisão de Ensino ficam separados em `src/data/supervisores.ts`, com 30 supervisores cadastrados. A busca por supervisor, atribuição e escola é executada no cliente, ignorando acentuação e diferenças entre maiúsculas/minúsculas. O termo pesquisado recebe destaque visual com `<mark>`.

`src/components/supervisao` contém os componentes de busca, destaque e accordion. Os accordions são acessíveis por teclado e usam `aria-expanded`; a página também oferece os controles `Expandir todos` e `Recolher todos`.

O layout é responsivo para mobile e desktop, sem rolagem horizontal. O projeto não utiliza banco de dados nem autenticação.

## Canais de Comunicação

A rota `/canais-de-comunicacao` está em `src/app/canais-de-comunicacao/page.tsx`. Seus dados ficam separados em `src/data/contatos.ts`, organizados por setor, seção, chefia, equipe e contatos associados. A busca e os accordions são interativos no cliente, reutilizando o componente de highlight existente e links `tel:` para os telefones.

A área EEC utiliza a rota principal `/eec` e a rota dinâmica `src/app/eec/[area]/page.tsx` para os placeholders das cinco áreas do conhecimento. Os títulos, descrições, slugs e rotas ficam centralizados em `src/data/eec.ts`; conteúdos pedagógicos reais serão adicionados posteriormente.

Ciências da Natureza é a primeira área real da EEC. Sua biblioteca hierárquica usa `/eec/ciencias-da-natureza`, uma rota catch-all para categorias, subcategorias e anos, e os dados em `src/data/eec.ts`. O site armazena somente metadados e links opcionais; os arquivos permanecem hospedados externamente, como no Google Drive, sem upload ou banco de dados.

## Produção

A aplicação está publicada pela Vercel, com deploy integrado ao repositório GitHub:

- Aplicação: [https://ure-ribeirao-preto-site.vercel.app/](https://ure-ribeirao-preto-site.vercel.app/)
- Supervisão de Ensino: [https://ure-ribeirao-preto-site.vercel.app/setores-da-supervisao-de-ensino](https://ure-ribeirao-preto-site.vercel.app/setores-da-supervisao-de-ensino)
