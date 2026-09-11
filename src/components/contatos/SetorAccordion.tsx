"use client";

import type { Secao, Setor } from "@/data/contatos";
import HighlightMatch from "@/components/supervisao/HighlightMatch";
import ContatoCard from "./ContatoCard";

type SetorAccordionProps = { setor: Setor; query: string; expanded: boolean; onToggle: () => void };

function SecaoBlock({ secao, query }: { secao: Secao; query: string }) {
  return (
    <section>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-800"><HighlightMatch text={secao.sigla} query={query} /></h3>
      {secao.chefe && <div className="mt-3"><ContatoCard contato={secao.chefe} query={query} /></div>}
      {secao.equipe.length > 0 && (
        <div className="mt-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Equipe</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {secao.equipe.map((contato) => <ContatoCard key={`${secao.sigla}-${contato.nome}-${contato.telefone}`} contato={contato} query={query} />)}
          </div>
        </div>
      )}
    </section>
  );
}

export default function SetorAccordion({ setor, query, expanded, onToggle }: SetorAccordionProps) {
  const contentId = `setor-${setor.sigla.toLowerCase()}`;
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <h2>
        <button type="button" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-700" aria-expanded={expanded} aria-controls={contentId} onClick={onToggle}>
          <span><span className="mr-2 font-semibold text-blue-800"><HighlightMatch text={setor.sigla} query={query} /></span><span className="font-semibold text-slate-900"><HighlightMatch text={setor.nome} query={query} /></span></span>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl font-normal leading-none text-blue-800" aria-hidden="true">{expanded ? "−" : "+"}</span>
        </button>
      </h2>
      {expanded && (
        <div id={contentId} className="space-y-6 border-t border-slate-100 px-5 py-5">
          {setor.chefe && <div><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Chefe de Serviço</p><ContatoCard contato={setor.chefe} query={query} /></div>}
          {setor.secoes.map((secao) => <SecaoBlock key={secao.sigla} secao={secao} query={query} />)}
          {setor.outros.length > 0 && <section><h3 className="text-sm font-semibold text-slate-800">Outros registros associados ao bloco</h3><div className="mt-3 grid gap-2 sm:grid-cols-2">{setor.outros.map((contato) => <ContatoCard key={`${contato.nome}-${contato.telefone}`} contato={contato} query={query} />)}</div></section>}
        </div>
      )}
    </article>
  );
}
