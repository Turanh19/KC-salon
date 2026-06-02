import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'kc-lang'

function getInitialLang() {
  if (typeof window === 'undefined') return 'es'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'es' || saved === 'en') return saved
  const nav = window.navigator?.language?.toLowerCase() || ''
  return nav.startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  // Inline translator: t('texto es', 'text en')
  const t = useCallback((es, en) => (lang === 'en' ? (en ?? es) : es), [lang])

  // Localize a value that may be a plain string or an { es, en } object.
  const L = useCallback(
    (value) => {
      if (value == null) return ''
      if (typeof value === 'string') return value
      return value[lang] ?? value.es ?? value.en ?? ''
    },
    [lang],
  )

  const toggle = useCallback(() => setLang((l) => (l === 'es' ? 'en' : 'es')), [])

  const value = useMemo(() => ({ lang, setLang, toggle, t, L }), [lang, t, L, toggle])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
