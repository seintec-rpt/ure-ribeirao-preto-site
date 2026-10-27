"use client";

import { useMemo, useState } from "react";
import { materialTypeLabels, type EecMaterial } from "@/data/eec";
import MaterialCard from "./MaterialCard";

function normalize(value: string) { return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }

export default function MaterialSearch({ materials }: { materials: EecMaterial[] }) {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    if (!normalizedQuery) return [];
    return materials.filter((material) => [material.titulo, material.arquivo ?? "", material.origem ?? "", material.categoria, material.subcategoria ?? "", material.ano ?? "", materialTypeLabels[material.tipo], material.tipo, ...(material.tags ?? [])].some((value) => normalize(value).includes(normalizedQuery)));
  }, [materials, query]);

  return (
    <section className="mt-12" aria-labelledby="busca-materiais-titulo">
      <h2 id="busca-materiais-titulo" className="text-2xl font-semibold text-slate-900">Buscar materiais</h2>
      <label htmlFor="busca-materiais" className="sr-only">Buscar materiais por título, categoria, ano ou tag</label>
      <input id="busca-materiais" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar material, categoria ou ano..." className="mt-4 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-200" />
      {query.trim() && <p className="mt-3 text-sm text-slate-600" aria-live="polite">{matches.length} {matches.length === 1 ? "material encontrado" : "materiais encontrados"}</p>}
      {matches.length > 0 && <div className="mt-4 grid gap-4 md:grid-cols-2">{matches.map((material) => <MaterialCard key={material.id} material={material} query={query} />)}</div>}
      {query.trim() && matches.length === 0 && <p className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white px-5 py-7 text-center text-slate-600">Nenhum material encontrado para sua busca.</p>}
    </section>
  );
}
