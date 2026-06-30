import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translate, type Locale } from './translate'

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (text: string) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ru')

  const toggleLocale = useCallback(() => {
    setLocale((current) => (current === 'ru' ? 'en' : 'ru'))
  }, [])

  const t = useCallback(
    (text: string) => translate(text, locale),
    [locale],
  )

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, toggleLocale, t],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
