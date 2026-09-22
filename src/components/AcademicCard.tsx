import React from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, GraduationCap } from 'lucide-react'

export default function AcademicCard(): JSX.Element {
  const { t } = useTranslation()

  return (
    <section className="academic-card-section" id="education">
      <div className="academic-card-heading">
        <h2 className="font-headline-lg text-headline-lg text-primary">{t('trajectory.title')}</h2>
        <a className="academic-card-link" href="/certificados">
          {t('nav.certificates')}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <article className="academic-card">
        <div className="academic-card-icon" aria-hidden="true">
          <GraduationCap size={22} strokeWidth={1.8} />
        </div>
        <div className="academic-card-main">
          <span className="academic-card-tag">{t('trajectory.degreeTag')}</span>
          <h3>{t('trajectory.degreeTitle')}</h3>
          <p>{t('trajectory.university')}</p>
          <div className="academic-card-chips">
            <span>{t('trajectory.semester')}</span>
            <span>{t('trajectory.inProgress')}</span>
            <span>{t('trajectory.gpa')}</span>
          </div>
        </div>
        <div className="academic-card-period">{t('trajectory.period')}</div>
      </article>
    </section>
  )
}
