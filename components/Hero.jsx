'use client';

import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import ImagePlaceholder from './ImagePlaceholder';
import { useLanguage } from '@/lib/LanguageContext';
import { T } from '@/data/translations';

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero({ image }) {
  const { lang } = useLanguage();

  return (
    <section className="relative grid grid-cols-1 split:grid-cols-[6fr_5fr] items-center gap-y-7 split:gap-x-[clamp(24px,5vw,72px)] px-[clamp(20px,5vw,72px)] py-[84px] max-w-[1200px] mx-auto">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[160px] -bottom-[200px] -z-10 h-[380px] w-[380px] rounded-full bg-sage-200"
      />
      <div>
        <h1 className="font-heading text-[38px] md:text-[64px] leading-[1.08] -ml-[0.028em]">
          <span className="block">{T.hero.heading1[lang]}</span>
          <span className="block">{T.hero.heading2[lang]}</span>
        </h1>
        <p className="mt-6 max-w-[58ch] font-body text-[17px] leading-7 text-ink">
          {T.hero.subhead[lang]}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => scrollToId('menu')}
            className="rounded-full bg-accent px-6 py-3 font-body font-bold text-neutral-100 hover:bg-accent-600 active:bg-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {T.hero.exploreMenu[lang]}
          </button>
          <button
            type="button"
            onClick={() => scrollToId('visit')}
            className="rounded-full border border-accent-700 px-6 py-3 font-body font-bold text-accent-700 hover:bg-accent-100 active:bg-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {T.hero.findUs[lang]}
          </button>
        </div>
      </div>
      <figure className="m-0 w-full overflow-hidden rounded-xl shadow-lg">
        {image ? (
          <Image
            src={urlFor(image).width(800).height(1000).fit('crop').auto('format').url()}
            alt={T.hero.photoAlt[lang]}
            width={800}
            height={1000}
            priority
            className="w-full aspect-[4/5] object-cover"
          />
        ) : (
          <ImagePlaceholder label={T.hero.photoAlt[lang]} className="w-full aspect-[4/5]" />
        )}
      </figure>
    </section>
  );
}
