# Roadmap

## Concluído

- Página Setores da Supervisão de Ensino na rota `/setores-da-supervisao-de-ensino`, publicada em produção na Vercel.
- Base completa da Supervisão de Ensino com 30 supervisores em `src/data/supervisores.ts`.
- Busca por supervisor, atribuição e escola, ignorando acentuação e maiúsculas/minúsculas.
- Destaque visual do termo pesquisado.
- Accordions acessíveis e controles `Expandir todos` / `Recolher todos`.
- Layout institucional responsivo para mobile e desktop.
- Primeiro deploy em produção concluído e validado.
- Base atualizada a partir da planilha de 09/11/2026, com redes separadas, municípios e CIEs preservados quando informados.

## Concluído

- Página Canais de Comunicação na rota `/canais-de-comunicacao`, com carga completa da planilha oficial.
- Dados completos organizados por setores, seções, chefias, equipes, contatos associados e contatos rápidos.

## Escola SP Conecta 2027
- Estruturada a base normativa em `src/data/escolaSpConecta.ts`, com tipos reutilizáveis para público participante, fases, perfil profissional, vídeo, dimensões, PEI, indicação de unidades, cronograma, checklist e perguntas frequentes.
- Utilizada como fonte principal a Portaria DIPES nº 64, de 18 de novembro de 2026.
- Interface institucional inicial criada na rota `/escola-sp-conecta-2027`, com navegação por âncoras, disclosures nativos, cronograma, checklist expositivo e FAQ.
- Rota principal reorganizada como página de navegação com seis subpáginas: perfil, gravação do vídeo, publicação no YouTube, envio/SED, cronograma e checklist/FAQ.
- Criado shell compartilhado com breadcrumb, navegação responsiva e links de retorno, usando rota dinâmica para evitar páginas duplicadas.
- Checklist interativo implementado com 14 itens, contador, barra de progresso, limpeza da marcação e estado somente em memória do navegador.
- Impressão A4 e salvamento em PDF pelo diálogo nativo do navegador implementados com `window.print()` e CSS de impressão; PDF estático para download permanece como evolução futura.
- FAQ continua baseado em disclosures nativos acessíveis; tutorial visual e tutoriais técnicos permanecem para etapas futuras.
- Manual de preparação e gravação implementado em `/escola-sp-conecta-2027/gravar-video`, com requisitos normativos, dicas práticas, roteiro, preparação do ambiente e seletor acessível de quatro ferramentas.
- Tutoriais técnicos utilizam instruções gerais e links oficiais para Câmera do Windows, OBS Studio e Microsoft Teams; não incluem capturas de tela inventadas.
- Manual de publicação no YouTube implementado com fluxos separados para computador e celular, seleção de visibilidade, alerta para Não listado, teste do link, referências oficiais e encaminhamento para a SED.
- Mantido placeholder para futuro vídeo tutorial da URE, sem iframe ou URL não confirmada.
## Em andamento

- Área EEC na rota `/eec`, com cinco rotas-placeholder por área do conhecimento.
- Conteúdos pedagógicos reais serão adicionados posteriormente.

- Ciências da Natureza criada como primeira biblioteca real da EEC, com categorias, Documentos de Apoio, anos escolares e materiais iniciais de 7º Ano.
