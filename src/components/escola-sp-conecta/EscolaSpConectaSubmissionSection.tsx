import { attendanceGuidance, nonParticipationGuidance, schoolIndicationRules, submissionGuidance, validationGuidance } from "@/data/escolaSpConecta";
import { GuidanceList, NumberBadge, Reference, SectionHeading } from "./EscolaSpConectaPrimitives";

export default function EscolaSpConectaSubmissionSection() {
  return <>
    <SectionHeading eyebrow="01 · Envio" title="Envio e confirmação na SED" description="Depois de registrar o perfil, o docente deve revisar as informações, confirmar o envio e indicar as unidades escolares conforme sua situação funcional." />
    <div className="escola-sp-two-columns"><article className="escola-sp-panel"><h2>Revisão e confirmação</h2><GuidanceList items={submissionGuidance} /></article><article className="escola-sp-panel"><h2>Validação do perfil</h2><GuidanceList items={validationGuidance} /></article></div>
    <section className="escola-sp-inner-section" aria-labelledby="escolas-titulo"><SectionHeading eyebrow="02 · Preferências" title="Indicação das unidades escolares" description="Na fase de indicação, as unidades devem ser ordenadas por prioridade, respeitando as regras aplicáveis à situação funcional do docente." /><div className="escola-sp-rules-list">{schoolIndicationRules.map((rule, index) => <article key={rule.id} className="escola-sp-rule"><NumberBadge number={index + 1} /><div><h3 id={index === 0 ? "escolas-titulo" : undefined}>{rule.titulo}</h3><p>{rule.descricao}</p><Reference reference={rule.referencia} /></div></article>)}</div></section>
    <div className="escola-sp-two-columns escola-sp-margin-top"><article className="escola-sp-panel"><h2>Encaminhamentos e situações de atendimento</h2><GuidanceList items={attendanceGuidance} /></article><article className="escola-sp-panel"><h2>Caracterização da não participação</h2><GuidanceList items={nonParticipationGuidance} /></article></div>
  </>;
}
