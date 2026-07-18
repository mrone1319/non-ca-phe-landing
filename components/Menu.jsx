'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import ImagePlaceholder from './ImagePlaceholder';
import { useLanguage } from '@/lib/LanguageContext';
import { T } from '@/data/translations';

function MenuCard({ item, lang }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md bg-neutral-100 shadow-sm">
      <figure className="relative m-0">
        {item.signature && (
          <span className="absolute left-3 top-3 rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700">
            🌟 {T.menu.signature[lang]}
          </span>
        )}
        {item.image ? (
          <Image
            src={urlFor(item.image).width(600).height(450).fit('crop').auto('format').url()}
            alt={lang === 'zh' ? item.titleZh : item.titleEn}
            width={600}
            height={450}
            sizes="(min-width: 640px) 320px, 100vw"
            className="block w-full aspect-[4/3] object-cover"
          />
        ) : (
          <ImagePlaceholder label={item.vietnameseName} className="w-full aspect-[4/3]" />
        )}
      </figure>
      <div className="p-4">
        <p className="font-body font-bold text-ink">
          {lang === 'zh' ? item.titleZh : item.titleEn}
          <span className="block text-[0.75em] font-semibold opacity-60 mt-1">{item.vietnameseName}</span>
        </p>
        <p className="mt-2 font-body text-[14.5px] leading-6 text-ink/80">
          {lang === 'zh' ? item.descZh : item.descEn}
        </p>
      </div>
    </div>
  );
}

export default function Menu({ items = [] }) {
  const { lang } = useLanguage();
  const [tab, setTab] = useState('phin');
  const categories = ['phin', 'special'];
  const activeItems = items.filter((item) => item.category === tab);

  return (
    <section id="menu" className="px-[clamp(20px,5vw,72px)] py-[84px] max-w-[1200px] mx-auto">
      <h2 className="font-heading text-[34px] leading-[1.3]">
        {T.menu.heading[lang]}
      </h2>

      <div role="tablist" aria-label="Menu categories" className="mt-7 mb-8 flex flex-wrap gap-2">
        {categories.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            aria-controls={`panel-${key}`}
            id={`tab-${key}`}
            onClick={() => setTab(key)}
            className={
              'rounded-full border px-5 py-2.5 font-body text-[15px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ' +
              (tab === key
                ? 'border-accent bg-accent text-neutral-100'
                : 'border-ink/15 bg-transparent text-ink hover:bg-accent-100 hover:border-accent-300')
            }
          >
            {T.menu.categories[key][lang]}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
        className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7"
      >
        {activeItems.map((item) => (
          <MenuCard key={item._id} item={item} lang={lang} />
        ))}
      </div>
    </section>
  );
}
