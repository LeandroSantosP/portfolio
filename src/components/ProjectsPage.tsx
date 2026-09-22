import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { ArrowUpRight, CheckCircle2, Github } from 'lucide-react'

type Project = {
  key: 'controlApi' | 'sellEcom' | 'scraper' | 'emailClassifier'
  github: string
  preview: string
}

const projects: Project[] = [
  { key: 'emailClassifier', github: 'https://github.com/LeandroSantosP/email-classifier', preview: '/projects/email-classifier.png' },
  { key: 'scraper', github: 'https://github.com/LeandroSantosP/Embeddable-widget-and-lead-capture-platform', preview: '/projects/lead-capture.gif' },
  { key: 'controlApi', github: 'https://github.com/LeandroSantosP/control-api', preview: '/projects/control-api.png' },
  { key: 'sellEcom', github: 'https://github.com/LeandroSantosP/sell-ecom', preview: '/projects/sell-ecom.png' },
]

const transComponents = {
  tag1: <span className="text-on-tertiary-container" />,
  tag3: <span className="text-primary" />,
}

export default function ProjectsPage(): JSX.Element {
  const { t } = useTranslation()

  return (
    <section className="certificates-page route-page">
      <div className="certificates-inner">
        <div className="certificates-intro">
          <span className="eyebrow">{t('projectsPage.eyebrow')}</span>
          <h1 className="font-headline-xl text-headline-xl text-primary">{t('projectsPage.title')}</h1>
          <p className="text-body-lg text-secondary">{t('projectsPage.subtitle')}</p>
        </div>

        <div className="projects-page-grid">
          {projects.map(project => {
            const base = `timeline.events.${project.key}`
            const bullets = t(`${base}.bullets`, { returnObjects: true, defaultValue: [] }) as string[]
            return (
              <article className="project-card" key={project.key}>
                <a
                  className="project-preview"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  title={t(`${base}.title`)}
                >
                  <img src={project.preview} alt={t(`${base}.title`)} loading="lazy" />
                </a>
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
                <div className="project-highlights">
                  <span className="project-highlights-label">{t('projectsPage.highlights')}</span>
                  <ul className="project-highlights-list">
                    {bullets.map((b, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                  {t('projects.viewCode')}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}