import React from 'react'

export default function Trajectory() {
  return (
    <section className="py-xl transition-all duration-700 opacity-100" id="trajectory">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6">EDUCAÇÃO</h2>

        <div className="border-b border-outline-variant/20 pb-4 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold text-primary">Engenharia de Software</div>
              <div className="text-secondary">Universidade Pitágoras Unopar Anhanguera — Mogi das Cruzes/SP</div>
            </div>
            <div className="text-sm text-secondary">Janeiro 2026 — 2029</div>
          </div>
          <div className="mt-2 text-sm text-secondary italic">Em andamento</div>
        </div>

        <h3 className="font-headline-md text-headline-md text-primary mb-4">EXPERIÊNCIA ADICIONAL</h3>

        <div className="bg-surface-container-lowest rounded-md p-6 border border-outline-variant/20">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold text-primary">Serviços Autônomos</div>
            </div>
            <div className="text-sm text-secondary">01/2022 — 12/2025</div>
          </div>

          <ul className="mt-4 list-none space-y-2">
            <li className="flex items-start gap-3">
              <input type="checkbox" disabled className="mt-1 w-4 h-4 text-primary bg-surface border border-outline-variant rounded-sm" />
              <span className="text-body-md text-secondary">Executei serviços de manutenção e obras garantindo qualidade e conformidade</span>
            </li>
            <li className="flex items-start gap-3">
              <input type="checkbox" disabled className="mt-1 w-4 h-4 text-primary bg-surface border border-outline-variant rounded-sm" />
              <span className="text-body-md text-secondary">Adaptei-me rapidamente a diferentes cenários e requisitos sempre buscando cumprir prazos</span>
            </li>
            <li className="flex items-start gap-3">
              <input type="checkbox" disabled className="mt-1 w-4 h-4 text-primary bg-surface border border-outline-variant rounded-sm" />
              <span className="text-body-md text-secondary">Atuei em equipe em ambientes dinâmicos e operacionais</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
