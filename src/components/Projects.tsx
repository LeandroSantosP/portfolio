import React from 'react'

type Project = {
  title: string
  subtitle?: string
  github?: string
  dateRange?: string
  bullets: string[]
}

const projects: Project[] = [
  {
    title: 'Projeto Pessoal: Sell Ecom',
    subtitle: '(Spring-Boot) - (hand-coded)',
    github: 'https://github.com/LeandroSantosP/sell-ecom',
    dateRange: '03/02/2025 — 07/04/2025',
    bullets: [
      'Desenvolvi uma API REST de e-commerce usando Spring Boot com arquitetura em camadas.',
      'Implementei autenticação e autorização com Spring Security + OAuth2.',
      'Modelei entidades e persistência com JPA/Hibernate + MySQL.',
      'Criei testes automatizados com JUnit, Mockito e Testcontainers.'
    ]
  },
  {
    title: 'Projeto Pessoal: Control API',
    subtitle: 'Sistema de Controle Financeiro Pessoal - (Node.js + React) - (hand-coded)',
    github: 'https://github.com/LeandroSantosP/control-api',
    dateRange: '',
    bullets: [
      'Desenvolvi backend em Node.js e frontend em React.',
      'Implementei autenticação baseada em JWT.',
      'Criei sistema de transações com categorias e recorrência.',
      'Gerei relatórios em PDF com Handlebars.',
      'Integrei upload de imagens com Firebase Storage.'
    ]
  }
]

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="transition-all duration-700 opacity-100">
      <div className="mb-8">
        <h2 className="font-headline-lg text-headline-lg text-primary">PROJETOS</h2>
      </div>

      <div className="space-y-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-md p-6 border border-outline-variant/20"
            style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold text-primary">{p.title} <span className="italic text-sm text-secondary">{p.subtitle}</span></div>
                {p.github && (
                  <a className="text-primary hover:underline text-label-sm block mt-1" href={p.github} target="_blank" rel="noreferrer">GitHub: {p.github}</a>
                )}
              </div>
              <div className="text-sm text-secondary">{p.dateRange}</div>
            </div>

            <ul className="mt-4 list-none space-y-2">
                {p.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <input type="checkbox" disabled className="mt-1 w-4 h-4 text-primary bg-surface border border-outline-variant rounded-sm" />
                    <span className="text-body-md text-secondary">{b}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 text-secondary font-body-md">Outros projetos disponíveis mediante solicitação.</div>
    </section>
  )
}
