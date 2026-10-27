import AreaCard from "@/components/eec/AreaCard";
import { eecAreas } from "@/data/eec";

export default function EecPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-800">URE Ribeirão Preto</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Equipe de Especialistas em Currículo — EEC</h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">Materiais, orientações e recursos pedagógicos organizados por área do conhecimento.</p>
        </header>

        <section className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm" aria-labelledby="hora-enem-titulo">
          <div className="grid gap-8 bg-blue-900 px-6 py-8 text-white sm:px-10 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Destaque</p>
              <h2 id="hora-enem-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Hora do ENEM</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50">Materiais e recursos de apoio para a preparação dos estudantes para o ENEM.</p>
            </div>
            <p className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm leading-6 text-blue-50">Novos conteúdos serão disponibilizados gradualmente por área do conhecimento.</p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="areas-titulo">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-800">Áreas do conhecimento</p>
              <h2 id="areas-titulo" className="mt-2 text-2xl font-semibold text-slate-900">Encontre materiais por área</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">Selecione uma área para acessar os conteúdos organizados pela EEC.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {eecAreas.map((area) => <AreaCard key={area.slug} area={area} />)}
          </div>
        </section>
      </div>
    </main>
  );
}
