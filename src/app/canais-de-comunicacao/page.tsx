import ContatosSearch from "@/components/contatos/ContatosSearch";
import { contatosRapidos, setores } from "@/data/contatos";

export default function CanaisDeComunicacaoPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-800">URE Ribeirão Preto</p><h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Canais de Comunicação</h1><p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Consulte os telefones, ramais, setores e equipes da URE Ribeirão Preto.</p></header>
        <ContatosSearch setores={setores} contatosRapidos={contatosRapidos} />
      </div>
    </main>
  );
}
