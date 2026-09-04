import React from 'react'
import { useTranslation } from 'react-i18next'

type Course = {
  nameKey: string
  platform: string
  logo?: string
  certification?: string
}

const courses: Course[] = [
  {
    nameKey: 'cs50',
    platform: 'Harvard',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQF5t62bcL0e9g/company-logo_200_200/company-logo_200_200/0/1631318058235?e=1789603200&v=beta&t=FAVluJm-TJah9PDh5ks_T9TO3NQCi4pZDfyr4gSEJO0',
    certification: 'https://certificates.cs50.io/0c61dd6a-88d0-4904-9b43-a365d142d399.pdf?size=letter'
  },
  {
    nameKey: 'excel',
    platform: 'Santander Open Academy',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHbRU5HNC8kOA/company-logo_200_200/company-logo_200_200/0/1701098269536/santander_universidades_logo?e=1789603200&v=beta&t=5zMzP4KnG38MDzel2BE94njmfdlFq-RSHJOc_DW8E8c',
    certification: 'https://drive.google.com/file/d/1fXtrj12_jZJ02FtIlnzb3obEh-nwX4xh/view?usp=sharing'
  },
  {
    nameKey: 'efset',
    platform: 'EF SET',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEw-1S8jictTA/company-logo_200_200/B4EZdFpZBcH0AI-/0/1749220168176/efset_logo?e=1790208000&v=beta&t=IoCe37BFJEgGl3g33Fg949Dug2nPXBfRIQewgn6M8oE',
    certification: 'https://cert.efset.org/en/ebiMhd'
  },
  {
    nameKey: 'aws',
    platform: 'TreinaWeb',
    certification: 'https://www.linkedin.com/learning/certificates/ee8f011e6fa53d742dc56e947a0763b192fbc0a0ea3aabf2769d0913f3edccb9'
  }
]

export default function Trajectory() {
  const { t } = useTranslation()

  return (
    <section
      className="py-xl mt-2xl transition-[transform,opacity] opacity-100"
      id="trajectory"
      style={{
        background:
          'radial-gradient(1200px 600px at 15% -10%, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0) 55%),' +
          'radial-gradient(900px 500px at 110% 120%, rgba(184,134,11,0.2) 0%, rgba(184,134,11,0) 60%),' +
          'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)',
        backgroundColor: 'color-mix(in srgb, var(--surface) 62%, transparent)',
        backdropFilter: 'blur(24px) saturate(150%)',
        WebkitBackdropFilter: 'blur(24px) saturate(150%)',
        boxShadow: 'inset 0 1px 0 rgba(255, 252, 245, 0.3), 0 18px 48px rgba(0, 0, 0, 0.08)',
        borderTop: '1px solid color-mix(in srgb, var(--outline) 70%, transparent)',
        borderBottom: '1px solid color-mix(in srgb, var(--outline) 55%, transparent)',
      }}
    >
      <div className="max-w-3xl mx-auto px-gutter">
        <h2
          className="font-headline-lg text-headline-lg mb-6 font-semibold"
          style={{ color: 'var(--text)', textShadow: '0 1px 2px rgba(255, 255, 255, 0.35)' }}
        >
          {t('trajectory.title')}
        </h2>

        <div
          className="rounded-md p-6 border border-outline-variant/20"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--surface) 78%, transparent)',
            color: 'var(--text)',
            backdropFilter: 'blur(18px) saturate(140%)',
            WebkitBackdropFilter: 'blur(18px) saturate(140%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.28), 0 10px 30px rgba(0, 0, 0, 0.08)',
          }}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl leading-none mt-1" aria-hidden>school</span>
              <div>
                <span className="font-label-sm text-label-sm text-on-tertiary-container">{t('trajectory.degreeTag')}</span>
                <h3 className="font-headline-md text-headline-md text-primary">{t('trajectory.degreeTitle')}</h3>
                <div className="text-secondary font-body-md text-body-md">{t('trajectory.university')}</div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 rounded-full font-label-sm text-label-sm" style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 18%, var(--surface))', color: 'var(--text)' }}>{t('trajectory.semester')}</span>
                  <span className="px-3 py-1 rounded-full font-label-sm text-label-sm" style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 18%, var(--surface))', color: 'var(--text)' }}>{t('trajectory.shift')}</span>
                  <span className="px-3 py-1 rounded-full font-label-sm text-label-sm" style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 18%, var(--surface))', color: 'var(--text)' }}>{t('trajectory.inProgress')}</span>
                  <span className="px-3 py-1 rounded-full font-label-sm text-label-sm" style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 18%, var(--surface))', color: 'var(--text)' }}>{t('trajectory.gpa')}</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-secondary shrink-0">{t('trajectory.period')}</div>
          </div>
        </div>

        <h3
          className="font-headline-md text-headline-md mb-4 mt-10 font-semibold"
          style={{ color: 'var(--text)', textShadow: '0 1px 2px rgba(255, 255, 255, 0.35)' }}
        >
          {t('trajectory.coursesTitle')}
        </h3>

        <div className="space-y-3">
          {courses.map(c => (
            <div
              key={c.nameKey}
              className="flex items-center justify-between gap-4 flex-wrap rounded-md p-5 border border-outline-variant/20"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--surface) 78%, transparent)',
                color: 'var(--text)',
                backdropFilter: 'blur(18px) saturate(140%)',
                WebkitBackdropFilter: 'blur(18px) saturate(140%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.28), 0 10px 30px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="flex items-center gap-4 min-w-0">
                {c.logo ? (
                  <img src={c.logo} alt={`Logo ${c.platform}`} className="w-10 h-10 rounded-full object-cover shrink-0" />
                ) : (
                  <span className="material-symbols-outlined text-secondary leading-none" aria-hidden>workspace_premium</span>
                )}
                <div>
                  <div className="font-semibold text-primary">{t(`trajectory.courses.${c.nameKey}`)}</div>
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
                  {t('trajectory.certificate')}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}