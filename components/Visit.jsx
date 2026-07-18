function InstagramIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XiaohongshuIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M8 9v6M8 9h3.2c1.1 0 1.8.9 1.8 2s-.7 2-1.8 2H8M15 9v6M15 9h2.5" />
    </svg>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="px-[clamp(20px,5vw,72px)] pt-[84px] max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-y-7 gap-x-[clamp(24px,4vw,64px)] rounded-xl bg-sage-100 px-[clamp(24px,4vw,64px)] py-14">
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-2">Location</h3>
          <p className="font-body text-[15.5px] leading-7 text-ink/85">Jalan Kuchai Maju 6, Kuchai Lama, Kuala Lumpur</p>
        </div>
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-2">Brewing Hours</h3>
          <p className="font-body text-[15.5px] leading-7 text-ink/85">
            Wed – Mon: 10:30 AM – 6:00 PM<br />Tuesday: Closed
          </p>
        </div>
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-2">Follow Along</h3>
          <p className="font-body text-[15.5px] leading-7 text-ink/85">@noncaphe</p>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-200 text-sage-800 hover:bg-sage-300">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Xiaohongshu" className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-200 text-sage-800 hover:bg-sage-300">
              <XiaohongshuIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
