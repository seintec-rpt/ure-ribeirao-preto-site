# URE Ribeirão Preto — Recursos Digitais

Site complementar da Unidade Regional de Ensino de Ribeirão Preto. A aplicação reúne páginas e ferramentas independentes, acessadas por links a partir do CMS institucional da Secretaria da Educação.

## Produção

- Aplicação: [https://ure-ribeirao-preto-site.vercel.app/](https://ure-ribeirao-preto-site.vercel.app/)
- Supervisão de Ensino: [https://ure-ribeirao-preto-site.vercel.app/setores-da-supervisao-de-ensino](https://ure-ribeirao-preto-site.vercel.app/setores-da-supervisao-de-ensino)

O projeto é publicado pela Vercel, com deploy integrado ao repositório GitHub.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- ESLint
- Sem banco de dados e sem autenticação

## Funcionalidade disponível

A rota `/setores-da-supervisao-de-ensino` apresenta 30 supervisores, com dados separados em `src/data/supervisores.ts`.

A página oferece busca por supervisor, atribuição e escola, ignorando acentuação e diferenças entre maiúsculas/minúsculas, além de destaque visual do termo pesquisado, accordions acessíveis, controles `Expandir todos` e `Recolher todos`, e layout responsivo.

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
