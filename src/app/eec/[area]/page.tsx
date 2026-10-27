import Link from "next/link";
import { notFound } from "next/navigation";
import { eecAreas } from "@/data/eec";

export function generateStaticParams() {
  return eecAreas.map(({ slug }) => ({ area: slug }));
}

export default async function EecAreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area: slug } = await params;
  const area = eecAreas.find((item) => item.slug === slug);

  if (!area) notFound();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-10 sm:px-8 sm:py-16">
      <section className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-800">Equipe de Especialistas em Currículo — EEC</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">{area.titulo}</h1>
        <p className="mt-5 text-base leading-7 text-slate-600">Conteúdos em preparação.</p>
        <Link href="/eec" className="mt-8 inline-flex rounded-lg bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">
          Voltar para EEC
        </Link>
      </section>
    </main>
  );
}
