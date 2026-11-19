# Changelog

## Atualizacao da base de Supervisao de Ensino (09/11/2026)

- Atualizada `src/data/supervisores.ts` a partir da planilha `SETORES DA SUPERVISAO ATUALIZADO 9-11-26.xlsx`.
- A aba `Base Consolidada` foi adotada como fonte oficial dos registros individuais; os 326 registros foram mantidos mesmo com divergência nos resumos.
- Registrados 30 supervisores e 326 registros da Base Consolidada, com separacao entre redes estadual, municipal e privada.
- Incluidos municipio e codigos das escolas quando informados na fonte.
- A interface passou a apresentar os identificadores das escolas como `CIE`, preservando os valores e o campo interno original.
- Atribuicoes antigas nao foram carregadas, pois nao constam na planilha nova.
- A Base Consolidada diverge dos resumos em 5 registros: Julio Cesar de Lima (12 na base contra 10 no resumo), Rosana Morilha de Oliveira (10 contra 9) e Simone Aparecida Pimenta (9 contra 7).

## Escola SP Conecta 2027
- Criada a estrutura de dados normativa em `src/data/escolaSpConecta.ts` para a futura página de orientações.
- Registrados os públicos, situações específicas, fases, requisitos do perfil, regras do vídeo, estrutura em três momentos, sete dimensões profissionais, Premissas do PEI, indicação de unidades, cronograma de nove etapas, checklist e perguntas frequentes.
- Separadas exigências normativas de dicas práticas e associadas referências aos artigos da Portaria DIPES nº 64, de 18 de novembro de 2026.
- Nenhuma interface, rota ou dependência foi adicionada nesta etapa.
## Interface institucional Escola SP Conecta 2027
- Criada a rota `/escola-sp-conecta-2027` com metadata específica e conteúdo institucional responsivo.
- Adicionado o componente `EscolaSpConectaGuide.tsx`, reutilizando integralmente os dados normativos da Etapa 1.
- Incluídas navegação por âncoras, disclosures acessíveis, fases, perfil profissional, vídeo, dimensões, PEI, publicação no YouTube, cronograma, checklist expositivo e perguntas frequentes.
- Adicionado link de acesso na página inicial.
- Aplicada identidade visual escopada, sem alterar as páginas existentes.
- Mantidos para etapa posterior a marcação interativa do checklist, o contador de progresso, o FAQ avançado e o tutorial visual.
## Reorganização em subpáginas Escola SP Conecta 2027
- Transformada a rota principal em página de apresentação e navegação com seis cards.
- Criada rota dinâmica para `/perfil`, `/gravar-video`, `/publicar-youtube`, `/envio-sed`, `/cronograma` e `/checklist`.
- Criado shell compartilhado com breadcrumb, navegação entre orientações e retorno à página principal.
- Dividido o conteúdo em componentes por responsabilidade, preservando os dados normativos centralizados.
- Mantidos como conteúdo futuro os tutoriais técnicos, a marcação interativa, o progresso e o PDF para impressão.
## Checklist interativo Escola SP Conecta 2027
- Criado `InteractiveChecklist.tsx` como limite client-side da rota `/escola-sp-conecta-2027/checklist`, com os 14 itens normativos mantidos em `src/data/escolaSpConecta.ts`.
- Adicionados marcação acessível, contador, barra de progresso, limpeza dos itens e aviso de que a ferramenta não substitui o registro ou a confirmação na SED.
- Adicionada folha A4 para impressão e salvamento em PDF pelo diálogo nativo do navegador, com caixas vazias, alto contraste e controles ocultos na impressão.
- Mantido como evolução futura o fornecimento de um arquivo PDF estático para download.
## Manual de preparacao e gravacao Escola SP Conecta 2027
- Ampliada a subpagina `/escola-sp-conecta-2027/gravar-video` com requisitos da Portaria, roteiro em tres momentos, dimensoes profissionais, Premissas do PEI e conferencia do arquivo.
- Adicionadas dicas praticas de ambiente e equipamento, separadas das exigencias normativas.
- Criado seletor acessivel para celular, Camera do Windows, OBS Studio e Microsoft Teams, com etapas, requisitos, erros comuns e referencias oficiais.
- Incluido link de continuidade para a publicacao no YouTube, sem duplicar o tutorial dessa subpagina.
## Manual de publicacao no YouTube Escola SP Conecta 2027
- Substituido o placeholder da subpagina `/escola-sp-conecta-2027/publicar-youtube` por tutorial orientativo com etapas tipadas para computador e celular.
- Adicionadas comparacao entre visibilidades, destaque normativo para `Nao listado`, teste do link e encaminhamento para a pagina de envio na SED.
- Incluidas referencias oficiais para Conta Google, criacao de canal, YouTube Studio, envio de videos e privacidade.
- Mantido o espaco reservado para futuro video institucional da URE sem iframe ou URL inventada.
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

## Área EEC

- Criada a área inicial da Equipe de Especialistas em Currículo na rota `/eec`.
- Adicionados cinco cards de áreas do conhecimento e rotas-placeholder correspondentes.
- Estrutura registrada como protótipo, aguardando a inclusão de conteúdos pedagógicos reais.

## Biblioteca de Ciências da Natureza

- Criada a primeira biblioteca real da EEC em `/eec/ciencias-da-natureza`.
- Adicionada navegação hierárquica por categoria, subcategoria e ano escolar.
- Cadastrados cinco materiais iniciais de 7º Ano, sem URLs reais.
- Mantidos arquivos externos ao projeto, com armazenamento local apenas de metadados e links opcionais.
