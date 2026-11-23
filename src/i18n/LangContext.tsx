import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lang, Translation, translations } from './translations';

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
};

const LangContext = createContext<LangContextValue | undefined>(undefined);

const STORAGE_KEY = 'puentemx-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'es' || stored === 'zh') return stored;
  const browser = navigator.language.toLowerCase();
  if (browser.startsWith('zh')) return 'zh';
  if (browser.startsWith('es')) return 'es';
  return 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh' : lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
