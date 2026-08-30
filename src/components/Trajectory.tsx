import React from 'react'

type Course = {
  name: string
  platform: string
  logo?: string
  certification?: string
}

const courses: Course[] = [
  {
    name: 'CS50: Introduction to Computer Science',
    platform: 'Harvard',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQF5t62bcL0e9g/company-logo_200_200/company-logo_200_200/0/1631318058235?e=1789603200&v=beta&t=FAVluJm-TJah9PDh5ks_T9TO3NQCi4pZDfyr4gSEJO0',
    certification: 'https://certificates.cs50.io/0c61dd6a-88d0-4904-9b43-a365d142d399.pdf?size=letter'
  },
  {
    name: 'Fundamentos de AWS — Amazon Web Services',
    platform: 'TreinaWeb',
    certification: 'https://www.linkedin.com/learning/certificates/ee8f011e6fa53d742dc56e947a0763b192fbc0a0ea3aabf2769d0913f3edccb9'
  },
  {
    name: 'Excel: From Intermediate to Advanced',
    platform: 'Santander Open Academy',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHbRU5HNC8kOA/company-logo_200_200/company-logo_200_200/0/1701098269536/santander_universidades_logo?e=1789603200&v=beta&t=5zMzP4KnG38MDzel2BE94njmfdlFq-RSHJOc_DW8E8c',
    certification: 'https://drive.google.com/file/d/1fXtrj12_jZJ02FtIlnzb3obEh-nwX4xh/view?usp=sharing'
  }
]

export default function Trajectory() {
  return (
    <section className="py-xl transition-all duration-700 opacity-100" id="trajectory">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6">FORMAÇÃO ACADÊMICA</h2>

        <div className="rounded-md p-6 border border-outline-variant/20" style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl leading-none mt-1" aria-hidden>school</span>
              <div>
                <span className="font-label-sm text-label-sm text-on-tertiary-container">BACHARELADO</span>
                <h3 className="font-headline-md text-headline-md text-primary">Engenharia de Software</h3>
                <div className="text-secondary font-body-md text-body-md">Universidade Pitágoras Unopar Anhanguera — Mogi das Cruzes/SP</div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-surface-container-high px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">2º semestre</span>
                  <span className="bg-surface-container-high px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">Noturno</span>
                  <span className="bg-surface-container-high px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">Em andamento</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-secondary shrink-0">2026 — previsão 12/2029</div>
          </div>
        </div>

        <h3 className="font-headline-md text-headline-md text-primary mb-4 mt-10">CURSOS RELEVANTES</h3>

        <div className="space-y-3">
          {courses.map(c => (
            <div key={c.name} className="flex items-center justify-between gap-4 rounded-md p-5 border border-outline-variant/20" style={{ backgroundColor: 'var(--surface)', color: 'var(--text)' }}>
              <div className="flex items-center gap-4">
                {c.logo ? (
                  <img src={c.logo} alt={`Logo ${c.platform}`} className="w-10 h-10 rounded-full object-cover shrink-0" />
                ) : (
                  <span className="material-symbols-outlined text-secondary leading-none" aria-hidden>workspace_premium</span>
                )}
                <div>
                  <div className="font-semibold text-primary">{c.name}</div>
                  <div className="text-sm text-secondary">{c.platform}</div>
                </div>
              </div>
              {c.certification && (
                <a
                  href={c.certification}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-label-md text-label-md border border-outline-variant px-4 py-2 rounded-lg hover:bg-surface-container transition-colors whitespace-nowrap shrink-0"
                >
                  <span className="material-symbols-outlined text-[16px]" aria-hidden>verified</span>
                  Certificado
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}