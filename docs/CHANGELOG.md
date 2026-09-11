# Changelog

## Inicial

- Criação da base inicial do projeto institucional complementar.
- Configuração de Next.js, App Router, TypeScript, Tailwind CSS e ESLint.
- Inclusão da página inicial provisória e da documentação estrutural.

## Supervisão de Ensino

- Adicionada a página de Setores da Supervisão de Ensino.
- Adicionados dados de supervisores, busca sem acentuação e accordions acessíveis.
- Incluído link de acesso na página inicial.

## Base completa da Supervisão de Ensino

- Substituída a carga inicial de teste pela base completa proveniente do documento oficial fornecido.
- Registrados 30 supervisores em `src/data/supervisores.ts`.
- Mantidos os controles `Expandir todos` e `Recolher todos`, a responsividade e o destaque do termo pesquisado.
- Página finalizada e validada com lint e build aprovados.

## Primeiro deploy em produção

- Primeiro deploy em produção realizado pela Vercel, com deploy integrado ao repositório GitHub.
- URL pública da aplicação: [https://ure-ribeirao-preto-site.vercel.app/](https://ure-ribeirao-preto-site.vercel.app/)
- URL direta da página de Supervisão: [https://ure-ribeirao-preto-site.vercel.app/setores-da-supervisao-de-ensino](https://ure-ribeirao-preto-site.vercel.app/setores-da-supervisao-de-ensino)

## Correção de atribuição

- Corrigida a interpretação da linha sem supervisor após Jefferson Luiz Zucchermaglio.
- Criado o setor institucional `Supervisor não atribuído`, sem contabilizá-lo como supervisor real.

## Canais de Comunicação

- Iniciada a segunda funcionalidade do projeto na rota `/canais-de-comunicacao`.
- Adicionados dados iniciais de SEAFIN, SEOM e SEINTEC em `src/data/contatos.ts`.
- Incluídos busca, highlight, accordions acessíveis, contatos rápidos e telefones clicáveis.

## Carga completa de Canais de Comunicação

- Substituída a carga parcial pela base completa da planilha oficial.
- Incluídos todos os setores, seções, equipes, contatos associados e contatos rápidos da fonte.
- Aplicada a correção confirmada do telefone de Leticia Faria para `3519-3931`.
