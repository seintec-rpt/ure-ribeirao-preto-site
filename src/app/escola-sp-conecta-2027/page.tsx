import type { Metadata } from "next";
import EscolaSpConectaGuide from "@/components/escola-sp-conecta/EscolaSpConectaGuide";

export const metadata: Metadata = {
  title: "Escola SP Conecta 2027 | URE Ribeirão Preto",
  description: "Guia de orientações para docentes sobre o registro do perfil profissional, o vídeo de apresentação e a análise de perfil para 2027.",
};

export default function EscolaSpConectaPage() {
  return <main lang="pt-BR" className="escola-sp-theme min-h-screen px-4 py-6 sm:px-6 sm:py-10 lg:px-8"><EscolaSpConectaGuide /></main>;
}
