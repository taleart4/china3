import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { Lang, langNames } from '@/i18n/translations';

const LANGS: Lang[] = ['en', 'es', 'zh'];

export default function LanguageSwitcher({ scrolled }: { scrolled: boolean }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors ${
          scrolled
            ? 'text-slate-600 hover:bg-gray-100 hover:text-slate-900'
            : 'text-white/80 hover:bg-white/10 hover:text-white'
        }`}
      >
        <Globe className="h-4 w-4" />
        <span>{langNames[lang]}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-lg">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2 text-sm transition-colors ${
                lang === l
                  ? 'bg-emerald-50 font-semibold text-emerald-700'
                  : 'text-slate-700 hover:bg-gray-50'
              }`}
            >
              {langNames[l]}
              {lang === l && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
