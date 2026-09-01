import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ptBR from '../locales/pt-BR/translation.json'
import en from '../locales/en/translation.json'

export const SUPPORTED_LANGUAGES = ['pt-BR', 'en'] as const
export type Language = (typeof SUPPORTED_LANGUAGES)[number]

export const DEFAULT_LANGUAGE: Language = 'pt-BR'

const STORAGE_KEY = 'lang'

export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && (SUPPORTED_LANGUAGES as readonly string[]).includes(saved)) {
      return saved as Language
    }
  } catch (_) {
    // ignore storage access errors
  }
  return DEFAULT_LANGUAGE
}

function applyDocumentLanguage(lng: string): void {
  if (typeof document === 'undefined') return
  document.documentElement.lang = lng === 'pt-BR' ? 'pt-BR' : 'en'

  const title = i18n.t('meta.title')
  if (title) document.title = title

  const description = i18n.t('meta.description')
  if (description) {
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }
}

export function setLanguage(lng: string): void {
  i18n.changeLanguage(lng)
  try {
    window.localStorage.setItem(STORAGE_KEY, lng)
  } catch (_) {
    // ignore storage access errors
  }
}

i18n.use(initReactI18next).init({
  resources: {
    'pt-BR': { translation: ptBR },
    en: { translation: en },
  },
  lng: getStoredLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', applyDocumentLanguage)
applyDocumentLanguage(i18n.language)

export default i18n