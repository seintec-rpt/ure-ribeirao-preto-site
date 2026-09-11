"use client";

import type { Supervisor } from "@/data/supervisores";
import HighlightMatch from "./HighlightMatch";

type SupervisorAccordionProps = {
  supervisor: Supervisor;
  query: string;
  expanded: boolean;
  onToggle: () => void;
};

function ContentBlock({ title, items, query }: { title: string; items: string[]; query: string }) {
  if (items.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" aria-hidden="true" />
            <span><HighlightMatch text={item} query={query} /></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SupervisorAccordion({
  supervisor,
  query,
  expanded,
  onToggle,
}: SupervisorAccordionProps) {
  const contentId = `supervisor-${supervisor.nome.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <h2>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-700"
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={onToggle}
        >
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <HighlightMatch text={supervisor.nome} query={query} />
            {supervisor.semSupervisor && (
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                Pendente de atribuição
              </span>
            )}
          </span>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl font-normal leading-none text-blue-800" aria-hidden="true">
            {expanded ? "−" : "+"}
          </span>
        </button>
      </h2>
      {expanded && (
        <div id={contentId} className="grid gap-5 border-t border-slate-100 px-5 py-5 sm:grid-cols-3">
          <ContentBlock title="Atribuições" items={supervisor.atribuicoes} query={query} />
          <ContentBlock title="Escolas estaduais" items={supervisor.escolasEstaduais} query={query} />
          <ContentBlock title="Escolas particulares / municipais" items={supervisor.escolasParticularesMunicipais} query={query} />
        </div>
      )}
    </article>
  );
}
