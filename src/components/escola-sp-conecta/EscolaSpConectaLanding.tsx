import Link from "next/link";
import { escolaSpSubpages, escolaSpConectaSource } from "@/data/escolaSpConecta";
import EscolaSpConectaShell from "./EscolaSpConectaShell";

export default function EscolaSpConectaLanding() {
  return <EscolaSpConectaShell eyebrow="URE Ribeirão Preto · Orientações institucionais" title="Escola SP Conecta 2027" description="Guia de orientações para docentes sobre o registro do perfil profissional, preparação do vídeo e participação no processo de análise de perfil para o ano letivo de 2027.">
    <section className="escola-sp-landing-intro" aria-labelledby="escola-sp-etapas-titulo"><div><p className="escola-sp-eyebrow">Navegação por etapas</p><h2 id="escola-sp-etapas-titulo">Encontre a orientação que você precisa</h2><p>O conteúdo foi dividido em seis páginas para facilitar a consulta no celular e no computador. As referências normativas permanecem disponíveis em cada etapa.</p></div><div className="escola-sp-hero-mark escola-sp-hero-mark-small" aria-hidden="true"><span>2027</span><strong>SP</strong><span>Conecta</span></div></section>
    <div className="escola-sp-page-card-grid">{escolaSpSubpages.map((page) => <Link key={page.slug} href={`/escola-sp-conecta-2027/${page.slug}`} className="escola-sp-page-card"><span className="escola-sp-card-kicker">{page.eyebrow}</span><span className="escola-sp-page-card-arrow" aria-hidden="true">→</span><h2>{page.titulo}</h2><p>{page.descricao}</p><span className="escola-sp-page-card-link">Acessar orientação</span></Link>)}</div>
    <aside className="escola-sp-source-note"><strong>Fonte normativa principal</strong><p>{escolaSpConectaSource.titulo}. A página é orientativa e não substitui a publicação oficial.</p></aside>
  </EscolaSpConectaShell>;
}
