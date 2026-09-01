import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

export default function Experience(): JSX.Element {
  const { t } = useTranslation()
  const bullets = t('experience.bullets', { returnObjects: true }) as string[]

  return (
    <section className="transition-[transform,opacity] duration-700 opacity-100" id="experience">
      <div className="mb-8">
        <h2 className="font-headline-lg text-headline-lg text-primary">{t('experience.title')}</h2>
      </div>

      <div
        className="rounded-md p-6 border border-outline-variant/30"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--surface) 55%, transparent)',
          color: 'var(--text)',
          backdropFilter: 'blur(16px) saturate(160%)',
          WebkitBackdropFilter: 'blur(16px) saturate(160%)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        }}
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="font-semibold text-primary">
              <Trans i18nKey="experience.role" components={{ tag: <span className="text-on-tertiary-container" /> }} />
            </div>
          </div>
          <div className="text-sm text-secondary">{t('experience.period')}</div>
        </div>

        <ul className="mt-4 list-none space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[16px] leading-none mt-1 shrink-0" aria-hidden>check_circle</span>
              <span className="text-body-md text-secondary">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}