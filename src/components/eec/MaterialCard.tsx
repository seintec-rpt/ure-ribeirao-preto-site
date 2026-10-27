import HighlightMatch from "@/components/supervisao/HighlightMatch";
import { materialTypeLabels, type EecMaterial } from "@/data/eec";

export default function MaterialCard({ material, query = "" }: { material: EecMaterial; query?: string }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900"><HighlightMatch text={material.titulo} query={query} /></h3>
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800">{materialTypeLabels[material.tipo]}</span>
      </div>
      {material.descricao && <p className="mt-3 text-sm leading-6 text-slate-600">{material.descricao}</p>}
      {material.arquivo && <p className="mt-3 text-sm text-slate-600">Arquivo original: <span className="font-medium text-slate-700"><HighlightMatch text={material.arquivo} query={query} /></span></p>}
      {material.origem && <p className="mt-2 text-sm text-slate-500">Origem: <span className="font-medium text-slate-600"><HighlightMatch text={material.origem} query={query} /></span></p>}
      {material.tags && <p className="mt-3 text-xs text-slate-500">{material.tags.join(" · ")}</p>}
      {material.url ? (
        <a href={material.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-lg bg-blue-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">
          Abrir material
        </a>
      ) : (
        <p className="mt-5 text-sm font-medium text-slate-500">Link ainda não cadastrado</p>
      )}
    </article>
  );
}
