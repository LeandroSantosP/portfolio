import React from 'react'
import { useTranslation } from 'react-i18next'

type Category = {
  id: string
  colorClass: string
}

const categories: Category[] = [
  { id: 'technical', colorClass: 'bg-cyan-400' },
  { id: 'cloud', colorClass: 'bg-amber-400' },
  { id: 'db', colorClass: 'bg-emerald-400' },
  { id: 'tools', colorClass: 'bg-violet-400' },
  { id: 'ai', colorClass: 'bg-sky-400' },
  { id: 'soft', colorClass: 'bg-rose-400' },
  { id: 'lang', colorClass: 'bg-slate-400' },
]

export default function Skills(): JSX.Element {
  const { t } = useTranslation()

  return (
    <section className="bg-surface-container-low rounded-lg px-xl py-xl transition-[transform,opacity] duration-700 opacity-100 border border-outline-variant/30" id="skills">
      <div className="mb-6">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-2">{t('skills.title')}</h2>
        <p className="text-secondary font-body-md text-body-md max-w-xl">{t('skills.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <div key={cat.id} className="p-6 rounded-lg bg-surface/5 border border-outline-variant/20">
            <div className="flex items-center gap-3 mb-4">
              <span className={`${cat.colorClass} w-3 h-3 rounded-full shrink-0`} />
              <h3 className="font-label-sm text-label-sm text-primary font-semibold">{t(`skills.categories.${cat.id}.title`)}</h3>
            </div>

            {/* Special rendering for languages */}
            {cat.id === 'lang' ? (
              <div className="mt-2 rounded-md bg-surface/3 p-4 border border-outline-variant/10">
                <div className="text-body-md font-body-md text-secondary space-y-2">
                  {(t(`skills.categories.${cat.id}.items`, { returnObjects: true }) as Array<{ name: string; detail: string }>).map((item, i) => (
                    <p key={item.name} className={i === 0 ? 'mb-2' : 'mb-0'}><strong>{item.name}</strong>: {item.detail}</p>
                  ))}
                </div>
              </div>
            ) : (
              <ul className="space-y-2 text-body-md font-body-md text-secondary">
                {(t(`skills.categories.${cat.id}.items`, { returnObjects: true }) as string[]).map(item => (
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