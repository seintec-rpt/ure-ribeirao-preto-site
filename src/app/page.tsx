import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16">
      <section className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
          URE Ribeirão Preto
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Recursos Digitais
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          Esta aplicação reúne páginas e ferramentas complementares ao site
          institucional.
        </p>
        <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-blue-800" aria-hidden="true" />
        <Link
          href="/setores-da-supervisao-de-ensino"
          className="mt-10 inline-flex rounded-lg bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
        >
          Setores da Supervisão de Ensino
        </Link>
        <Link
          href="/canais-de-comunicacao"
          className="mt-3 inline-flex rounded-lg border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
        >
          Canais de Comunicação
        </Link>
      </section>
    </main>
  );
}
