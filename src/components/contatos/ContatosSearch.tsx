"use client";

import { useMemo, useState } from "react";
import type { ContatoRapido, Setor } from "@/data/contatos";
import ContatoCard from "./ContatoCard";
import SetorAccordion from "./SetorAccordion";

type ContatosSearchProps = { setores: Setor[]; contatosRapidos: ContatoRapido[] };

function normalize(value: string) { return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }

function contactSearchText(contato: { nome: string; funcao?: string; telefone?: string }) {
  return [contato.nome, contato.funcao ?? "", contato.telefone ?? ""];
}

function setorSearchText(setor: Setor) {
  return [
    setor.sigla,
    setor.nome,
    ...(setor.chefe ? contactSearchText(setor.chefe) : []),
    ...setor.secoes.flatMap((secao) => [secao.sigla, ...(secao.chefe ? contactSearchText(secao.chefe) : []), ...secao.equipe.flatMap(contactSearchText)]),
    ...setor.outros.flatMap(contactSearchText),
  ];
}

function filterSetores(setores: Setor[], query: string) {
  const normalizedQuery = normalize(query.trim());
  if (!normalizedQuery) return setores;
  return setores.filter((setor) => setorSearchText(setor).some((value) => normalize(value).includes(normalizedQuery)));
}

function sortSetores(setores: Setor[]) {
  return setores
    .map((setor) => ({
      ...setor,
      secoes: [...setor.secoes].sort((a, b) => a.sigla.localeCompare(b.sigla, "pt-BR", { sensitivity: "base" })),
    }))
    .sort((a, b) => a.sigla.localeCompare(b.sigla, "pt-BR", { sensitivity: "base" }));
}

export default function ContatosSearch({ setores, contatosRapidos }: ContatosSearchProps) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const activeQuery = query.trim();
  const orderedSetores = useMemo(() => sortSetores(setores), [setores]);
  const filteredSetores = useMemo(() => filterSetores(orderedSetores, activeQuery), [activeQuery, orderedSetores]);
  const handleSearchChange = (value: string) => {
    setQuery(value);
    const matches = filterSetores(orderedSetores, value);
    setExpanded(value.trim() ? new Set(matches.map(({ sigla }) => sigla)) : new Set());
  };
  const setAll = (open: boolean) => setExpanded(open ? new Set(filteredSetores.map(({ sigla }) => sigla)) : new Set());
  const toggle = (sigla: string) => setExpanded((current) => { const next = new Set(current); if (next.has(sigla)) next.delete(sigla); else next.add(sigla); return next; });

  return (
    <div>
      <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5">
        <h2 className="text-lg font-semibold text-slate-900">Contatos rápidos</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {contatosRapidos.map((grupo) => <section key={grupo.titulo}><h3 className="text-sm font-semibold text-blue-900">{grupo.titulo}</h3><div className="mt-2 grid gap-2">{grupo.contatos.map((contato) => <ContatoCard key={`${grupo.titulo}-${contato.nome}-${contato.telefone}`} contato={contato} query={activeQuery} />)}</div></section>)}
        </div>
      </div>
      <div className="mt-8">
        <label htmlFor="busca-contatos" className="text-sm font-semibold text-slate-800">Buscar setor, servidor ou ramal...</label>
        <input id="busca-contatos" type="search" value={query} onChange={(event) => handleSearchChange(event.target.value)} placeholder="Buscar setor, servidor ou ramal..." className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-200" />
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-slate-600" aria-live="polite">{filteredSetores.length} {filteredSetores.length === 1 ? "setor encontrado" : "setores encontrados"}</p><div className="flex gap-2"><button type="button" onClick={() => setAll(true)} className="rounded-md border border-blue-200 px-3 py-2 text-sm font-medium text-blue-800 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-blue-700">Expandir todos</button><button type="button" onClick={() => setAll(false)} className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-700">Recolher todos</button></div></div>
        <div className="mt-5 space-y-3">{filteredSetores.length > 0 ? filteredSetores.map((setor) => <SetorAccordion key={setor.sigla} setor={setor} query={activeQuery} expanded={expanded.has(setor.sigla)} onToggle={() => toggle(setor.sigla)} />) : <p className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center text-slate-600">Nenhum contato encontrado para sua busca.</p>}</div>
      </div>
    </div>
  );
}
