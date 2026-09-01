import React from 'react'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[]

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-xl items-center transition-[transform,opacity] duration-700 opacity-100" id="about">
      <div className="md:col-span-5 relative">
        <div className="aspect-square rounded-lg overflow-hidden bg-surface-container shadow-sm border border-outline-variant/30">
          <img src="/perfil-photo.jpg" alt={t('about.imgAlt')} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="md:col-span-7 flex flex-col gap-6">
        <h2 className="font-headline-lg text-headline-lg text-primary">{t('about.heading')}</h2>
        <div className="font-body-lg text-body-lg text-secondary flex flex-col gap-4">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}