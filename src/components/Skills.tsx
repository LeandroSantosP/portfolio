import React from 'react'

type Category = {
  id: string
  title: string
  items: string[]
  colorClass: string
}

const categories: Category[] = [
  {
    id: 'technical',
    title: 'Habilidades Técnicas',
    colorClass: 'bg-cyan-400',
    items: ['Java', 'Spring Boot', 'JavaScript', 'Node.js', 'React.js', 'APIs REST', 'GitHub', 'Pacote Office']
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    colorClass: 'bg-amber-400',
    items: ['AWS (VPC, EC2, S3)', 'CI/CD (GitHub Actions)', 'Docker', 'Linux']
  },
  {
    id: 'db',
    title: 'Banco de Dados',
    colorClass: 'bg-emerald-400',
    items: ['PostgreSQL', 'MySQL', 'SQL', 'Hibernate / JPA']
  },
  {
    id: 'tools',
    title: 'Ferramentas & Metodologias',
    colorClass: 'bg-violet-400',
    items: ['Power BI', 'Git', 'Jira', 'JUnit', 'JWT', 'OAuth2', 'Maven', 'SDD', 'Scrum']
  },
  {
    id: 'ai',
    title: 'IA',
    colorClass: 'bg-sky-400',
    items: ['Prompt Engineering', 'Claude Code', 'Codex', 'Gemini', 'Opencode']
  },
  {
    id: 'soft',
    title: 'Qualidades Pessoais',
    colorClass: 'bg-rose-400',
    items: ['Autodidata', 'Aprendiz rápido', 'Organizado', 'Bom em solução de problemas']
  },
  {
    id: 'lang',
    title: 'Idiomas',
    colorClass: 'bg-slate-400',
    items: ['Inglês: Fluente (Leitura e Compreensão) | Intermediário (Fala e Escrita)', 'Português: Nativo']
  }
]

export default function Skills(): JSX.Element {
  return (
    <section className="bg-surface-container-low rounded-lg px-xl py-xl transition-all duration-700 opacity-100" id="skills">
      <div className="mb-6">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-2">HABILIDADES / SKILLS</h2>
        <p className="text-secondary font-body-md text-body-md max-w-xl">Visão geral das minhas competências técnicas, metodologias e idiomas.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <div key={cat.id} className="p-6 rounded-lg bg-surface/5 border border-outline-variant/20">
            <div className="flex items-center gap-3 mb-4">
              <span className={`${cat.colorClass} w-3 h-3 rounded-full shrink-0`} />
              <h3 className="font-label-sm text-label-sm text-primary font-semibold">{cat.title}</h3>
            </div>

            {/* Special rendering for languages */}
            {cat.id === 'lang' ? (
              <div className="mt-2 rounded-md bg-surface/3 p-4 border border-outline-variant/10">
                <div className="text-body-md font-body-md text-secondary space-y-2">
                  <p className="mb-2"><strong>Inglês</strong>: Fluente (Leitura e Compreensão) — Intermediário (Fala e Escrita)</p>
                  <p><strong>Português</strong>: Nativo</p>
                </div>
              </div>
            ) : (
              <ul className="space-y-2 text-body-md font-body-md text-secondary">
                {cat.items.map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-surface/10 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
