import type { Contato } from "@/data/contatos";
import HighlightMatch from "@/components/supervisao/HighlightMatch";

type ContatoCardProps = { contato: Contato; query: string };

export default function ContatoCard({ contato, query }: ContatoCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
      {contato.nome && <p className="font-medium text-slate-900"><HighlightMatch text={contato.nome} query={query} /></p>}
      {contato.funcao && <p className="text-sm text-slate-600">{contato.funcao}</p>}
      {contato.telefone && (
        <a href={`tel:${contato.telefone.replace(/\D/g, "")}`} className="mt-1 inline-flex text-sm font-semibold text-blue-800 underline decoration-blue-200 underline-offset-2 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-blue-700">
          <HighlightMatch text={contato.telefone} query={query} />
        </a>
      )}
      {contato.observacao && <p className="mt-1 text-xs text-slate-500">{contato.observacao}</p>}
    </div>
  );
}
