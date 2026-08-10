import React, { useEffect, useState } from 'react'
import { scrollToId } from '../utils/scroll'
import { Code, Sun, Moon } from 'lucide-react'

export default function TopNav() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

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

  return (
    <nav className="bg-surface/80 backdrop-blur-md dark:bg-surface-container/80 dock-full-width top-0 sticky z-50 border-b border-outline-variant/20">
      <div className="flex justify-between items-center w-full px-gutter py-4 max-w-container-max mx-auto">
        <div className="font-headline-md text-headline-md font-semibold tracking-tight text-primary dark:text-on-primary-fixed flex items-center gap-2" aria-label="DevPortfolio">
          <Code className="w-6 h-6" aria-hidden="true" />
          <span className="sr-only">DevPortfolio</span>
        </div>

        <div className="hidden md:flex items-center gap-xl">
          <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors font-label-md text-label-md" href="#about" onClick={(e) => { e.preventDefault(); scrollToId('#about'); }}>Sobre</a>
          <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors font-label-md text-label-md" href="#projects" onClick={(e) => { e.preventDefault(); scrollToId('#projects'); }}>Projetos</a>
          <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors font-label-md text-label-md" href="#skills" onClick={(e) => { e.preventDefault(); scrollToId('#skills'); }}>Habilidades</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-pressed={isDark}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            onClick={() => setIsDark(v => !v)}
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary/5 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <a
            href="#contact"
            className="topnav-contact px-6 py-2 rounded-lg font-label-md text-label-md bg-primary text-on-primary hover:opacity-70 transition-opacity duration-300 active:scale-95 transition-transform duration-200 dark:bg-primary dark:text-on-primary"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  )
}


