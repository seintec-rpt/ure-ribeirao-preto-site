"use client";

import { useMemo, useState } from "react";
import type { ChecklistItem } from "@/data/escolaSpConecta";
import { GuidanceBadge, Reference } from "./EscolaSpConectaPrimitives";

function ChecklistItems({ items, completed, printMode = false, onToggle }: { items: ChecklistItem[]; completed: Set<string>; printMode?: boolean; onToggle?: (id: string) => void }) {
  return <div className={printMode ? "escola-sp-print-items" : "escola-sp-checklist-grid"}>{items.map((item, index) => <div key={item.id} className={`escola-sp-checklist-item ${item.natureza === "dica-pratica" ? "escola-sp-checklist-practical" : ""}`}><span className="escola-sp-checkbox escola-sp-print-box" aria-hidden="true" />{printMode ? null : <input className="escola-sp-checklist-input" type="checkbox" id={`checklist-${item.id}`} aria-label={item.texto} checked={completed.has(item.id)} onChange={() => onToggle?.(item.id)} />}<div className="escola-sp-checklist-copy">{printMode && <span className="escola-sp-print-index">{index + 1}.</span>}<p>{item.texto}</p><GuidanceBadge nature={item.natureza} /><Reference reference={item.referencia} /></div></div>)}</div>;
}

export default function InteractiveChecklist({ items }: { items: ChecklistItem[] }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const completedCount = completed.size;
  const progress = useMemo(() => items.length === 0 ? 0 : Math.round((completedCount / items.length) * 100), [completedCount, items.length]);

  function toggleItem(id: string) {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function clearAll() {
    setCompleted(new Set());
  }

  return <div className="escola-sp-checklist-tool">
    <div className="escola-sp-checklist-tools" aria-label="Controles do checklist">
      <div className="escola-sp-progress-summary"><strong>{completedCount} de {items.length} itens concluídos</strong><span aria-live="polite">{progress}%</span></div>
      <progress className="escola-sp-progress-bar" value={completedCount} max={items.length} aria-label={`Progresso do checklist: ${completedCount} de ${items.length} itens concluídos`} />
      <div className="escola-sp-checklist-actions"><button type="button" onClick={clearAll} disabled={completedCount === 0}>Desmarcar todos</button><button type="button" onClick={() => window.print()}>Imprimir ou salvar em PDF</button></div>
    </div>
    <div className="escola-sp-checklist-notice"><span aria-hidden="true">i</span><p>O checklist é uma ferramenta de apoio. A marcação dos itens nesta página não substitui o registro nem a confirmação de envio na SED.</p></div>
    <div className="escola-sp-checklist-digital"><ChecklistItems items={items} completed={completed} onToggle={toggleItem} /></div>
    <section className="escola-sp-print-sheet" aria-label="Checklist para impressão"><header><p>URE Ribeirão Preto</p><h1>Escola SP Conecta 2027</h1><h2>Checklist de conferência</h2><p>Referência: Portaria DIPES nº 64/2026</p></header><p className="escola-sp-print-instructions">Use esta lista como apoio. A marcação não substitui o registro nem a confirmação de envio na SED.</p><ChecklistItems items={items} completed={new Set()} printMode /></section>
  </div>;
}
