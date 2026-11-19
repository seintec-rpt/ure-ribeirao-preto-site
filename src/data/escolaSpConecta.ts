export type NormativeNature = "exigencia-normativa" | "dica-pratica";

export type NormativeReference = {
  artigo: number;
  paragrafo?: string;
  inciso?: string;
  alinea?: string;
};

export type ReferencedGuidance = {
  texto: string;
  natureza: NormativeNature;
  referencia?: NormativeReference;
};

export type ParticipantGroup = {
  id: string;
  titulo: string;
  descricao: string;
  referencia: NormativeReference;
};

export type SpecificSituation = {
  id: string;
  titulo: string;
  descricao: string;
  referencia: NormativeReference;
};

export type ProcessPhase = {
  ordem: number;
  titulo: string;
  descricao: string;
  referencia: NormativeReference;
};

export type ProfessionalProfileField = {
  id: string;
  titulo: string;
  descricao: string;
  referencia: NormativeReference;
};

export type VideoRequirement = ReferencedGuidance & {
  id: string;
};

export type VideoMoment = {
  ordem: number;
  titulo: string;
  descricao: string;
  referencia: NormativeReference;
};

export type VideoPreparationGuidance = {
  id: string;
  texto: string;
  natureza: "dica-pratica";
};

export type VideoTimeSuggestion = {
  momento: string;
  sugestao: string;
};

export type VideoTutorialStep = {
  ordem: number;
  titulo: string;
  instrucao: string;
};

export type VideoToolGuide = {
  id: string;
  titulo: string;
  descricao: string;
  dificuldade: string;
  requisitos: string[];
  etapas: VideoTutorialStep[];
  errosComuns: string[];
  fonte?: { titulo: string; url: string };
  proximoPasso: string;
};

export type YouTubeTutorialStep = {
  ordem: number;
  titulo: string;
  instrucao: string;
  observacao?: string;
};

export type YouTubeTutorialMode = {
  id: "computador" | "celular";
  titulo: string;
  descricao: string;
  etapas: YouTubeTutorialStep[];
};

export type YouTubePrivacyOption = {
  titulo: string;
  descricao: string;
};

export type YouTubeOfficialResource = {
  titulo: string;
  url: string;
  contexto: string;
};

export type ProfessionalDimension = {
  ordem: number;
  titulo: string;
  descricao: string;
  referencia: NormativeReference;
};

export type PeiPremise = {
  ordem: number;
  titulo: string;
  referencia: NormativeReference;
};

export type SchoolIndicationRule = {
  id: string;
  titulo: string;
  descricao: string;
  referencia: NormativeReference;
};

export type TimelineEntry = {
  ordem: number;
  periodo: string;
  publico: string;
  etapa: string;
  responsavelOuCanal: string;
  referencia: NormativeReference;
};

export type ChecklistItem = {
  id: string;
  texto: string;
  natureza: NormativeNature;
  referencia?: NormativeReference;
};

export type FrequentlyAskedQuestion = {
  id: string;
  pergunta: string;
  resposta: string;
  referencias: NormativeReference[];
};

export const escolaSpConectaSource = {
  titulo: "Portaria da Diretoria de Pessoas nº 64, de 18 de novembro de 2026",
  publicacao: "Diário Oficial do Estado de São Paulo, edição de 18 de novembro de 2026",
  observacao: "Fonte normativa principal para esta estrutura de dados.",
} as const;

export const participantGroups: ParticipantGroup[] = [
  {
    id: "pleiteia-pei",
    titulo: "Docentes que pleiteiam vaga no PEI",
    descricao:
      "Docentes efetivos, não efetivos das categorias P, N e F, contratados e candidatos à contratação que pleiteiam vaga no PEI para 2027 e indicaram o credenciamento na Confirmação de Participação ou na inscrição do PSS 2027 da FGV.",
    referencia: { artigo: 2, inciso: "I" },
  },
  {
    id: "nao-permanencia-pei",
    titulo: "Indicados à não permanência em unidades PEI",
    descricao:
      "Docentes efetivos e não efetivos das categorias P, N e F em exercício em unidades escolares do PEI em 2026 que foram indicados à não permanência.",
    referencia: { artigo: 2, inciso: "II" },
  },
  {
    id: "nao-permanencia-tempo-parcial",
    titulo: "Indicados à não permanência em escolas de tempo parcial",
    descricao:
      "Docentes efetivos e não efetivos das categorias P, N e F em exercício em unidades escolares de tempo parcial em 2026 que foram indicados à não permanência.",
    referencia: { artigo: 2, inciso: "III" },
  },
];

export const participantSpecificSituations: SpecificSituation[] = [
  {
    id: "indicacao-2025",
    titulo: "Indicação à não permanência em 2025",
    descricao:
      "Participará do Processo Anual de Atribuição de Classes e Aulas 2027 pela unidade escolar em que estiver com aulas atribuídas.",
    referencia: { artigo: 2, paragrafo: "§ 1º" },
  },
  {
    id: "mais-de-uma-unidade",
    titulo: "Aulas atribuídas em mais de uma unidade",
    descricao:
      "Participará pela unidade em que tiver o maior número de aulas atribuídas, dentre aquelas em que não tiver sido indicado à não permanência.",
    referencia: { artigo: 2, paragrafo: "§ 2º" },
  },
  {
    id: "indicacao-parcial",
    titulo: "Indicação à não permanência em parte das unidades",
    descricao:
      "Não participará da análise de perfil profissional o docente indicado à não permanência em parte das unidades em que possui aulas atribuídas.",
    referencia: { artigo: 2, paragrafo: "§ 3º" },
  },
  {
    id: "restricao-unidade",
    titulo: "Restrição de atribuição",
    descricao:
      "O docente indicado à não permanência não poderá ter classes ou aulas atribuídas na unidade escolar em que foi indicado à não permanência.",
    referencia: { artigo: 2, paragrafo: "§ 4º" },
  },
];

export const processPhases: ProcessPhase[] = [
  { ordem: 1, titulo: "Registro do perfil profissional", descricao: "Registro das informações que compõem o perfil profissional.", referencia: { artigo: 3, inciso: "I" } },
  { ordem: 2, titulo: "Indicação das unidades escolares de interesse", descricao: "Indicação de unidades escolares em ordem de prioridade.", referencia: { artigo: 3, inciso: "II" } },
  { ordem: 3, titulo: "Validação do perfil profissional", descricao: "Manifestação da unidade escolar sobre a compatibilidade do perfil profissional.", referencia: { artigo: 3, inciso: "III" } },
  { ordem: 4, titulo: "Definição da unidade escolar de atuação", descricao: "Atendimento na primeira unidade que cumprir cumulativamente os requisitos normativos.", referencia: { artigo: 3, inciso: "IV" } },
];

export const professionalProfileFields: ProfessionalProfileField[] = [
  { id: "dados-funcionais", titulo: "Dados funcionais", descricao: "Informações importadas automaticamente da SED e disponibilizadas para consulta.", referencia: { artigo: 5, inciso: "I" } },
  { id: "disciplinas", titulo: "Disciplinas de interesse", descricao: "Disciplinas para as quais o docente é habilitado ou autorizado e que deseja lecionar.", referencia: { artigo: 5, inciso: "II" } },
  { id: "foto", titulo: "Foto", descricao: "Foto recente que permita a identificação do docente, em JPG ou PNG, com tamanho máximo de cinco MB.", referencia: { artigo: 5, inciso: "III" } },
  { id: "apresentacao-escrita", titulo: "Apresentação escrita", descricao: "Texto dirigido aos Diretores de Escola ou Diretores Escolares, com até 500 caracteres, sobre prática pedagógica e experiência profissional.", referencia: { artigo: 5, inciso: "IV" } },
  { id: "video", titulo: "Vídeo de apresentação", descricao: "Vídeo que atende aos requisitos e à estrutura definidos nos artigos 9º e 10.", referencia: { artigo: 5, inciso: "V" } },
];

export const functionalData = [
  "Nome",
  "Documentos de identificação",
  "Unidade Regional de Ensino (URE) de classificação",
  "Unidade escolar do vínculo",
  "Categoria",
  "Cargo ou função",
  "Data de início de exercício",
  "Situação de credenciamento no PEI, quando houver",
] as const;

export const profileRegistrationGuidance: ReferencedGuidance[] = [
  { texto: "O registro deve ser feito pelo próprio docente, inclusive quando estiver afastado no período previsto no cronograma.", natureza: "exigencia-normativa", referencia: { artigo: 6 } },
  { texto: "Os dados funcionais são importados automaticamente da SED e ficam disponíveis somente para consulta.", natureza: "exigencia-normativa", referencia: { artigo: 6 } },
  { texto: "Em caso de divergência nos dados funcionais, o docente deve solicitar correção à unidade escolar ou à URE dentro do prazo de registro.", natureza: "exigencia-normativa", referencia: { artigo: 6 } },
  { texto: "O docente deve manter selecionadas somente as disciplinas que deseja lecionar.", natureza: "exigencia-normativa", referencia: { artigo: 7 } },
  { texto: "Para docente efetivo, a disciplina de concurso permanece selecionada e não pode ser alterada.", natureza: "exigencia-normativa", referencia: { artigo: 7 } },
  { texto: "Docente não efetivo P, N ou F, contratado e candidato à contratação deve manter ao menos uma disciplina de interesse selecionada.", natureza: "exigencia-normativa", referencia: { artigo: 7 } },
];

export const videoRequirements: VideoRequirement[] = [
  { id: "duracao", texto: "Ter duração máxima de cinco minutos.", natureza: "exigencia-normativa", referencia: { artigo: 9, inciso: "I" } },
  { id: "autoria", texto: "Ser gravado pelo próprio docente, em arquivo único, com sua imagem e voz.", natureza: "exigencia-normativa", referencia: { artigo: 9, inciso: "II" } },
  { id: "estrutura", texto: "Seguir a estrutura estabelecida no artigo 10.", natureza: "exigencia-normativa", referencia: { artigo: 9, inciso: "III" } },
  { id: "youtube", texto: "Ser publicado no YouTube na modalidade “não listado”, com link e duração informados na funcionalidade Escola SP Conecta.", natureza: "exigencia-normativa", referencia: { artigo: 9, inciso: "IV" } },
  { id: "producao-terceiros", texto: "É vedada a utilização de vídeo produzido por terceiros ou de recursos que substituam a imagem ou a voz do docente.", natureza: "exigencia-normativa", referencia: { artigo: 9 } },
  { id: "disponibilidade", texto: "O docente deve manter o vídeo disponível como não listado até o término do ano letivo de 2027.", natureza: "exigencia-normativa", referencia: { artigo: 9 } },
  { id: "ambiente", texto: "A gravação deve ser realizada em ambiente silencioso e bem iluminado, com imagem nítida e áudio claro.", natureza: "exigencia-normativa", referencia: { artigo: 10, paragrafo: "§ 4º" } },
];

export const videoMoments: VideoMoment[] = [
  { ordem: 1, titulo: "Abertura", descricao: "Identificação funcional: nome completo, formação acadêmica, componentes curriculares de habilitação ou atuação e tempo de experiência no magistério.", referencia: { artigo: 10, inciso: "I" } },
  { ordem: 2, titulo: "Desenvolvimento", descricao: "Exposição das dimensões do perfil profissional que melhor evidenciem a prática pedagógica e as competências do docente.", referencia: { artigo: 10, inciso: "II" } },
  { ordem: 3, titulo: "Encerramento", descricao: "Síntese do interesse profissional e da aderência ao projeto pedagógico das unidades escolares indicadas.", referencia: { artigo: 10, inciso: "III" } },
];

export const professionalDimensions: ProfessionalDimension[] = [
  { ordem: 1, titulo: "Planejamento Pedagógico e Preparação de Aulas", descricao: "Diagnóstico da turma, adequação das estratégias e dos materiais oficiais à realidade dos estudantes e compromisso com a aprendizagem e com a formação contínua.", referencia: { artigo: 10, paragrafo: "§ 1º", inciso: "I" } },
  { ordem: 2, titulo: "Gestão de Sala de Aula", descricao: "Gestão do tempo e do espaço, seleção de habilidades prioritárias, personalização da ação pedagógica e utilização de exemplos concretos para facilitar a compreensão.", referencia: { artigo: 10, paragrafo: "§ 1º", inciso: "II" } },
  { ordem: 3, titulo: "Gestão de Engajamento e Clima de Confiança", descricao: "Reconhecimento dos avanços dos estudantes, manutenção de altas expectativas, uso de estímulo positivo e construção de ambiente de confiança mútua.", referencia: { artigo: 10, paragrafo: "§ 1º", inciso: "III" } },
  { ordem: 4, titulo: "Gestão da Aprendizagem (Avaliação e Recomposição)", descricao: "Estratégias de checagem e de avaliação contínua da compreensão, técnicas de recomposição, como retomadas, nivelamento e agrupamentos produtivos, e planejamento adaptado às necessidades da turma.", referencia: { artigo: 10, paragrafo: "§ 1º", inciso: "IV" } },
  { ordem: 5, titulo: "Gestão de Conflitos e Convivência", descricao: "Manutenção da ordem e da atenção, estabelecimento de combinados prévios com os estudantes, mediação de conflitos com postura profissional e promoção de vínculos de confiança.", referencia: { artigo: 10, paragrafo: "§ 1º", inciso: "V" } },
  { ordem: 6, titulo: "Relações Interpessoais e Colaboração", descricao: "Acolhimento, escuta ativa, engajamento no cotidiano escolar, postura de mediação e diálogo e trabalho em equipe com os pares.", referencia: { artigo: 10, paragrafo: "§ 1º", inciso: "VI" } },
  { ordem: 7, titulo: "Autoimagem e Desenvolvimento Profissional", descricao: "Autopercepção, empatia, coerência entre discurso e prática, abertura a práticas reflexivas e à colaboração com colegas e gestores e busca da formação contínua.", referencia: { artigo: 10, paragrafo: "§ 1º", inciso: "VII" } },
];

export const videoDimensionGuidance: ReferencedGuidance[] = [
  { texto: "O docente não precisa abordar todas as dimensões; deve priorizar e aprofundar as de maior aderência ao seu perfil.", natureza: "exigencia-normativa", referencia: { artigo: 10, paragrafo: "§ 2º" } },
  { texto: "As dimensões escolhidas devem ser apresentadas na ordem em que estão relacionadas, evitando a mera enumeração.", natureza: "exigencia-normativa", referencia: { artigo: 10, paragrafo: "§ 2º" } },
];

export const peiPremises: PeiPremise[] = [
  { ordem: 1, titulo: "Protagonismo", referencia: { artigo: 10, paragrafo: "§ 3º" } },
  { ordem: 2, titulo: "Formação Continuada", referencia: { artigo: 10, paragrafo: "§ 3º" } },
  { ordem: 3, titulo: "Excelência em Gestão", referencia: { artigo: 10, paragrafo: "§ 3º" } },
  { ordem: 4, titulo: "Corresponsabilidade", referencia: { artigo: 10, paragrafo: "§ 3º" } },
  { ordem: 5, titulo: "Replicabilidade", referencia: { artigo: 10, paragrafo: "§ 3º" } },
];

export const peiGuidance: ReferencedGuidance[] = [
  { texto: "Quem pleiteia vaga no PEI deve evidenciar, no desenvolvimento e no encerramento, o alinhamento da prática às cinco Premissas do Modelo de Gestão do PEI.", natureza: "exigencia-normativa", referencia: { artigo: 10, paragrafo: "§ 3º" } },
  { texto: "Também deve evidenciar disposição para o trabalho no Regime de Dedicação Exclusiva (RDE).", natureza: "exigencia-normativa", referencia: { artigo: 10, paragrafo: "§ 3º" } },
  { texto: "As expectativas pedagógicas relativas às dimensões e às Premissas do PEI constarão de documento orientador disponibilizado na funcionalidade Escola SP Conecta.", natureza: "exigencia-normativa", referencia: { artigo: 10, paragrafo: "§ 5º" } },
];

export const videoPreparationGuidance: VideoPreparationGuidance[] = [
  { id: "local-silencioso", texto: "Escolha um local silencioso e avise as pessoas próximas para reduzir interrupções.", natureza: "dica-pratica" },
  { id: "iluminacao-frontal", texto: "Prefira luz vindo da frente do rosto; evite uma janela ou luminária forte atrás de você.", natureza: "dica-pratica" },
  { id: "enquadramento", texto: "Posicione o rosto de forma confortável no enquadramento, deixando espaço acima da cabeça.", natureza: "dica-pratica" },
  { id: "camera-estavel", texto: "Apoie ou fixe a câmera para evitar tremores durante a gravação.", natureza: "dica-pratica" },
  { id: "microfone", texto: "Faça um teste curto para conferir se sua voz está clara e sem ruídos excessivos.", natureza: "dica-pratica" },
  { id: "teste-curto", texto: "Reproduza alguns segundos do teste antes de gravar a versão definitiva.", natureza: "dica-pratica" },
  { id: "duracao-arquivo", texto: "Ao finalizar, confira a duração, a imagem, o áudio e se o arquivo pode ser reproduzido.", natureza: "dica-pratica" },
];

export const videoTimeSuggestions: VideoTimeSuggestion[] = [
  { momento: "Abertura", sugestao: "Exemplo: cerca de 45 segundos para a identificação funcional." },
  { momento: "Desenvolvimento", sugestao: "Exemplo: cerca de 3 minutos e 30 segundos para as dimensões escolhidas e exemplos da prática." },
  { momento: "Encerramento", sugestao: "Exemplo: cerca de 45 segundos para motivação e aderência ao projeto pedagógico." },
];

export const videoTools: VideoToolGuide[] = [
  {
    id: "celular",
    titulo: "Celular",
    descricao: "Opção recomendada para quem precisa de um caminho simples e direto.",
    dificuldade: "Mais simples",
    requisitos: ["Celular com câmera", "Espaço livre para salvar o arquivo", "Apoio estável para o aparelho"],
    etapas: [
      { ordem: 1, titulo: "Abrir a câmera", instrucao: "Abra o aplicativo de câmera do celular e selecione o modo de vídeo." },
      { ordem: 2, titulo: "Preparar o enquadramento", instrucao: "Posicione o aparelho de forma estável, confira a luz e faça um teste de áudio." },
      { ordem: 3, titulo: "Gravar", instrucao: "Inicie a gravação, apresente o conteúdo e encerre quando concluir." },
      { ordem: 4, titulo: "Conferir", instrucao: "Reproduza o vídeo para conferir imagem, voz, duração e arquivo único." },
      { ordem: 5, titulo: "Localizar ou transferir", instrucao: "Encontre o vídeo na galeria ou no aplicativo de fotos. Transfira o arquivo para o computador somente se necessário." },
    ],
    errosComuns: ["Gravar com o aparelho apoiado de forma instável.", "Descobrir somente depois que o áudio não foi registrado.", "Não conferir a duração e a reprodução do arquivo."],
    proximoPasso: "Com o arquivo conferido, avance para a orientação de publicação no YouTube.",
  },
  {
    id: "camera-windows",
    titulo: "Câmera do Windows",
    descricao: "Alternativa para computadores Windows com câmera integrada ou webcam conectada.",
    dificuldade: "Simples",
    requisitos: ["Computador Windows", "Câmera integrada ou webcam", "Microfone funcionando"],
    etapas: [
      { ordem: 1, titulo: "Abrir o aplicativo", instrucao: "Abra Iniciar, pesquise por Câmera e selecione o aplicativo nos resultados." },
      { ordem: 2, titulo: "Selecionar vídeo", instrucao: "Escolha o modo Vídeo e confira a imagem da câmera e o enquadramento." },
      { ordem: 3, titulo: "Gravar e parar", instrucao: "Inicie a gravação e use o controle de parar quando concluir a apresentação." },
      { ordem: 4, titulo: "Reproduzir", instrucao: "Abra a miniatura ou o resultado disponível para verificar imagem, voz e duração." },
      { ordem: 5, titulo: "Localizar o arquivo", instrucao: "Use a opção de abrir a pasta ou o local indicado pelo aplicativo para encontrar o vídeo." },
    ],
    errosComuns: ["Selecionar uma câmera diferente da desejada.", "Não permitir o acesso à câmera ou ao microfone.", "Não abrir o arquivo final para conferência."],
    fonte: { titulo: "Orientações oficiais da Microsoft sobre o aplicativo Câmera", url: "https://support.microsoft.com/pt-br/windows/hardware/camera/how-to-use-the-windows-camera-app" },
    proximoPasso: "Depois de localizar e conferir o arquivo, avance para a publicação no YouTube.",
  },
  {
    id: "obs-studio",
    titulo: "OBS Studio",
    descricao: "Alternativa gratuita para computador, com recursos de gravação e captura de webcam.",
    dificuldade: "Intermediário",
    requisitos: ["Computador compatível", "OBS Studio baixado do site oficial", "Webcam e microfone disponíveis"],
    etapas: [
      { ordem: 1, titulo: "Baixar e iniciar", instrucao: "Baixe o OBS Studio pelo site oficial, instale e abra o programa." },
      { ordem: 2, titulo: "Configuração inicial", instrucao: "Execute o assistente de configuração automática quando ele for apresentado; não é necessário fazer ajustes avançados." },
      { ordem: 3, titulo: "Adicionar a câmera", instrucao: "Na cena, adicione uma fonte de Dispositivo de Captura de Vídeo e selecione a webcam." },
      { ordem: 4, titulo: "Conferir o áudio", instrucao: "Verifique os medidores do microfone no Mixer de Áudio e selecione o dispositivo correto se necessário." },
      { ordem: 5, titulo: "Gravar", instrucao: "Confira o enquadramento e use Iniciar Gravação. Ao terminar, use Interromper Gravação." },
      { ordem: 6, titulo: "Localizar o arquivo", instrucao: "Use o local de gravação indicado pelo OBS para encontrar e reproduzir o arquivo final." },
    ],
    errosComuns: ["Escolher Transmitir ao vivo em vez de Iniciar Gravação.", "Adicionar a webcam sem conferir o microfone.", "Não fazer uma gravação curta de teste."],
    fonte: { titulo: "Quick Start Guide oficial do OBS", url: "https://obsproject.com/kb/quick-start-guide" },
    proximoPasso: "O objetivo nesta etapa é gravar um arquivo; transmissão ao vivo não é necessária. Depois da conferência, avance para o YouTube.",
  },
  {
    id: "microsoft-teams",
    titulo: "Microsoft Teams",
    descricao: "Alternativa possível quando a conta institucional permite gravação de reuniões.",
    dificuldade: "Intermediário",
    requisitos: ["Conta do Teams com permissão para gravar", "Câmera e microfone", "Reunião adequada para teste e gravação"],
    etapas: [
      { ordem: 1, titulo: "Verificar a permissão", instrucao: "Confirme antes se a conta permite iniciar gravações; a função pode estar limitada pelas políticas da organização." },
      { ordem: 2, titulo: "Iniciar uma reunião", instrucao: "Inicie ou ingresse em uma reunião adequada para o teste e ative câmera e microfone." },
      { ordem: 3, titulo: "Iniciar a gravação", instrucao: "Use a opção de gravação disponível nos controles da reunião e confirme quando solicitado." },
      { ordem: 4, titulo: "Encerrar", instrucao: "Ao concluir, use os controles da reunião para interromper a gravação." },
      { ordem: 5, titulo: "Localizar e conferir", instrucao: "Localize o vídeo no OneDrive, SharePoint ou chat da reunião, conforme o tipo de reunião e as permissões da conta. Baixe-o somente se a conta permitir." },
    ],
    errosComuns: ["Assumir que toda conta pode gravar reuniões.", "Confundir gravação com transmissão ao vivo.", "Não conferir o local de armazenamento ou as permissões do arquivo."],
    fonte: { titulo: "Orientações oficiais da Microsoft sobre gravações no Teams", url: "https://support.microsoft.com/pt-br/teams/meetings/start-stop-and-find-meeting-recordings-in-microsoft-teams" },
    proximoPasso: "O Teams não é obrigatório. Se o arquivo estiver disponível e conferido, avance para a publicação no YouTube.",
  },
];

export const youtubePrerequisites: string[] = [
  "Conta Google com acesso;",
  "Canal do YouTube, quando necessário para enviar vídeos;",
  "Arquivo de vídeo já gravado e conferido;",
  "Conexão com a internet;",
  "Acesso ao YouTube Studio ou ao aplicativo do YouTube.",
];

export const youtubePrivacyOptions: YouTubePrivacyOption[] = [
  { titulo: "Público", descricao: "Pode ser assistido por qualquer pessoa e pode aparecer em pesquisas, recomendações e na página do canal." },
  { titulo: "Não listado", descricao: "Pode ser assistido e compartilhado por quem tiver o link, mas não aparece normalmente na pesquisa nem na página de vídeos do canal." },
  { titulo: "Privado", descricao: "O acesso fica restrito ao proprietário e às pessoas escolhidas na plataforma; não atende ao fluxo orientado pela Portaria para o envio do link." },
];

export const youtubeTutorialModes: YouTubeTutorialMode[] = [
  {
    id: "computador",
    titulo: "Computador",
    descricao: "Fluxo principal pelo YouTube Studio no navegador. Os nomes podem mudar com atualizações da plataforma; confirme sempre a opção equivalente na tela atual.",
    etapas: [
      { ordem: 1, titulo: "Conta Google", instrucao: "Acesse o YouTube e faça login com uma Conta Google que você já utilize. Se ainda não tiver uma, use o link oficial para criar a conta; o site da URE não solicita nem recebe suas credenciais.", observacao: "Não crie uma nova conta se a sua conta atual já permitir o acesso." },
      { ordem: 2, titulo: "Canal do YouTube", instrucao: "Verifique se a conta já possui um canal funcional. Para enviar vídeos, a ajuda oficial informa que é necessário ter um canal; crie um somente se ainda não existir um canal que você possa usar." },
      { ordem: 3, titulo: "YouTube Studio", instrucao: "Abra studio.youtube.com e faça login. No canto superior direito, procure a opção Criar e, em seguida, Enviar vídeos, conforme a documentação oficial atual." },
      { ordem: 4, titulo: "Selecionar o arquivo", instrucao: "Selecione o arquivo único de vídeo que você conferiu. Preencha apenas as informações solicitadas pelo YouTube e evite incluir dados pessoais desnecessários." },
      { ordem: 5, titulo: "Informar o público", instrucao: "Responda de forma verdadeira à pergunta sobre se o vídeo é conteúdo para crianças. Não escolha uma resposta automática apenas para avançar." },
      { ordem: 6, titulo: "Visibilidade", instrucao: "Na configuração de visibilidade, escolha Não listado. Essa é a opção necessária para o fluxo indicado na Portaria DIPES nº 64/2026.", observacao: "Não listado não significa privado: qualquer pessoa com o link poderá assistir e compartilhar o vídeo." },
      { ordem: 7, titulo: "Salvar ou publicar", instrucao: "Escolha a opção disponível para salvar/publicar o vídeo como Não listado. Aguarde o processamento necessário e confira novamente a visibilidade antes de sair." },
      { ordem: 8, titulo: "Copiar e testar o link", instrucao: "Copie o URL do vídeo, não o endereço do canal. Teste-o em uma janela anônima ou em uma sessão sem login e confira imagem, áudio e reprodução." },
      { ordem: 9, titulo: "Continuar na SED", instrucao: "Depois do teste, registre o link e a duração do vídeo na funcionalidade Escola SP Conecta da SED, conforme as orientações da próxima página. O site da URE não recebe esse link." },
    ],
  },
  {
    id: "celular",
    titulo: "Celular",
    descricao: "Fluxo pelo aplicativo do YouTube ou YouTube Studio. Android e iPhone podem apresentar nomes, posições e permissões diferentes.",
    etapas: [
      { ordem: 1, titulo: "Abrir o aplicativo", instrucao: "Abra o app YouTube ou YouTube Studio e confirme que está na Conta Google e no canal que pretende utilizar." },
      { ordem: 2, titulo: "Iniciar o envio", instrucao: "No app YouTube, procure Criar e depois Vídeo. No YouTube Studio, procure Criar e selecione o arquivo, conforme a versão do aplicativo." },
      { ordem: 3, titulo: "Selecionar o vídeo", instrucao: "Escolha o arquivo gravado e avance pelas informações apresentadas pelo aplicativo. Se a interface mostrar uma opção de Short, confira se ela se aplica; não altere o vídeo para um formato diferente sem necessidade." },
      { ordem: 4, titulo: "Informar detalhes e público", instrucao: "Preencha os detalhes solicitados e responda de forma verdadeira à configuração de público infantil. Não forneça dados pessoais desnecessários." },
      { ordem: 5, titulo: "Escolher Não listado", instrucao: "Localize as configurações de privacidade/visibilidade e selecione Não listado. O nome e a posição podem variar entre Android, iPhone e versões do aplicativo." },
      { ordem: 6, titulo: "Enviar e conferir", instrucao: "Use a opção disponível para enviar/publicar e aguarde o processamento. Depois, confirme a visibilidade e copie o link do vídeo." },
      { ordem: 7, titulo: "Testar e continuar", instrucao: "Abra o link em uma sessão sem login, confira a reprodução e então registre o link e a duração na funcionalidade Escola SP Conecta da SED." },
    ],
  },
];

export const youtubeOfficialResources: YouTubeOfficialResource[] = [
  { titulo: "Criar uma Conta Google", url: "https://accounts.google.com/signup", contexto: "Acesso oficial para criação de conta, quando necessário." },
  { titulo: "Criar um canal do YouTube", url: "https://support.google.com/youtube/answer/1646861?hl=pt-419", contexto: "Ajuda oficial sobre a necessidade e criação de canais." },
  { titulo: "YouTube Studio", url: "https://studio.youtube.com/", contexto: "Acesso ao estúdio oficial para gerenciar e enviar vídeos." },
  { titulo: "Enviar vídeos ao YouTube", url: "https://support.google.com/youtube/answer/57407?hl=pt-BR", contexto: "Instruções oficiais para computador e dispositivos móveis." },
  { titulo: "Mudar as configurações de privacidade", url: "https://support.google.com/youtube/answer/157177?hl=pt-BR", contexto: "Definições oficiais de Público, Privado e Não listado." },
];

export const schoolIndicationRules: SchoolIndicationRule[] = [
  { id: "limite-prioridade", titulo: "Limite e ordem", descricao: "Indicar até 20 unidades escolares, ordenadas por prioridade; a posição um é a de maior prioridade.", referencia: { artigo: 12 } },
  { id: "pleiteia-pei", titulo: "Quem pleiteia vaga no PEI", descricao: "Indicar exclusivamente unidades escolares do PEI circunscritas à URE indicada para credenciamento no programa.", referencia: { artigo: 12, inciso: "I" } },
  { id: "nao-permanencia-pei", titulo: "Indicado à não permanência em unidade PEI", descricao: "Pode indicar unidades escolares de tempo parcial e, se não tiver sido realocado no PEI em avaliação anterior, unidades que atendem o programa.", referencia: { artigo: 12, inciso: "II" } },
  { id: "nao-permanencia-parcial", titulo: "Indicado à não permanência em tempo parcial", descricao: "Indicar exclusivamente unidades escolares de tempo parcial.", referencia: { artigo: 12, inciso: "III" } },
  { id: "outras-ure", titulo: "Abrangência territorial", descricao: "Os docentes dos incisos II e III podem indicar unidades da própria URE ou de outras URE, nos termos do inciso I do artigo 7º-C da Resolução SEDUC nº 83/2025.", referencia: { artigo: 12 } },
  { id: "unidade-vedada", titulo: "Unidade vedada", descricao: "É vedada a indicação da unidade escolar em que o docente foi indicado à não permanência.", referencia: { artigo: 12 } },
];

export const attendanceGuidance: ReferencedGuidance[] = [
  { texto: "O docente indicado à não permanência que não tiver validação em nenhuma unidade, ou que não puder ser atendido nas unidades que reconheceram a compatibilidade, poderá ser indicado pela Comissão de Atribuição de Classes e Aulas da URE de classificação para atuar em programa ou projeto de unidade escolar com posto vago.", natureza: "exigencia-normativa", referencia: { artigo: 16 } },
  { texto: "Não sendo possível esse atendimento, o docente desenvolverá suas atividades na unidade escolar para a qual for encaminhado pela Comissão de Atribuição de Classes e Aulas da URE de classificação, na etapa inicial do processo de atribuição.", natureza: "exigencia-normativa", referencia: { artigo: 16 } },
  { texto: "O docente que pleiteia vaga no PEI e não tiver validação em nenhuma unidade indicada fica sujeito ao disposto no § 2º do artigo 7º-D da Resolução SEDUC nº 83/2025.", natureza: "exigencia-normativa", referencia: { artigo: 16 } },
  { texto: "O docente que pleiteia vaga no PEI e tiver validação, mas não for atendido por inexistência de vaga compatível com sua formação, permanece apto à alocação e designação no PEI.", natureza: "exigencia-normativa", referencia: { artigo: 16 } },
];

export const nonParticipationGuidance: ReferencedGuidance[] = [
  { texto: "É considerado não participante da análise de perfil profissional o docente que não registrar a confirmação de envio do perfil ou não indicar ao menos uma unidade escolar no prazo estabelecido.", natureza: "exigencia-normativa", referencia: { artigo: 17 } },
  { texto: "O docente que pleiteia vaga no PEI e não participar não será alocado nem designado no PEI no Processo Anual de Atribuição de Classes e Aulas 2027.", natureza: "exigencia-normativa", referencia: { artigo: 17 } },
  { texto: "Ao docente indicado à não permanência que não participar aplica-se o encaminhamento previsto no artigo 16.", natureza: "exigencia-normativa", referencia: { artigo: 17 } },
];

export const timeline: TimelineEntry[] = [
  { ordem: 1, periodo: "23 a 24/11/2026", publico: "Docentes indicados à não permanência", etapa: "Comunicação da indicação à não permanência", responsavelOuCanal: "Plataforma SED e e-mail cadastrado", referencia: { artigo: 18, inciso: "I" } },
  { ordem: 2, periodo: "24 a 27/11/2026", publico: "Docentes indicados à não permanência", etapa: "Registro do perfil, inclusão do vídeo e confirmação de envio", responsavelOuCanal: "Docente", referencia: { artigo: 18, inciso: "II" } },
  { ordem: 3, periodo: "24 a 27/11/2026", publico: "Docentes indicados à não permanência", etapa: "Indicação de até 20 unidades escolares em ordem de prioridade", responsavelOuCanal: "Docente", referencia: { artigo: 18, inciso: "III" } },
  { ordem: 4, periodo: "30/11 a 11/12/2026", publico: "Docentes que pleiteiam vaga no PEI", etapa: "Registro do perfil, inclusão do vídeo e confirmação de envio", responsavelOuCanal: "Docente", referencia: { artigo: 18, inciso: "IV" } },
  { ordem: 5, periodo: "30/11 a 11/12/2026", publico: "Docentes que pleiteiam vaga no PEI", etapa: "Indicação de até 20 unidades escolares em ordem de prioridade", responsavelOuCanal: "Docente", referencia: { artigo: 18, inciso: "V" } },
  { ordem: 6, periodo: "18 a 21/12/2026", publico: "Docentes que pleiteiam PEI e indicados à não permanência em unidades PEI", etapa: "Validação do perfil pelos Diretores de Escola ou Diretores Escolares das unidades PEI", responsavelOuCanal: "Diretores de Escola ou Diretores Escolares", referencia: { artigo: 18, inciso: "VI" } },
  { ordem: 7, periodo: "22 a 23/12/2026", publico: "Docentes participantes da validação em unidades PEI", etapa: "Divulgação do resultado da validação nas unidades PEI", responsavelOuCanal: "Unidades escolares do PEI", referencia: { artigo: 18, inciso: "VII" } },
  { ordem: 8, periodo: "21 a 23/12/2026", publico: "Docentes indicados à não permanência em unidades de tempo parcial", etapa: "Validação do perfil pelos Diretores de Escola ou Diretores Escolares", responsavelOuCanal: "Diretores de Escola ou Diretores Escolares das unidades de tempo parcial", referencia: { artigo: 18, inciso: "VIII" } },
  { ordem: 9, periodo: "18/01/2027", publico: "Docentes participantes da validação em unidades de tempo parcial", etapa: "Divulgação do resultado da validação nas unidades de tempo parcial", responsavelOuCanal: "Unidades escolares de tempo parcial", referencia: { artigo: 18, inciso: "IX" } },
];

export const checklist: ChecklistItem[] = [
  { id: "perfil-proprio", texto: "Registrei o perfil profissional pessoalmente dentro do prazo aplicável.", natureza: "exigencia-normativa", referencia: { artigo: 6 } },
  { id: "dados-conferidos", texto: "Conferi os dados funcionais e solicitei correção se encontrei divergência.", natureza: "exigencia-normativa", referencia: { artigo: 6 } },
  { id: "disciplinas", texto: "Mantive selecionadas somente as disciplinas que desejo lecionar, observadas as regras da minha categoria.", natureza: "exigencia-normativa", referencia: { artigo: 7 } },
  { id: "foto", texto: "Enviei foto recente identificável em JPG ou PNG, com até cinco MB.", natureza: "exigencia-normativa", referencia: { artigo: 8 } },
  { id: "apresentacao", texto: "Escrevi apresentação dirigida aos Diretores de Escola ou Diretores Escolares, com até 500 caracteres.", natureza: "exigencia-normativa", referencia: { artigo: 8 } },
  { id: "video", texto: "Gravei pessoalmente vídeo único, com minha imagem e voz, de no máximo cinco minutos.", natureza: "exigencia-normativa", referencia: { artigo: 9 } },
  { id: "estrutura-video", texto: "Organizei o vídeo em abertura, desenvolvimento e encerramento.", natureza: "exigencia-normativa", referencia: { artigo: 10 } },
  { id: "pei", texto: "Se pleiteio PEI, evidenciei as Premissas do Modelo de Gestão e disposição para o RDE.", natureza: "exigencia-normativa", referencia: { artigo: 10, paragrafo: "§ 3º" } },
  { id: "youtube", texto: "Publiquei o vídeo no YouTube como não listado e informei link e duração no Escola SP Conecta.", natureza: "exigencia-normativa", referencia: { artigo: 9, inciso: "IV" } },
  { id: "disponibilidade", texto: "Manterei o vídeo não listado disponível até o término do ano letivo de 2027.", natureza: "exigencia-normativa", referencia: { artigo: 9 } },
  { id: "confirmacao", texto: "Revisei o perfil e registrei a confirmação de envio.", natureza: "exigencia-normativa", referencia: { artigo: 11 } },
  { id: "escolas", texto: "Indiquei ao menos uma unidade escolar e, quando aplicável, até 20 em ordem de prioridade.", natureza: "exigencia-normativa", referencia: { artigo: 12 } },
  { id: "ambiente", texto: "Para facilitar a compreensão, gravei em ambiente silencioso e bem iluminado, com imagem nítida e áudio claro.", natureza: "dica-pratica", referencia: { artigo: 10 } },
  { id: "roteiro", texto: "Preparei previamente os pontos que pretendo apresentar, sem transformar essa preparação em exigência adicional.", natureza: "dica-pratica" },
];

export const frequentlyAskedQuestions: FrequentlyAskedQuestion[] = [
  { id: "publico", pergunta: "Quem participa da análise de perfil profissional?", resposta: "Participam os grupos definidos nos incisos I, II e III do artigo 2º, observadas as situações específicas dos seus parágrafos.", referencias: [{ artigo: 2 }] },
  { id: "fases", pergunta: "Quais são as fases do processo?", resposta: "Registro do perfil profissional; indicação das unidades escolares de interesse; validação do perfil profissional; e definição da unidade escolar de atuação.", referencias: [{ artigo: 3 }] },
  { id: "video-tamanho", pergunta: "Qual é a duração máxima do vídeo?", resposta: "A duração máxima é de cinco minutos.", referencias: [{ artigo: 9, inciso: "I" }] },
  { id: "dimensoes", pergunta: "É necessário abordar as sete dimensões profissionais?", resposta: "Não. O docente deve priorizar e aprofundar as dimensões de maior aderência ao seu perfil, apresentando-as na ordem em que estão relacionadas e evitando a mera enumeração.", referencias: [{ artigo: 10, paragrafo: "§ 2º" }] },
  { id: "pei", pergunta: "O que deve ser demonstrado por quem pleiteia vaga no PEI?", resposta: "Alinhamento da prática às cinco Premissas do Modelo de Gestão do PEI e disposição para o trabalho no Regime de Dedicação Exclusiva (RDE), no desenvolvimento e no encerramento do vídeo.", referencias: [{ artigo: 10, paragrafo: "§ 3º" }] },
  { id: "escolas", pergunta: "Quantas unidades escolares podem ser indicadas?", resposta: "Até 20 unidades escolares, ordenadas por prioridade, sendo a posição um a de maior prioridade. As unidades permitidas dependem da situação funcional do docente.", referencias: [{ artigo: 12 }] },
  { id: "confirmacao", pergunta: "O que acontece se não houver confirmação de envio ou indicação de unidade?", resposta: "O docente é considerado não participante da análise de perfil profissional, com as consequências previstas para o respectivo grupo.", referencias: [{ artigo: 17 }] },
  { id: "privacidade", pergunta: "Quem pode acessar o perfil profissional?", resposta: "O acesso é restrito aos Diretores de Escola ou Diretores Escolares das unidades indicadas e às equipes da URE e da SEDUC responsáveis pelo processo, sendo vedadas a reprodução e o compartilhamento.", referencias: [{ artigo: 19 }] },
];

export const dataProtectionGuidance: ReferencedGuidance[] = [
  { texto: "As informações do perfil, inclusive o vídeo, serão utilizadas exclusivamente para os fins da Portaria, observada a Lei Geral de Proteção de Dados Pessoais.", natureza: "exigencia-normativa", referencia: { artigo: 19 } },
  { texto: "O acesso é restrito aos Diretores de Escola ou Diretores Escolares das unidades indicadas e às equipes da URE e da SEDUC responsáveis pelo processo.", natureza: "exigencia-normativa", referencia: { artigo: 19 } },
  { texto: "É vedada a reprodução e o compartilhamento do conteúdo do perfil.", natureza: "exigencia-normativa", referencia: { artigo: 19 } },
];

export type EscolaSpSubpageKey = "perfil" | "gravar-video" | "publicar-youtube" | "envio-sed" | "cronograma" | "checklist";

export type EscolaSpSubpage = {
  slug: EscolaSpSubpageKey;
  titulo: string;
  descricao: string;
  eyebrow: string;
};

export const escolaSpSubpages: EscolaSpSubpage[] = [
  { slug: "perfil", titulo: "Inscrição e perfil", descricao: "Públicos participantes, fases da análise e informações que compõem o perfil profissional.", eyebrow: "01 · Inscrição" },
  { slug: "gravar-video", titulo: "Preparação e gravação do vídeo", descricao: "Requisitos normativos, estrutura, dimensões profissionais e orientações específicas do PEI.", eyebrow: "02 · Vídeo" },
  { slug: "publicar-youtube", titulo: "Publicação no YouTube", descricao: "Orientações confirmadas para publicar o vídeo como não listado e preparar o tutorial futuro.", eyebrow: "03 · Publicação" },
  { slug: "envio-sed", titulo: "Envio e confirmação na SED", descricao: "Revisão, confirmação do envio, indicação de unidades e situações de atendimento.", eyebrow: "04 · SED" },
  { slug: "cronograma", titulo: "Cronograma oficial", descricao: "As nove etapas, públicos, períodos e responsáveis previstos no artigo 18.", eyebrow: "05 · Prazos" },
  { slug: "checklist", titulo: "Checklist e dúvidas frequentes", descricao: "Itens de conferência, perguntas frequentes e proteção das informações do perfil.", eyebrow: "06 · Conferência" },
];

export const submissionGuidance: ReferencedGuidance[] = [
  { texto: "Concluído o registro do perfil, o docente deve revisá-lo e registrar a confirmação de envio na funcionalidade Escola SP Conecta.", natureza: "exigencia-normativa", referencia: { artigo: 11 } },
  { texto: "O perfil somente será disponibilizado aos Diretores de Escola ou Diretores Escolares após a confirmação de envio.", natureza: "exigencia-normativa", referencia: { artigo: 11 } },
  { texto: "O docente poderá alterar as informações do perfil até o término do prazo de registro previsto no cronograma.", natureza: "exigencia-normativa", referencia: { artigo: 11 } },
  { texto: "A relação de unidades indicadas e sua ordem de prioridade serão visíveis somente ao docente.", natureza: "exigencia-normativa", referencia: { artigo: 12 } },
];

export const validationGuidance: ReferencedGuidance[] = [
  { texto: "O Diretor de Escola ou Diretor Escolar se manifestará quanto à compatibilidade do perfil por meio das opções “Conectar” ou “Não conectar”, disponíveis na funcionalidade Escola SP Conecta.", natureza: "exigencia-normativa", referencia: { artigo: 13 } },
  { texto: "A opção “Conectar” corresponde ao reconhecimento da compatibilidade do perfil profissional.", natureza: "exigencia-normativa", referencia: { artigo: 13 } },
  { texto: "A manifestação poderá ser alterada até o término do prazo de validação.", natureza: "exigencia-normativa", referencia: { artigo: 13 } },
  { texto: "O docente sem manifestação registrada ao término do prazo de validação será considerado não conectado com a unidade escolar.", natureza: "exigencia-normativa", referencia: { artigo: 13 } },
];
