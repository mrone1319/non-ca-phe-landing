'use client';

import ImagePlaceholder from './ImagePlaceholder';
import { useLanguage } from '@/lib/LanguageContext';
import { T } from '@/data/translations';

const SOCIAL_PLACEHOLDERS = [
  { id: 1, alt: { en: 'Instagram check-in', zh: 'Instagram 打卡' } },
  { id: 2, alt: { en: 'Xiaohongshu check-in', zh: '小红书打卡' } },
  { id: 3, alt: { en: 'Instagram check-in', zh: 'Instagram 打卡' } },
  { id: 4, alt: { en: 'Xiaohongshu check-in', zh: '小红书打卡' } },
  { id: 5, alt: { en: 'Instagram check-in', zh: 'Instagram 打卡' } },
  { id: 6, alt: { en: 'Xiaohongshu check-in', zh: '小红书打卡' } },
];

export default function Culture() {
  const { lang } = useLanguage();

  return (
    <section className="px-[clamp(20px,5vw,72px)] py-[84px] max-w-[1200px] mx-auto">
      <span className="block text-[13px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-3">
        {T.culture.kicker[lang]}
      </span>
      <h2 className="font-heading text-[34px] leading-[1.3]">
        {T.culture.heading[lang]}
      </h2>

      <details open className="mt-7 max-w-[720px] rounded-lg bg-surface px-6 py-5 md:px-8">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-heading text-xl marker:content-none [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          💡 {T.culture.accordionSummary[lang]}
        </summary>
        <div className="mt-3 max-w-[60ch] font-body text-[15px] leading-7 text-ink/80">
          <p>{T.culture.p1[lang]}</p>
        </div>
      </details>

      <div className="mt-16">
        <span className="block text-[13px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-3">
          {T.culture.communityKicker[lang]}
        </span>
        <h2 className="font-heading text-[34px] leading-[1.3]">
          {T.culture.communityHeading[lang]}
        </h2>
        <div className="mt-7 grid grid-cols-3 split:grid-cols-6 gap-3">
          {SOCIAL_PLACEHOLDERS.map((s) => (
            <ImagePlaceholder
              key={s.id}
              label={s.alt[lang]}
              className="aspect-square w-full rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
