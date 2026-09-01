import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-surface border-t border-outline-variant/30 mt-xl">
      <div className="w-full py-xl px-gutter max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-headline-md text-headline-md font-bold text-primary dark:text-on-primary-fixed">DevPortfolio</div>

        <div className="flex items-center gap-6">
          <nav className="flex gap-3">
            {/* Circular icon link */}
            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href="https://github.com/LeandroSantosP" target="_blank" rel="noreferrer" aria-label={t('common.aria.github')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.115 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .26.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" fill="currentColor" />
              </svg>
            </a>

            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href="https://www.linkedin.com/in/leandro-p-dos-santos" target="_blank" rel="noreferrer noopener" aria-label={t('common.aria.linkedin')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4.98 3.5C4.98 4.6 4.12 5.5 3 5.5 1.88 5.5 1 4.6 1 3.5 1 2.4 1.88 1.5 3 1.5c1.12 0 1.98.9 1.98 2zM1.5 8.98h3V23h-3V8.98zM8.98 8.98h2.87v1.92h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58V23h-3v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.5 1.69-2.5 3.44V23h-3V8.98z" fill="currentColor" />
              </svg>
            </a>

            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href="mailto:skp.Tridimensional@gmail.com" target="_blank" rel="noreferrer noopener" aria-label={t('common.aria.email')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
              </svg>
            </a>
          </nav>

          <a
            className="inline-block border border-outline-variant text-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-[color-mix(in_srgb,var(--text)_10%,transparent)] transition-colors whitespace-nowrap"
            href="/Leandro-pereira-dos-santos.pdf"
            download
          >
            {t('common.downloadCv')}
          </a>
        </div>

        <p className="font-body-md text-body-md text-on-secondary-container dark:text-secondary-fixed-dim">{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}