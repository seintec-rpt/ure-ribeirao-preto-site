"use client";

import { useState } from "react";
import { youtubeTutorialModes, type YouTubeTutorialMode } from "@/data/escolaSpConecta";

function TutorialPanel({ mode, stepIndex, active, onPrevious, onNext }: { mode: YouTubeTutorialMode; stepIndex: number; active: boolean; onPrevious: () => void; onNext: () => void }) {
  const step = mode.etapas[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === mode.etapas.length - 1;

  return <div className="escola-sp-youtube-tutorial-panel" role="tabpanel" id={`youtube-tutorial-${mode.id}`} aria-labelledby={`youtube-mode-${mode.id}`} hidden={!active}>
    <div className="escola-sp-youtube-progress"><span aria-live="polite">Etapa {stepIndex + 1} de {mode.etapas.length}</span><progress value={stepIndex + 1} max={mode.etapas.length} aria-label={`Etapa ${stepIndex + 1} de ${mode.etapas.length}`} /></div>
    <article className="escola-sp-youtube-step"><span className="escola-sp-youtube-step-number" aria-hidden="true">{step.ordem}</span><div><p className="escola-sp-eyebrow">Etapa {step.ordem}</p><h3>{step.titulo}</h3><p>{step.instrucao}</p>{step.observacao && <div className="escola-sp-callout escola-sp-callout-warning"><strong>Atenção</strong><p>{step.observacao}</p></div>}</div></article>
    <div className="escola-sp-youtube-step-actions"><button type="button" onClick={onPrevious} disabled={isFirst}>Etapa anterior</button><button type="button" onClick={onNext} disabled={isLast}>{isLast ? "Última etapa" : "Próxima etapa"}</button></div>
  </div>;
}

export default function YouTubeTutorialSelector() {
  const [modeId, setModeId] = useState<YouTubeTutorialMode["id"]>("computador");
  const [stepIndex, setStepIndex] = useState(0);
  const selectedMode = youtubeTutorialModes.find((mode) => mode.id === modeId) ?? youtubeTutorialModes[0];

  if (!selectedMode) return null;

  function selectMode(id: YouTubeTutorialMode["id"]) {
    setModeId(id);
    setStepIndex(0);
  }

  return <div className="escola-sp-youtube-selector">
    <div className="escola-sp-tool-tabs" role="tablist" aria-label="Escolha do dispositivo para publicar o vídeo">
      {youtubeTutorialModes.map((mode) => <button key={mode.id} id={`youtube-mode-${mode.id}`} type="button" role="tab" aria-selected={mode.id === selectedMode.id} aria-controls={`youtube-tutorial-${mode.id}`} className={mode.id === selectedMode.id ? "escola-sp-tool-tab escola-sp-tool-tab-active" : "escola-sp-tool-tab"} onClick={() => selectMode(mode.id)}>{mode.titulo}</button>)}
    </div>
    <p className="escola-sp-tool-description">{selectedMode.descricao}</p>
    {youtubeTutorialModes.map((mode) => <TutorialPanel key={mode.id} mode={mode} active={mode.id === selectedMode.id} stepIndex={mode.id === selectedMode.id ? stepIndex : 0} onPrevious={() => setStepIndex((current) => Math.max(0, current - 1))} onNext={() => setStepIndex((current) => Math.min(selectedMode.etapas.length - 1, current + 1))} />)}
  </div>;
}
