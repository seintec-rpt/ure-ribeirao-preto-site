import { checklist, dataProtectionGuidance, frequentlyAskedQuestions } from "@/data/escolaSpConecta";
import { GuidanceList, Reference, SectionHeading } from "./EscolaSpConectaPrimitives";
import InteractiveChecklist from "./InteractiveChecklist";

export default function EscolaSpConectaChecklistSection() {
  return <>
    <SectionHeading eyebrow="01 · Conferência" title="Checklist e dúvidas frequentes" description="Use esta página como referência para revisar as etapas. A marcação fica somente na memória do navegador enquanto a página estiver aberta." />
    <InteractiveChecklist items={checklist} />
    <section className="escola-sp-inner-section" aria-labelledby="faq-titulo"><SectionHeading eyebrow="02 · Esclarecimentos" title="Dúvidas frequentes" description="Respostas fundamentadas exclusivamente na Portaria DIPES nº 64/2026." /><div className="escola-sp-disclosure-list">{frequentlyAskedQuestions.map((faq, index) => <details key={faq.id} className="escola-sp-disclosure"><summary><span>{index + 1}. {faq.pergunta}</span><span aria-hidden="true">+</span></summary><div><p>{faq.resposta}</p>{faq.referencias.map((reference, referenceIndex) => <Reference key={`${faq.id}-${referenceIndex}`} reference={reference} />)}</div></details>)}</div></section>
    <section className="escola-sp-panel escola-sp-margin-top" aria-labelledby="protecao-titulo"><h2 id="protecao-titulo">Proteção das informações</h2><GuidanceList items={dataProtectionGuidance} /></section>
  </>;
}
