import Link from "next/link";
import type { EecLibraryCategory, EecSubcategory, EecYear } from "@/data/eec";

function countMaterials(value: EecLibraryCategory | EecSubcategory | EecYear): number {
  if ("anos" in value) return (value.anos ?? []).reduce((total, year) => total + year.materiais.length, 0);
  if ("subcategorias" in value) {
    return (value.materiais?.length ?? 0) + (value.subcategorias ?? []).reduce((total, subcategory) => total + countMaterials(subcategory), 0);
  }
  return value.materiais?.length ?? 0;
}

export default function CategoryCard({ category, href }: { category: EecLibraryCategory | EecSubcategory | EecYear; href: string }) {
  const count = countMaterials(category);
  const hasChildren = "subcategorias" in category ? (category.subcategorias?.length ?? 0) > 0 : "anos" in category && (category.anos?.length ?? 0) > 0;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      <h2 className="text-xl font-semibold text-slate-900">{category.titulo}</h2>
      {"descricao" in category && <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{category.descricao}</p>}
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {count > 0 ? `${count} ${count === 1 ? "material" : "materiais"}` : hasChildren ? "Subcategorias disponíveis" : "Em preparação"}
      </p>
      <Link href={href} className="mt-5 inline-flex w-fit rounded-lg border border-blue-200 px-4 py-2.5 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">
        Acessar
      </Link>
    </article>
  );
}
