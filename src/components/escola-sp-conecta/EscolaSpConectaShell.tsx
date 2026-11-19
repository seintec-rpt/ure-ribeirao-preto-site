import Link from "next/link";
import { escolaSpSubpages, type EscolaSpSubpage } from "@/data/escolaSpConecta";

type EscolaSpConectaShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  currentPage?: EscolaSpSubpage["slug"];
  showQuickNav?: boolean;
  children: React.ReactNode;
};

export default function EscolaSpConectaShell({ eyebrow, title, description, currentPage, showQuickNav = true, children }: EscolaSpConectaShellProps) {
  return <div className="escola-sp-guide">
    <header className={`escola-sp-subpage-header${currentPage ? "" : " escola-sp-subpage-header-landing"}`}>
      <div className="escola-sp-breadcrumb"><Link href="/escola-sp-conecta-2027">Escola SP Conecta 2027</Link>{currentPage && <><span aria-hidden="true">/</span><span aria-current="page">{title}</span></>}</div>
      <p className="escola-sp-eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="escola-sp-lead">{description}</p>
      <div className="escola-sp-hero-meta"><span>Portaria DIPES nº 64/2026</span><span>Conteúdo orientativo</span></div>
    </header>
    <aside className="escola-sp-notice" aria-label="Aviso importante"><span className="escola-sp-notice-icon" aria-hidden="true">i</span><p><strong>Não substitui a norma oficial.</strong> As orientações desta página organizam o conteúdo da Portaria DIPES nº 64/2026.</p></aside>
    {showQuickNav && <nav className="escola-sp-quick-nav" aria-label="Navegação entre orientações"><p>Outras orientações</p><div><Link href="/escola-sp-conecta-2027" aria-current={!currentPage ? "page" : undefined}>Visão geral</Link>{escolaSpSubpages.map((page) => <Link key={page.slug} className={page.slug === currentPage ? "escola-sp-nav-current" : ""} href={`/escola-sp-conecta-2027/${page.slug}`} aria-current={page.slug === currentPage ? "page" : undefined}>{page.titulo}</Link>)}</div></nav>}
    <div className="escola-sp-subpage-content">{children}</div>
    <footer className="escola-sp-subpage-footer"><Link href="/escola-sp-conecta-2027">← Voltar para Escola SP Conecta 2027</Link></footer>
  </div>;
}
