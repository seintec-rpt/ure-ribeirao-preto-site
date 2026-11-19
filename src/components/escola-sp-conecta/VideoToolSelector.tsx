"use client";

import { useState } from "react";
import { videoTools, type VideoToolGuide } from "@/data/escolaSpConecta";

function ToolPanel({ tool, active }: { tool: VideoToolGuide; active: boolean }) {
  return <div className="escola-sp-tool-panel" role="tabpanel" id={`tutorial-${tool.id}`} aria-labelledby={`ferramenta-${tool.id}`} hidden={!active}>
    <div className="escola-sp-tool-meta"><span>{tool.dificuldade}</span><span>{tool.requisitos.length} requisitos mínimos</span></div>
    <p className="escola-sp-tool-description">{tool.descricao}</p>
    <div className="escola-sp-tool-columns">
      <div>
        <h4>Antes de começar</h4>
        <ul className="escola-sp-simple-list">{tool.requisitos.map((requisito) => <li key={requisito}>{requisito}</li>)}</ul>
      </div>
      <div>
        <h4>Etapas</h4>
        <ol className="escola-sp-tool-steps">{tool.etapas.map((etapa) => <li key={etapa.ordem}><span>{etapa.ordem}</span><div><strong>{etapa.titulo}</strong><p>{etapa.instrucao}</p></div></li>)}</ol>
      </div>
    </div>
    <details className="escola-sp-tool-errors"><summary>Erros comuns para evitar</summary><ul className="escola-sp-simple-list">{tool.errosComuns.map((erro) => <li key={erro}>{erro}</li>)}</ul></details>
    {tool.fonte && <p className="escola-sp-tool-source">Fonte oficial: <a href={tool.fonte.url} target="_blank" rel="noreferrer">{tool.fonte.titulo}<span aria-hidden="true"> ↗</span></a></p>}
    <div className="escola-sp-callout escola-sp-callout-info"><strong>Próximo passo</strong><p>{tool.proximoPasso}</p></div>
  </div>;
}

export default function VideoToolSelector() {
  const [selectedId, setSelectedId] = useState(videoTools[0]?.id ?? "");
  const selectedTool = videoTools.find((tool) => tool.id === selectedId) ?? videoTools[0];

  if (!selectedTool) return null;

  return <div className="escola-sp-tool-selector">
    <div className="escola-sp-tool-tabs" role="tablist" aria-label="Escolha da ferramenta de gravação">
      {videoTools.map((tool) => <button key={tool.id} id={`ferramenta-${tool.id}`} type="button" role="tab" aria-selected={tool.id === selectedTool.id} aria-controls={`tutorial-${tool.id}`} className={tool.id === selectedTool.id ? "escola-sp-tool-tab escola-sp-tool-tab-active" : "escola-sp-tool-tab"} onClick={() => setSelectedId(tool.id)}>{tool.titulo}</button>)}
    </div>
    {videoTools.map((tool) => <ToolPanel key={tool.id} tool={tool} active={tool.id === selectedTool.id} />)}
  </div>;
}
