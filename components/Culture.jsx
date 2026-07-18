import ImagePlaceholder from './ImagePlaceholder';

const SOCIAL_PLACEHOLDERS = [
  { id: 1, alt: 'Instagram check-in' },
  { id: 2, alt: 'Xiaohongshu check-in' },
  { id: 3, alt: 'Instagram check-in' },
  { id: 4, alt: 'Xiaohongshu check-in' },
  { id: 5, alt: 'Instagram check-in' },
  { id: 6, alt: 'Xiaohongshu check-in' },
];

export default function Culture() {
  return (
    <section className="px-[clamp(20px,5vw,72px)] py-[84px] max-w-[1200px] mx-auto">
      <span className="block text-[13px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-3">
        Slow Living
      </span>
      <h2 className="font-heading text-[34px] leading-[1.3]">
        Why so slow?
        <span className="block text-[0.56em] mt-1">为什么越南咖啡这么慢？</span>
      </h2>

      <details open className="mt-7 max-w-[720px] rounded-lg bg-surface px-6 py-5 md:px-8">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-heading text-xl marker:content-none [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          💡 The phin, and the patience it asks for
        </summary>
        <div className="mt-3 max-w-[60ch] font-body text-[15px] leading-7 text-ink/80">
          <p>
            The phin drip works on gravity alone — no pressure, no rush. Each drop falls in its own
            time, giving the beans room to bloom fully. In a city that moves fast, we think five slow
            minutes is a gift, not a delay.
          </p>
          <p className="mt-3 text-[14px] opacity-75">
            滴漏壶只靠重力工作——没有压力，没有催促。每一滴都按自己的节奏落下，让咖啡豆充分绽放。在这座飞速运转的城市里，我们相信这五分钟的等待，是一份礼物，而不是耽搁。
          </p>
        </div>
      </details>

      <div className="mt-16">
        <span className="block text-[13px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-3">
          Community
        </span>
        <h2 className="font-heading text-[34px] leading-[1.3]">
          From our regulars
          <span className="block text-[0.56em] mt-1">来自老顾客的分享</span>
        </h2>
        <div className="mt-7 grid grid-cols-3 split:grid-cols-6 gap-3">
          {SOCIAL_PLACEHOLDERS.map((s) => (
            <ImagePlaceholder
              key={s.id}
              label={s.alt}
              className="aspect-square w-full rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
