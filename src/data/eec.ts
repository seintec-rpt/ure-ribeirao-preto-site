export type EecArea = {
  slug: string;
  titulo: string;
  descricao: string;
  rota: string;
};

export const eecAreas: EecArea[] = [
  {
    slug: "linguagens",
    titulo: "Linguagens e suas Tecnologias",
    descricao: "Materiais e orientações para práticas de linguagem, comunicação e expressão.",
    rota: "/eec/linguagens",
  },
  {
    slug: "matematica",
    titulo: "Matemática e suas Tecnologias",
    descricao: "Recursos para apoiar o ensino e a aprendizagem da matemática.",
    rota: "/eec/matematica",
  },
  {
    slug: "ciencias-da-natureza",
    titulo: "Ciências da Natureza e suas Tecnologias",
    descricao: "Orientações e materiais para o trabalho com fenômenos naturais e tecnologia.",
    rota: "/eec/ciencias-da-natureza",
  },
  {
    slug: "ciencias-humanas",
    titulo: "Ciências Humanas e Sociais Aplicadas",
    descricao: "Materiais para refletir sobre sociedade, cultura, história, espaço e cidadania.",
    rota: "/eec/ciencias-humanas",
  },
  {
    slug: "tecnologia",
    titulo: "Tecnologia",
    descricao: "Recursos e orientações para integrar tecnologia aos processos pedagógicos.",
    rota: "/eec/tecnologia",
  },
];

export type MaterialType =
  | "pdf"
  | "apresentacao"
  | "planilha"
  | "powerpoint"
  | "video"
  | "link"
  | "image"
  | "document"
  | "folder"
  | "other";

export const materialTypeLabels: Record<MaterialType, string> = {
  pdf: "PDF",
  apresentacao: "Apresentação",
  planilha: "Planilha",
  powerpoint: "PowerPoint",
  video: "Vídeo",
  link: "Link",
  image: "Imagem",
  document: "Documento",
  folder: "Pasta",
  other: "Recurso",
};

export type EecMaterial = {
  id: string;
  titulo: string;
  descricao?: string;
  tipo: MaterialType;
  url?: string;
  origem?: string;
  arquivo?: string;
  categoria: string;
  subcategoria?: string;
  ano?: string;
  tags?: string[];
};

export type EecYear = {
  slug: string;
  titulo: string;
  materiais: EecMaterial[];
};

export type EecSubcategory = {
  slug: string;
  titulo: string;
  descricao: string;
  anos?: EecYear[];
  materiais?: EecMaterial[];
};

export type EecLibraryCategory = {
  slug: string;
  titulo: string;
  descricao: string;
  subcategorias?: EecSubcategory[];
  materiais?: EecMaterial[];
};

const cienciasDoSetimoAno: EecMaterial[] = [
  "Aula 12 - 7 ano",
  "Aula 13 - 7 ano",
  "Aula 14 - 7 ano",
  "Aula 15 - 7 ano",
  "CIE_AF_2026",
].map((titulo, index) => ({
  id: `ciencias-7-ano-${index + 12}`,
  titulo,
  tipo: "pdf",
  categoria: "Documentos de Apoio",
  subcategoria: "Ciências",
  ano: "7º Ano",
  tags: ["Ciências", "7º Ano"],
}));

export const cienciasNaturezaCategories: EecLibraryCategory[] = [
  {
    slug: "bibliografia",
    titulo: "Bibliografia",
    descricao: "Referências e materiais bibliográficos para apoiar o trabalho pedagógico.",
  },
  {
    slug: "documentos-de-apoio",
    titulo: "Documentos de Apoio",
    descricao: "Documentos organizados por componente e ano escolar.",
    subcategorias: [
      { slug: "biologia", titulo: "Biologia", descricao: "Materiais de apoio para Biologia." },
      {
        slug: "ciencias",
        titulo: "Ciências",
        descricao: "Materiais de apoio para Ciências no Ensino Fundamental.",
        anos: [
          { slug: "6-ano", titulo: "6º Ano", materiais: [] },
          { slug: "7-ano", titulo: "7º Ano", materiais: cienciasDoSetimoAno },
          { slug: "8-ano", titulo: "8º Ano", materiais: [] },
          { slug: "9-ano", titulo: "9º Ano", materiais: [] },
        ],
      },
      { slug: "fisica", titulo: "Física", descricao: "Materiais de apoio para Física." },
      { slug: "quimica", titulo: "Química", descricao: "Materiais de apoio para Química." },
    ],
  },
  {
    slug: "formacoes",
    titulo: "Formações",
    descricao: "Formações e orientações para o desenvolvimento profissional.",
  },
  {
    slug: "tutoriais",
    titulo: "Tutoriais",
    descricao: "Tutoriais para apoiar práticas e recursos pedagógicos.",
  },
  {
    slug: "gabaritos",
    titulo: "Gabaritos",
    descricao: "Gabaritos e materiais de apoio para conferência das atividades.",
  },
];

export const cienciasNaturezaMaterials = cienciasNaturezaCategories.flatMap((category) => [
  ...(category.materiais ?? []),
  ...(category.subcategorias ?? []).flatMap((subcategory) => [
    ...(subcategory.materiais ?? []),
    ...(subcategory.anos ?? []).flatMap((year) => year.materiais),
  ]),
]);
