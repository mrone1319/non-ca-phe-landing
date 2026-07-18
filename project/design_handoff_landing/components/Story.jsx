import React from 'react';

export default function Story() {
  return (
    <section id="story" className="grid grid-cols-1 md:grid-cols-[5fr_7fr] items-center gap-10 md:gap-20 px-6 md:px-12 py-16 md:py-20 max-w-[1200px] mx-auto">
      <figure className="order-first m-0 w-full overflow-hidden rounded-xl">
        {/* TODO: replace with real founders/polaroid-style photography */}
        <img
          src="/assets/story-photo.jpg"
          alt="The founders crafting coffee together"
          className="w-full aspect-[4/5] object-cover [filter:saturate(0.6)_contrast(0.85)_brightness(1.1)_opacity(0.94)]"
        />
      </figure>
      <div>
        <span className="block text-[13px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-3">
          Our Journey
        </span>
        <h2 className="font-heading text-[34px] leading-[1.4]">
          From Saigon to KL
          <span className="block text-[0.56em] mt-1">我们的故事：从西贡到吉隆坡</span>
        </h2>
        <p className="mt-3 max-w-[54ch] font-body text-[15.5px] leading-7 text-ink/80">
          It started with a cup of cà phê sữa đá on a Saigon afternoon — and a Malaysian traveller who
          fell for the coffee, and then for the woman who poured it. Two years later, that same care
          sits behind our counter in Kuchai Lama.
        </p>
        <p className="mt-3 max-w-[54ch] font-body text-[15.5px] leading-7 text-ink/80">
          We buy directly from small farms along Vietnam's central highlands, choosing every sack
          ourselves and roasting to the bold, unhurried profile our home taught us. No shortcuts, no
          instant blends — just the phin, gravity, and time.
        </p>
        <p className="mt-3 max-w-[54ch] font-body text-[14.5px] leading-7 opacity-75">
          故事始于西贡午后的一杯越式炼乳冰咖啡——一位马来西亚旅人，先爱上了这杯咖啡，后来爱上了泡咖啡的人。两年后，同样的用心，落在了 Kuchai Lama 的这方柜台。我们直接向越南中部高原的小农采购，亲自挑选每一袋豆子，用家乡教会我们的浓烈与从容烘焙。没有捷径，没有速溶——只有滴漏壶、重力与时间。
        </p>
      </div>
    </section>
  );
}
