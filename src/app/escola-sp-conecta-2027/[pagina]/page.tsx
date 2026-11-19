import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EscolaSpConectaSubpage from "@/components/escola-sp-conecta/EscolaSpConectaSubpage";
import { escolaSpSubpages, type EscolaSpSubpageKey } from "@/data/escolaSpConecta";

export function generateStaticParams() {
  return escolaSpSubpages.map(({ slug }) => ({ pagina: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ pagina: string }> }): Promise<Metadata> {
  const { pagina } = await params;
  const page = escolaSpSubpages.find((item) => item.slug === pagina);
  return page ? { title: `${page.titulo} | Escola SP Conecta 2027`, description: page.descricao } : { title: "Escola SP Conecta 2027 | URE Ribeirão Preto" };
}

export default async function EscolaSpConectaSubpageRoute({ params }: { params: Promise<{ pagina: string }> }) {
  const { pagina } = await params;
  const page = escolaSpSubpages.find((item) => item.slug === pagina as EscolaSpSubpageKey);
  if (!page) notFound();
  return <main lang="pt-BR" className="escola-sp-theme min-h-screen px-4 py-6 sm:px-6 sm:py-10 lg:px-8"><EscolaSpConectaSubpage page={page} /></main>;
}
