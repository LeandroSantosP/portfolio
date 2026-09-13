import React from 'react'
import { useTranslation } from 'react-i18next'
import { Award, Briefcase, FolderKanban, GraduationCap } from 'lucide-react'

const stats = [
  { key: 'education', icon: GraduationCap },
  { key: 'projects', icon: FolderKanban },
  { key: 'certificates', icon: Award },
  { key: 'experience', icon: Briefcase },
] as const

export default function StatsStrip(): JSX.Element {
  const { t } = useTranslation()

  return (
    <section className="stats-strip" aria-label={t('stats.ariaLabel')}>
      {stats.map(({ key, icon: Icon }) => (
        <div className="stat-item" key={key}>
          <Icon className="stat-icon" size={18} strokeWidth={1.8} aria-hidden="true" />
          <div>
            <strong className="stat-value">{t(`stats.items.${key}.value`)}</strong>
            <span className="stat-label">{t(`stats.items.${key}.label`)}</span>
          </div>
        </div>
      ))}
    </section>
  )
}
