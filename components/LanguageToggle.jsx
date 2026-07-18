'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex shrink-0 items-center rounded-full border border-ink/15 p-0.5 font-body text-[13px] font-bold">
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={
          'rounded-full px-2.5 py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ' +
          (lang === 'en' ? 'bg-accent text-neutral-100' : 'text-ink/60 hover:text-ink')
        }
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('zh')}
        aria-pressed={lang === 'zh'}
        className={
          'rounded-full px-2.5 py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ' +
          (lang === 'zh' ? 'bg-accent text-neutral-100' : 'text-ink/60 hover:text-ink')
        }
      >
        中文
      </button>
    </div>
  );
}
