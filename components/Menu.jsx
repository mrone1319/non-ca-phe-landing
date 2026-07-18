'use client';

import { useState } from 'react';
import { MENU } from '@/data/menu';
import ImagePlaceholder from './ImagePlaceholder';

function MenuCard({ item }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md bg-neutral-100 shadow-sm">
      <figure className="relative m-0">
        {item.signature && (
          <span className="absolute left-3 top-3 rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700">
            🌟 Signature / 招牌必点
          </span>
        )}
        <ImagePlaceholder label={item.imageLabel} className="w-full aspect-[4/3]" />
      </figure>
      <div className="p-4">
        <p className="font-body font-bold text-ink">
          {item.title}
          <span className="block text-[0.62em] font-semibold opacity-70 mt-1">{item.sub}</span>
        </p>
        <p className="mt-2 font-body text-[14.5px] leading-6 text-ink/80">{item.desc}</p>
      </div>
    </div>
  );
}

export default function Menu() {
  const [tab, setTab] = useState('phin');
  const active = MENU[tab];

  return (
    <section id="menu" className="px-[clamp(20px,5vw,72px)] py-[84px] max-w-[1200px] mx-auto">
      <h2 className="font-heading text-[34px] leading-[1.3]">
        Today&rsquo;s Blackboard
        <span className="block text-[0.56em] mt-1">今日风味黑板</span>
      </h2>

      <div role="tablist" aria-label="Menu categories" className="mt-7 mb-8 flex flex-wrap gap-2">
        {Object.entries(MENU).map(([key, cat]) => (
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
            {cat.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
        className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7"
      >
        {active.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
