'use client';

import { FOUNDER_STORY } from '@/data/founderStory';
import { useLanguage } from '@/lib/LanguageContext';
import { T } from '@/data/translations';

export default function FounderStory() {
  const { lang } = useLanguage();

  return (
    <section className="px-[clamp(20px,5vw,72px)] pb-[84px] max-w-[1200px] mx-auto">
      <span className="block text-[13px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-3">
        {T.founder.kicker[lang]}
      </span>
      <h2 className="font-heading text-[34px] leading-[1.3]">
        {T.founder.heading[lang]}
        <span className="block font-body text-[15.5px] font-semibold leading-7 mt-1 text-ink/70">
          {T.founder.subheading[lang]}
        </span>
      </h2>

      <details className="mt-7 max-w-[720px] rounded-lg bg-surface px-6 py-5 md:px-8">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-heading text-xl marker:content-none [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          📝 {T.founder.readMore[lang]}
        </summary>
        <div className="mt-3 max-w-[60ch] font-body text-[15px] leading-7 text-ink/80">
          {FOUNDER_STORY.map((para, i) => (
            <p key={i} className={i > 0 ? 'mt-4' : ''}>
              {para[lang]}
            </p>
          ))}
        </div>
      </details>
    </section>
  );
}
