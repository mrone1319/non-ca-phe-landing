import React from 'react';

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-[6fr_5fr] items-center gap-10 md:gap-16 px-6 md:px-12 py-16 md:py-24 max-w-[1200px] mx-auto">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -bottom-52 -z-10 h-[380px] w-[380px] rounded-full bg-sage-200"
      />
      <div>
        <h1 className="font-heading text-[38px] md:text-[64px] leading-[1.08] -ml-[0.028em]">
          <span className="block">More than coffee,</span>
          <span className="block">it's a culture.</span>
        </h1>
        <p className="mt-6 max-w-[58ch] font-body text-[17px] leading-7 text-ink">
          A 2-year journey of craftsmanship by a Malaysian-Vietnamese couple. Bringing authentic,
          direct-trade Vietnamese coffee straight to the heart of Kuchai Lama.
          <span className="block mt-2 text-[0.88em] opacity-75">
            不只是一杯咖啡，更是一场文化蔓延。马越夫妻的两年手作坚守，将原产地直供的浓厚风味，带入 Kuchai Lama 的日常时光。
          </span>
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => scrollToId('menu')}
            className="rounded-full bg-accent px-6 py-3 font-body font-bold text-neutral-100 hover:bg-accent-600 active:bg-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Explore Menu / 浏览今日风味
          </button>
          <button
            type="button"
            onClick={() => scrollToId('visit')}
            className="rounded-full border border-accent-700 px-6 py-3 font-body font-bold text-accent-700 hover:bg-accent-100 active:bg-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Find Us / 导航到店
          </button>
        </div>
      </div>
      <figure className="m-0 w-full overflow-hidden rounded-xl shadow-lg">
        {/* TODO: replace with real hero photography; keep the "washed" filter below */}
        <img
          src="/assets/hero-photo.jpg"
          alt="Slow-drip phin coffee, cinematic hero photograph"
          className="w-full aspect-[4/5] object-cover [filter:saturate(0.6)_contrast(0.85)_brightness(1.1)_opacity(0.94)]"
        />
      </figure>
    </section>
  );
}
