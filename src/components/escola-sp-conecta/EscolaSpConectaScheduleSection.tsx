import { timeline } from "@/data/escolaSpConecta";
import { Reference, SectionHeading } from "./EscolaSpConectaPrimitives";

export default function EscolaSpConectaScheduleSection() {
  return <><SectionHeading eyebrow="01 · Prazos oficiais" title="Cronograma oficial" description="As datas abaixo reproduzem integralmente as nove etapas do artigo 18 da Portaria DIPES nº 64/2026." /><ol className="escola-sp-timeline">{timeline.map((entry) => <li key={entry.ordem}><div className="escola-sp-timeline-marker" aria-hidden="true">{entry.ordem}</div><div className="escola-sp-timeline-content"><p className="escola-sp-timeline-date">{entry.periodo}</p><h2>{entry.etapa}</h2><p>{entry.publico}</p><span className="escola-sp-timeline-responsible">{entry.responsavelOuCanal}</span><Reference reference={entry.referencia} /></div></li>)}</ol></>;
}
