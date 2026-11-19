import type { NormativeNature, NormativeReference, ReferencedGuidance } from "@/data/escolaSpConecta";

export function referenceLabel(reference: NormativeReference) {
  const details = [reference.paragrafo, reference.inciso, reference.alinea].filter(Boolean).join(", ");
  return `Art. ${reference.artigo}${details ? `, ${details}` : ""}`;
}

export function GuidanceBadge({ nature }: { nature: NormativeNature }) {
  return <span className={`escola-sp-badge ${nature === "exigencia-normativa" ? "escola-sp-badge-normative" : "escola-sp-badge-practical"}`}>{nature === "exigencia-normativa" ? "Exigência normativa" : "Dica prática"}</span>;
}

export function Reference({ reference }: { reference?: NormativeReference }) {
  return reference ? <span className="escola-sp-reference">{referenceLabel(reference)}</span> : null;
}

export function GuidanceList({ items }: { items: ReferencedGuidance[] }) {
  return <ul className="escola-sp-guidance-list">{items.map((item, index) => <li key={`${item.texto}-${index}`}><GuidanceBadge nature={item.natureza} /><span>{item.texto}</span><Reference reference={item.referencia} /></li>)}</ul>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="escola-sp-section-heading"><p className="escola-sp-eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function NumberBadge({ number }: { number: number }) {
  return <span className="escola-sp-number-badge" aria-hidden="true">{number}</span>;
}
