export type Contato = {
  nome: string;
  funcao?: string;
  telefone?: string;
  observacao?: string;
};

export type Secao = {
  sigla: string;
  chefe?: Contato;
  equipe: Contato[];
};

export type Setor = {
  sigla: string;
  nome: string;
  chefe?: Contato;
  secoes: Secao[];
  outros: Contato[];
};

export type ContatoRapido = { titulo: string; contatos: Contato[] };

export const contatosRapidos: ContatoRapido[] = [
  {
    titulo: "Protocolo",
    contatos: [
      { nome: "Rita", telefone: "3604-2313" },
      { nome: "Guido", telefone: "3519-3941" },
    ],
  },
  {
    titulo: "Plantão da Supervisão de Ensino",
    contatos: [
      { nome: "", telefone: "3519-3945" },
      { nome: "", telefone: "3519-3911" },
      { nome: "", telefone: "3519-3921" },
    ],
  },
];

export const setores: Setor[] = [
  {
    sigla: "SEAFIN",
    nome: "Serviço de Administração e Finanças",
    chefe: { nome: "Alison", funcao: "Chefe de Serviço", telefone: "3519-3912" },
    secoes: [
      {
        sigla: "SEFIN",
        chefe: { nome: "Waldilaine", funcao: "Chefe de Seção", telefone: "3519-3966" },
        equipe: [
          { nome: "Alessandro", telefone: "3519-3944" },
          { nome: "Gilciliano", telefone: "3604-2309" },
          { nome: "Claudio", telefone: "3604-2308" },
          { nome: "Larissa", telefone: "3604-2385" },
          { nome: "Julio", telefone: "3519-3947" },
          { nome: "Suzana", telefone: "3519-3959" },
        ],
      },
      {
        sigla: "SECOMSE",
        chefe: { nome: "Ricardo", funcao: "Chefe de Seção", telefone: "3519-3942" },
        equipe: [
          { nome: "Bianca", telefone: "3519-3957" },
          { nome: "Marcos", telefone: "3604-2305" },
          { nome: "Breno", telefone: "3519-3950" },
        ],
      },
    ],
    outros: [
      { nome: "Ricardo", telefone: "3519-3940" },
      { nome: "Fernando", telefone: "3519-3943" },
    ],
  },
  {
    sigla: "SEOM",
    nome: "Serviço de Obras e Manutenção Escolar",
    chefe: { nome: "Carlos", funcao: "Chefe de Serviço", telefone: "3604-2382" },
    secoes: [
      {
        sigla: "SEFISC",
        chefe: { nome: "Leticia Rossi", funcao: "Chefe de Seção", telefone: "3519-3958" },
        equipe: [
          { nome: "Aline Pereira", telefone: "3519-3952" },
          { nome: "Paulo", telefone: "3519-3938" },
          { nome: "Criscia", telefone: "3604-2381" },
        ],
      },
    ],
    outros: [],
  },
  {
    sigla: "SEINTEC",
    nome: "Serviço de Informações Educacionais e Tecnologia",
    chefe: { nome: "Leonardo", funcao: "Chefe de Serviço", telefone: "3519-3962" },
    secoes: [{ sigla: "SETEC", chefe: { nome: "Ana Carolina", funcao: "Chefe de Seção", telefone: "3519-3935" }, equipe: [{ nome: "Cristiano", telefone: "3604-2380" }] }],
    outros: [],
  },
  {
    sigla: "SEGRE",
    nome: "Serviço de Gestão da Rede Escolar",
    chefe: { nome: "Laura", funcao: "Chefe de Serviço", telefone: "3519-3939" },
    secoes: [
      {
        sigla: "SEVESC",
        chefe: { nome: "Daniela", funcao: "Chefe de Seção", telefone: "3519-3920" },
        equipe: [
          { nome: "", telefone: "3519-3954" },
          { nome: "Eliana", telefone: "3519-3964" },
          { nome: "Silvio", telefone: "3519-3948" },
        ],
      },
      {
        sigla: "SEMAT",
        chefe: { nome: "Silvana", funcao: "Chefe de Seção", telefone: "3519-3930" },
        equipe: [
          { nome: "Liliane", telefone: "3519-3928" },
          { nome: "Juliana", telefone: "3519-3924" },
          { nome: "Paulo", telefone: "3604-2303" },
        ],
      },
    ],
    outros: [],
  },
  {
    sigla: "ASURE",
    nome: "Assessoria Técnica (Gabinete)",
    secoes: [],
    outros: [
      { nome: "Tatiane", telefone: "3604-2312" },
      { nome: "Fabiana", telefone: "3519-3946" },
      { nome: "Leticia", telefone: "3519-3931" },
      { nome: "Marilei", telefone: "3519-3963" },
      { nome: "Raphaela", telefone: "3604-2314" },
    ],
  },
  {
    sigla: "SEPES",
    nome: "Serviço de Pessoas",
    chefe: { nome: "Gabriella", funcao: "Chefe de Serviço", telefone: "3519-3934" },
    secoes: [
      {
        sigla: "SEFREP",
        chefe: { nome: "Patricia", funcao: "Chefe de Seção", telefone: "3519-3955" },
        equipe: [
          { nome: "Lucas", telefone: "3519-3960" },
          { nome: "Luzia", telefone: "3519-3956" },
          { nome: "Cleber", telefone: "3519-2307" },
          { nome: "Thamara", telefone: "3604-2301" },
          { nome: "Tatiana", telefone: "3519-3965" },
        ],
      },
      {
        sigla: "SEAPE",
        chefe: { nome: "João", funcao: "Chefe de Seção", telefone: "3519-3932" },
        equipe: [
          { nome: "Regina", telefone: "3604-2311" },
          { nome: "Nathalia", telefone: "3519-3933" },
          { nome: "Fabiano", telefone: "3604-2304" },
          { nome: "Fabiana", telefone: "3519-3937" },
          { nome: "Margarete", telefone: "3519-3967" },
          { nome: "Lincoln", telefone: "3519-3925" },
          { nome: "Aline A.", telefone: "3519-3968" },
        ],
      },
    ],
    outros: [
      { nome: "Eliana", telefone: "3604-2306" },
      { nome: "Danielle", telefone: "3519-3951" },
      { nome: "Sepes", telefone: "3519-3961" },
    ],
  },
  {
    sigla: "EEC",
    nome: "Equipe de Especialistas em Currículo",
    chefe: { nome: "Camila", funcao: "Coordenadora de Equipe Curricular", telefone: "3519-3923" },
    secoes: [
      { sigla: "Educação Especial", equipe: [{ nome: "Sandra", telefone: "3519-3922" }, { nome: "Janaína", telefone: "3519-3922" }] },
      { sigla: "Lingua Portuguesa", equipe: [{ nome: "Fernanda", telefone: "3519-3918" }, { nome: "Eliane", telefone: "3519-3918" }, { nome: "John", telefone: "3519-3918" }] },
      { sigla: "Ciências Humanas", equipe: [{ nome: "André", telefone: "3519-3913" }, { nome: "Leandro", telefone: "3519-3913" }, { nome: "Joselia", telefone: "3519-3913" }] },
      { sigla: "Matemática", equipe: [{ nome: "Camila", telefone: "3519-3914" }, { nome: "Greice", telefone: "3519-3914" }] },
      { sigla: "Ciências da Natureza", equipe: [{ nome: "Mateus", telefone: "3519-3969" }, { nome: "Sara", telefone: "3519-3969" }, { nome: "Carol", telefone: "3519-3969" }, { nome: "Leandro P.", telefone: "3519-3969" }] },
      { sigla: "Anos Iniciais", equipe: [{ nome: "Ines", telefone: "3519-3918" }, { nome: "Vanessa", telefone: "3519-3918" }, { nome: "Leticia", telefone: "3519-3918" }] },
      { sigla: "Tecnologia", equipe: [{ nome: "Pedro Paulo", telefone: "3519-3936" }] },
      { sigla: "Arte", equipe: [{ nome: "Marcel", telefone: "3519-3927" }] },
      { sigla: "Lingua Inglesa", equipe: [{ nome: "Rebeca" }] },
      { sigla: "Conviva", equipe: [{ nome: "Monica", telefone: "3604-2310" }, { nome: "Mercia", telefone: "3604-2310" }] },
      { sigla: "PEI", equipe: [{ nome: "Paula" }, { nome: "Ana Paula A." }, { nome: "Ana Paula D." }, { nome: "Felipe" }] },
      { sigla: "Jurídico Pedagógico", equipe: [{ nome: "Sofia", telefone: "3519-3929" }] },
      { sigla: "Educação Física", equipe: [{ nome: "Mariana", telefone: "3519-3918" }, { nome: "Marcos", telefone: "3519-3918" }, { nome: "Vinicius", telefone: "3519-3918" }] },
    ],
    outros: [],
  },
  {
    sigla: "ESE",
    nome: "Equipe de Supervisão de Ensino",
    secoes: [
      {
        sigla: "Sala 01",
        equipe: [
          { nome: "Ana C. Sampaio", telefone: "3604-2315" },
          { nome: "Luciana", telefone: "3604-2316" },
          { nome: "Jefferson", telefone: "3604-2317" },
          { nome: "Julio", telefone: "3604-2343" },
          { nome: "Patricia", telefone: "3604-2338" },
          { nome: "Rosana", telefone: "3604-2320" },
          { nome: "Mariana", telefone: "3604-2321" },
          { nome: "Susana", telefone: "3604-2322" },
        ],
      },
      {
        sigla: "Sala 02",
        equipe: [
          { nome: "Renata", telefone: "3604-2344" },
          { nome: "Dorval", telefone: "3604-2324" },
          { nome: "Maria Paes", telefone: "3604-2335" },
          { nome: "Messias", telefone: "3604-2326" },
          { nome: "Flávia", telefone: "3604-2328" },
          { nome: "Dagmar", telefone: "3604-2336" },
          { nome: "Simone", telefone: "3604-2329" },
          { nome: "Renato", telefone: "3604-2330" },
        ],
      },
      {
        sigla: "Sala 03",
        equipe: [
          { nome: "Ana C. Fernandes", telefone: "3604-2331" },
          { nome: "Carlos", telefone: "3604-2332" },
          { nome: "Katia", telefone: "3604-2333" },
          { nome: "Gislaine", telefone: "3604-2334" },
          { nome: "Camila", telefone: "3604-2318" },
          { nome: "Fabio", telefone: "3604-2319" },
          { nome: "Tamie", telefone: "3604-2337" },
          { nome: "Alexandra", telefone: "3604-2323" },
        ],
      },
      {
        sigla: "Sala 04",
        equipe: [
          { nome: "Aline", telefone: "3604-2339" },
          { nome: "Elaine", telefone: "3604-2340" },
          { nome: "Fatima Mara", telefone: "3604-2341" },
          { nome: "", telefone: "3604-2325" },
          { nome: "Isabel", telefone: "3604-2342" },
          { nome: "André", telefone: "3604-2327" },
          { nome: "Livia", telefone: "3604-2345" },
        ],
      },
    ],
    outros: [],
  },
];
