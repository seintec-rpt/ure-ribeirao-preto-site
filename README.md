# URE Ribeirão Preto — Recursos Digitais

Site complementar da Unidade Regional de Ensino de Ribeirão Preto. A aplicação reúne páginas e ferramentas independentes, acessadas por links a partir do CMS institucional da Secretaria da Educação.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- ESLint
- Deploy preparado para a Vercel
- Sem banco de dados e sem autenticação

## Funcionalidade disponível

A rota `/setores-da-supervisao-de-ensino` apresenta os dados separados em `src/data/supervisores.ts`, com 30 supervisores cadastrados.

A página oferece:

- busca por supervisor, atribuição e escola;
- busca sem distinção entre maiúsculas/minúsculas e ignorando acentuação;
- destaque visual do termo pesquisado;
- accordions acessíveis por teclado;
- controles `Expandir todos` e `Recolher todos`;
- layout responsivo para mobile e desktop.

## Estrutura

```text
src/
├── app/          # Rotas, layout global e estilos
├── components/   # Componentes reutilizáveis
├── data/         # Dados estáticos, incluindo supervisores.ts
└── lib/          # Funções utilitárias e integrações
public/           # Arquivos públicos
docs/             # Documentação do projeto
```

O alias `@/*` aponta para `src/*`.

## Como executar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Para validar uma versão de produção:

```bash
npm run lint
npm run build
```

## Deploy

O projeto pode ser importado diretamente na Vercel. O comando de build padrão é `npm run build`.
