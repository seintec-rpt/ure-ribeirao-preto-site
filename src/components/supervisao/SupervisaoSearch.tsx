"use client";

import { useMemo, useState } from "react";
import type { Supervisor } from "@/data/supervisores";
import SupervisorAccordion from "./SupervisorAccordion";

type SupervisaoSearchProps = { supervisores: Supervisor[] };

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function filterSupervisores(supervisores: Supervisor[], query: string) {
  const normalizedQuery = normalize(query.trim());
  if (!normalizedQuery) return supervisores;

  return supervisores.filter((supervisor) =>
    [
      supervisor.nome,
      ...supervisor.atribuicoes,
      ...supervisor.escolasEstaduais,
      ...supervisor.escolasParticularesMunicipais,
    ].some((value) => normalize(value).includes(normalizedQuery)),
  );
}

function countLabel(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`;
}

export default function SupervisaoSearch({ supervisores }: SupervisaoSearchProps) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const activeQuery = query.trim();
  const filteredSupervisores = useMemo(
    () => filterSupervisores(supervisores, activeQuery),
    [activeQuery, supervisores],
  );
  const totalReais = filteredSupervisores.filter(({ semSupervisor }) => !semSupervisor).length;
  const totalSemSupervisor = filteredSupervisores.filter(({ semSupervisor }) => semSupervisor).length;
  const resultSummary = [
    ...(totalReais > 0 || totalSemSupervisor === 0
      ? [countLabel(totalReais, "supervisor encontrado", "supervisores encontrados")]
      : []),
    ...(totalSemSupervisor > 0
      ? [countLabel(totalSemSupervisor, "setor sem supervisor encontrado", "setores sem supervisor encontrados")]
      : []),
  ].join(" e ");

  const handleSearchChange = (value: string) => {
    setQuery(value);
    const matches = filterSupervisores(supervisores, value);
    setExpanded(value.trim() ? new Set(matches.map(({ nome }) => nome)) : new Set());
  };

  const toggle = (nome: string) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(nome)) next.delete(nome);
      else next.add(nome);
      return next;
    });
  };

  const setAll = (open: boolean) => {
    setExpanded(open ? new Set(filteredSupervisores.map(({ nome }) => nome)) : new Set());
  };

  return (
    <div>
      <label htmlFor="busca-supervisao" className="text-sm font-semibold text-slate-800">
        Buscar supervisor, atribuição ou escola
      </label>
      <input
        id="busca-supervisao"
        type="search"
        value={query}
        onChange={(event) => handleSearchChange(event.target.value)}
        placeholder="Digite para buscar..."
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-200"
      />
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600" aria-live="polite">
          {resultSummary}
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={() => setAll(true)} className="rounded-md border border-blue-200 px-3 py-2 text-sm font-medium text-blue-800 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-blue-700">Expandir todos</button>
          <button type="button" onClick={() => setAll(false)} className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-700">Recolher todos</button>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {filteredSupervisores.length > 0 ? filteredSupervisores.map((supervisor) => (
          <SupervisorAccordion key={supervisor.nome} supervisor={supervisor} query={activeQuery} expanded={expanded.has(supervisor.nome)} onToggle={() => toggle(supervisor.nome)} />
        )) : (
          <p className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center text-slate-600">Nenhum resultado encontrado para sua busca.</p>
        )}
      </div>
    </div>
  );
}
