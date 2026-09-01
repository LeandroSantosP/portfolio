import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

type TimelineEvent = {
  key: string
  github?: string
  icon?: string
}

const events: TimelineEvent[] = [
  { key: 'controlApi', github: 'https://github.com/LeandroSantosP/control-api', icon: 'account_balance_wallet' },
  { key: 'sellEcom', github: 'https://github.com/LeandroSantosP/sell-ecom', icon: 'storefront' },
  { key: 'degree', icon: 'school' },
  { key: 'flyRank', icon: 'work' },
  { key: 'scraper', github: 'https://github.com/LeandroSantosP/The-polite-scraper', icon: 'bot' },
]

const transComponents = {
  tag1: <span className="text-red-500" />,
  tag2: <span className="text-emerald-500" />,
  tag3: <span className="text-on-tertiary-container" />,
}

export default function Timeline(): JSX.Element {
  const { t, i18n } = useTranslation()

  return (
    <section className="transition-[transform,opacity] duration-700 opacity-100" id="timeline">
      <div className="mb-8">
        <h2 className="font-headline-lg text-headline-lg text-primary">{t('timeline.title')}</h2>
        <p className="text-secondary font-body-md text-body-md max-w-xl mt-2">{t('timeline.subtitle')}</p>
      </div>

      <div className="relative">
        {events.map((ev, idx) => {
          const base = `timeline.events.${ev.key}`
          const period = t(`${base}.period`) as string
          const title = t(`${base}.title`) as string
          const body = i18n.exists(`${base}.body`) ? (t(`${base}.body`) as string) : undefined
          const bullets = i18n.exists(`${base}.bullets`)
            ? (t(`${base}.bullets`, { returnObjects: true }) as string[])
            : undefined
          const hasSubtitle = i18n.exists(`${base}.subtitle`)

          return (
            <div key={idx} className="relative flex gap-4 pb-8 last:pb-0">
              <div className="absolute left-[11px] top-3 bottom-0 w-0.5 bg-outline-variant" />
              <span className="relative z-10 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                {ev.icon && <span className="material-symbols-outlined text-[14px] leading-none" aria-hidden>{ev.icon}</span>}
              </span>

              <div className="flex-1 rounded-md p-5 border border-outline-variant/30" style={{
                backgroundColor: 'color-mix(in srgb, var(--surface) 55%, transparent)',
                color: 'var(--text)',
                backdropFilter: 'blur(16px) saturate(160%)',
                WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              }}>
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div>
                    <h3 className="font-semibold text-primary">{title}</h3>
                    {hasSubtitle && (
                      <div className="text-secondary text-sm italic mt-0.5">
                        <Trans i18nKey={`${base}.subtitle`} components={transComponents} />
                      </div>
                    )}
                    {ev.github && (
                      <a className="text-primary hover:underline text-label-sm block mt-1 break-words" href={ev.github} target="_blank" rel="noreferrer">{t('timeline.githubPrefix')}: {ev.github}</a>
                    )}
                  </div>
                  {period && <div className="text-sm text-secondary shrink-0">{period}</div>}
                </div>

                {body && <p className="mt-3 text-body-md font-body-md text-secondary">{body}</p>}

                {bullets && (
                  <ul className="mt-4 list-none space-y-2">
                    {bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-[16px] leading-none mt-1 shrink-0" aria-hidden>check_circle</span>
                        <span className="text-body-md text-secondary">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}