import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { scrollToId } from '../utils/scroll'
import { setLanguage, SUPPORTED_LANGUAGES } from '../i18n'
import { Code, Sun, Moon, Menu, X } from 'lucide-react'

function languageLabel(lng: string): string {
  return lng === 'en' ? 'EN' : 'PT'
}

export default function TopNav() {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return false
  })
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // apply class to documentElement
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark)
    }
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch (_) {
      // ignore
    }
  }, [isDark])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const navItems = [
    { id: '#home', label: t('nav.about') },
    { id: '#experience', label: t('nav.experience') },
    { id: '#timeline', label: t('nav.projects') },
    { id: '#skills', label: t('nav.skills') },
    { id: '#trajectory', label: t('nav.academic') },
  ]

  const goTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollToId(id)
  }

  return (
    <nav className="bg-surface/80 backdrop-blur-md dark:bg-surface-container/80 dock-full-width top-0 sticky z-50 border-b border-outline-variant/20">
      <div className="flex justify-between items-center w-full px-gutter py-4 max-w-container-max mx-auto">
        <div className="font-headline-md text-headline-md font-semibold tracking-tight text-primary dark:text-on-primary-fixed flex items-center gap-2" aria-label="DevPortfolio">
          <Code className="w-6 h-6" aria-hidden="true" />
          <span className="sr-only">DevPortfolio</span>
        </div>

        <div className="hidden md:flex items-center gap-xl">
          {navItems.map((item) => (
            <a key={item.id} className="text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors font-label-md text-label-md" href={item.id} onClick={goTo(item.id)}>{item.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center rounded-full border border-outline-variant overflow-hidden"
            role="group"
            aria-label={t('nav.language')}
          >
            {SUPPORTED_LANGUAGES.map((lng) => (
              <button
                key={lng}
                onClick={() => setLanguage(lng)}
                aria-pressed={currentLanguage === lng}
                className={`w-10 h-10 font-label-md text-label-md transition-colors ${
                  currentLanguage === lng
                    ? 'bg-primary text-on-primary'
                    : 'text-secondary hover:bg-primary/5'
                }`}
              >
                {languageLabel(lng)}
              </button>
            ))}
          </div>

          <button
            aria-pressed={isDark}
            aria-label={isDark ? t('nav.themeLight') : t('nav.themeDark')}
            title={isDark ? t('nav.themeLight') : t('nav.themeDark')}
            onClick={() => setIsDark(v => !v)}
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary/5 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex topnav-contact px-6 py-2 rounded-lg font-label-md text-label-md bg-primary text-on-primary hover:opacity-70 transition-opacity duration-300 active:scale-95 transition-transform duration-200 dark:bg-primary dark:text-on-primary"
          >
            {t('nav.contact')}
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.menu')}
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-primary/5 transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-nav-menu" className="md:hidden border-t border-outline-variant/20 bg-surface/95 dark:bg-surface-container/95 backdrop-blur-md px-gutter py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a key={item.id} href={item.id} onClick={goTo(item.id)} className="px-3 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim hover:bg-primary/10 hover:text-primary transition-colors font-label-md text-label-md">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={goTo('#contact')}
            className="sm:hidden px-3 py-3 rounded-lg text-secondary dark:text-secondary-fixed-dim hover:bg-primary/10 hover:text-primary transition-colors font-label-md text-label-md"
          >
            {t('nav.contact')}
          </a>
        </div>
      )}
    </nav>
  )
}