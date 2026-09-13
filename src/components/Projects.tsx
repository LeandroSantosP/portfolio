import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { ArrowUpRight, Github } from 'lucide-react'

type Project = {
  key: 'controlApi' | 'sellEcom' | 'scraper'
  github: string
}

const projects: Project[] = [
  { key: 'scraper', github: 'https://github.com/LeandroSantosP/Embeddable-widget-and-lead-capture-platform' },
  { key: 'controlApi', github: 'https://github.com/LeandroSantosP/control-api' },
  { key: 'sellEcom', github: 'https://github.com/LeandroSantosP/sell-ecom' },
]

const transComponents = {
  tag1: <span className="text-on-tertiary-container" />,
  tag2: <span className="text-emerald-700 dark:text-emerald-400" />,
  tag3: <span className="text-primary" />,
}

export default function Projects(): JSX.Element {
  const { t } = useTranslation()

  return (
    <section className="projects-section" id="projects">
      <div className="academic-card-heading">
        <h2 className="font-headline-lg text-headline-lg text-primary">{t('projects.title')}</h2>
        <span className="section-index">03 / 06</span>
      </div>

      <div className="projects-grid">
        {projects.map(project => {
          const base = `timeline.events.${project.key}`
          return (
            <article className="project-card" key={project.key}>
              <div className="project-card-topline">
                <span className="project-number">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
                <a className="project-github" href={project.github} target="_blank" rel="noreferrer" aria-label={`${t(`${base}.title`)} - GitHub`}>
                  <Github size={17} aria-hidden="true" />
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <h3>{t(`${base}.title`)}</h3>
              <p className="project-subtitle"><Trans i18nKey={`${base}.subtitle`} components={transComponents} /></p>
              <p className="project-body">{t(`${base}.body`)}</p>
              <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                {t('projects.viewCode')}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
