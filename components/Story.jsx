'use client';

import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import ImagePlaceholder from './ImagePlaceholder';
import { useLanguage } from '@/lib/LanguageContext';
import { T } from '@/data/translations';

export default function Story({ image }) {
  const { lang } = useLanguage();

  return (
    <section id="story" className="grid grid-cols-1 split:grid-cols-[5fr_7fr] items-center gap-y-7 split:gap-x-[clamp(24px,5vw,96px)] px-[clamp(20px,5vw,72px)] py-[84px] max-w-[1200px] mx-auto">
      <figure className="order-first m-0 w-full overflow-hidden rounded-xl">
        {image ? (
          <Image
            src={urlFor(image).width(700).height(875).fit('crop').auto('format').url()}
            alt={T.story.photoAlt[lang]}
            width={700}
            height={875}
            sizes="(min-width: 881px) 42vw, 100vw"
            className="w-full aspect-[4/5] object-cover"
          />
        ) : (
          <ImagePlaceholder label={T.story.photoAlt[lang]} className="w-full aspect-[4/5]" />
        )}
      </figure>
      <div>
        <span className="block text-[13px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-3">
          {T.story.kicker[lang]}
        </span>
        <h2 className="font-heading text-[34px] leading-[1.3]">
          {T.story.heading[lang]}
        </h2>
        <p className="mt-3 max-w-[54ch] font-body text-[15.5px] leading-7 text-ink/80">
          {T.story.p1[lang]}
        </p>
        <p className="mt-3 max-w-[54ch] font-body text-[15.5px] leading-7 text-ink/80">
          {T.story.p2[lang]}
        </p>
      </div>
    </section>
  );
}
