import React from 'react'

export default function Experience(): JSX.Element {
  return (
    <section className="transition-all duration-700 opacity-100" id="experience">
      <div className="mb-8">
        <h2 className="font-headline-lg text-headline-lg text-primary">EXPERIÊNCIAS</h2>
      </div>

      <div
        className="rounded-md p-6 border border-outline-variant/20"
        style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="font-semibold text-primary">FlyRank AI Internship / <span className="text-on-tertiary-container">Estágio</span> — Backend AI Engineering Track</div>
          </div>
          <div className="text-sm text-secondary">06/2026 — 08/2026</div>
        </div>

        <ul className="mt-4 list-none space-y-2">
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-[16px] leading-none mt-1 shrink-0" aria-hidden>check_circle</span>
            <span className="text-body-md text-secondary">Projeto Final (Embeddable Lead Capture Platform): desenvolvi plataforma para captura e qualificação de leads com widget incorporável (cross-domain), contratos de API rigorosos e processamento assíncrono de dados.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-[16px] leading-none mt-1 shrink-0" aria-hidden>check_circle</span>
            <span className="text-body-md text-secondary">Design de contratos e APIs: modelagem e implementação de endpoints REST com validação estrita de esquemas (schemas), tratamento defensivo de falhas e estados de erro bem definidos.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-[16px] leading-none mt-1 shrink-0" aria-hidden>check_circle</span>
            <span className="text-body-md text-secondary">Engenharia de prompt e tarefas: estruturação de instruções com limites claros, esquemas de entrada/saída e critérios de sucesso para tarefas automatizadas por IA.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-[16px] leading-none mt-1 shrink-0" aria-hidden>check_circle</span>
            <span className="text-body-md text-secondary">Avaliação e qualidade (Evals): garanti que a IA dá respostas corretas e segue as regras do negócio, sem inventar informações (alucinar).</span>
          </li>
        </ul>
      </div>
    </section>
  )
}