import Link from "next/link";
import type { EecArea } from "@/data/eec";

export default function AreaCard({ area }: { area: EecArea }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      <div className="mb-5 h-1 w-12 rounded-full bg-blue-700" aria-hidden="true" />
      <h2 className="text-xl font-semibold leading-snug text-slate-900">{area.titulo}</h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{area.descricao}</p>
      <Link
        href={area.rota}
        className="mt-6 inline-flex w-fit rounded-lg border border-blue-200 px-4 py-2.5 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
      >
        Acessar materiais
      </Link>
    </article>
  );
}
