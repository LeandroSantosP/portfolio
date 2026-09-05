import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Braces,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Coffee,
  Container,
  Database,
  GitBranch,
  Languages,
  Leaf,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  TestTube2,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Category = {
  id: string
  icon: LucideIcon
  accent: string
}

const categories: Category[] = [
  { id: 'technical', icon: Code2, accent: '#0e7490' },
  { id: 'cloud', icon: Cloud, accent: '#b45309' },
  { id: 'db', icon: Database, accent: '#047857' },
  { id: 'tools', icon: Wrench, accent: '#6d28d9' },
  { id: 'ai', icon: BrainCircuit, accent: '#0369a1' },
  { id: 'soft', icon: Lightbulb, accent: '#be123c' },
  { id: 'lang', icon: Languages, accent: '#475569' },
]

const itemIcons: Record<string, LucideIcon> = {
  Java: Coffee,
  'Spring Boot': Leaf,
  'Node.js': Terminal,
  'React.js': Braces,
  'REST APIs': Network,
  JavaScript: Braces,
  'AWS (VPC, EC2, S3)': Cloud,
  'CI/CD': GitBranch,
  Docker: Container,
  Linux: Terminal,
  PostgreSQL: Database,
  MySQL: Database,
  SQL: Database,
  'Power BI': CheckCircle2,
  Git: GitBranch,
  JWT: ShieldCheck,
  OAuth2: ShieldCheck,
  Scrum: CheckCircle2,
  'Prompt Engineering': Sparkles,
  ChatGPT: BrainCircuit,
  'Claude Code': BrainCircuit,
  Codex: BrainCircuit,
  Gemini: BrainCircuit,
  OpenCode: Code2,
}

function getItemIcon(item: string): LucideIcon {
  return itemIcons[item] ?? TestTube2
}

export default function Skills(): JSX.Element {
  const { t } = useTranslation()

  return (
    <section className="skills-panel transition-[transform,opacity] duration-700 opacity-100" id="skills">
      <div className="skills-heading">
        <h2 className="skills-title">
          <Sparkles aria-hidden="true" size={20} strokeWidth={2.5} />
          {t('skills.title')}
        </h2>
        <p className="text-secondary font-body-md text-body-md max-w-xl">{t('skills.subtitle')}</p>
      </div>

      <div className="skills-categories">
        {categories.map(cat => (
          <div key={cat.id} className="skills-category" style={{ '--category-accent': cat.accent } as React.CSSProperties}>
            <div className="skills-category-heading">
              <span className="skills-category-icon"><cat.icon aria-hidden="true" size={17} /></span>
              <h3>{t(`skills.categories.${cat.id}.title`)}</h3>
            </div>

            {cat.id === 'lang' ? (
              <div className="skills-languages">
                  {(t(`skills.categories.${cat.id}.items`, { returnObjects: true }) as Array<{ name: string; detail: string }>).map((item, i) => (
                    <p key={item.name} className={i === 0 ? 'language-item language-item-first' : 'language-item'}>
                      <span className="language-name">{item.name}</span>
                      <span>{item.detail}</span>
                    </p>
                  ))}
              </div>
            ) : (
              <ul className="skills-items">
                {(t(`skills.categories.${cat.id}.items`, { returnObjects: true }) as string[]).map(item => (
                  <li key={item} className="skill-chip">
                    {React.createElement(getItemIcon(item), { 'aria-hidden': true, size: 17, strokeWidth: 2.2 })}
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