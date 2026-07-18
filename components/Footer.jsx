'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { T } from '@/data/translations';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="px-6 py-14 text-center font-body text-[13px] leading-7 text-ink/70">
      {T.footer.text[lang]}
    </footer>
  );
}
