# Arquitetura

O projeto utiliza Next.js com App Router e é organizado em múltiplas rotas independentes. Cada página pode ser acessada por links a partir do CMS institucional da Secretaria da Educação, funcionando como uma extensão do site institucional da URE Ribeirão Preto.

As rotas e o layout global ficam em `src/app`. A rota `/setores-da-supervisao-de-ensino` está em `src/app/setores-da-supervisao-de-ensino/page.tsx`.

Os dados da Supervisão de Ensino ficam separados em `src/data/supervisores.ts`, com 30 supervisores cadastrados. A busca por supervisor, atribuição e escola é executada no cliente, ignorando acentuação e diferenças entre maiúsculas/minúsculas. O termo pesquisado recebe destaque visual com `<mark>`.

`src/components/supervisao` contém os componentes de busca, destaque e accordion. Os accordions são acessíveis por teclado e usam `aria-expanded`; a página também oferece os controles `Expandir todos` e `Recolher todos`.

O layout é responsivo para mobile e desktop, sem rolagem horizontal. Componentes compartilhados devem ser adicionados somente quando houver necessidade real de reutilização. O projeto não utiliza banco de dados nem autenticação.
