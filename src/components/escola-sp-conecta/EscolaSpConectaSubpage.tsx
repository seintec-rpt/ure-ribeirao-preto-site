import type { EscolaSpSubpage } from "@/data/escolaSpConecta";
import EscolaSpConectaChecklistSection from "./EscolaSpConectaChecklistSection";
import EscolaSpConectaProfileSection from "./EscolaSpConectaProfileSection";
import EscolaSpConectaScheduleSection from "./EscolaSpConectaScheduleSection";
import EscolaSpConectaShell from "./EscolaSpConectaShell";
import EscolaSpConectaSubmissionSection from "./EscolaSpConectaSubmissionSection";
import EscolaSpConectaVideoSection from "./EscolaSpConectaVideoSection";
import EscolaSpConectaYouTubeSection from "./EscolaSpConectaYouTubeSection";

export default function EscolaSpConectaSubpage({ page }: { page: EscolaSpSubpage }) {
  const content = {
    perfil: <EscolaSpConectaProfileSection />,
    "gravar-video": <EscolaSpConectaVideoSection />,
    "publicar-youtube": <EscolaSpConectaYouTubeSection />,
    "envio-sed": <EscolaSpConectaSubmissionSection />,
    cronograma: <EscolaSpConectaScheduleSection />,
    checklist: <EscolaSpConectaChecklistSection />,
  }[page.slug];

  return <EscolaSpConectaShell eyebrow={page.eyebrow} title={page.titulo} description={page.descricao} currentPage={page.slug}>{content}</EscolaSpConectaShell>;
}
