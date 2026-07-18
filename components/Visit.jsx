'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { T } from '@/data/translations';

const MAP_LINK = 'https://maps.app.goo.gl/TebukNGtycj98Acm7';
const INSTAGRAM_LINK = 'https://www.instagram.com/non_ca_phe?igsh=M3JpNXQ5N201NWdi';
const XIAOHONGSHU_LINK = 'https://xhslink.com/m/4N3kWAmTvW9';
const WHATSAPP_LINK = 'https://wa.me/60172168865';

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

function WhatsAppIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21l1.4-4.2A8 8 0 1 1 8.2 19.6z" />
      <path d="M8.5 9.5c.3 2.6 2.4 4.7 5 5" />
    </svg>
  );
}

const DAY_ORDER = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function HoursList({ hours, lang }) {
  if (!hours) {
    return (
      <p className="font-body text-[15.5px] leading-7 text-ink/85">
        {T.visit.hoursLine1[lang]}
        <br />
        {T.visit.hoursLine2[lang]}
      </p>
    );
  }

  const announcement = lang === 'zh' ? hours.announcementZh : hours.announcementEn;

  return (
    <>
      <dl className="font-body text-[15px] leading-7 text-ink/85">
        {DAY_ORDER.map((day) => {
          const d = hours[day];
          return (
            <div key={day} className="flex justify-between gap-3">
              <dt className="text-ink/60">{T.visit.days[day][lang]}</dt>
              <dd>{d?.closed ? T.visit.closed[lang] : `${d?.open || '?'} – ${d?.close || '?'}`}</dd>
            </div>
          );
        })}
      </dl>
      {announcement && (
        <p className="mt-2 font-body text-[13.5px] leading-6 text-accent-700 font-semibold">{announcement}</p>
      )}
    </>
  );
}

export default function Visit({ businessHours }) {
  const { lang } = useLanguage();

  return (
    <section id="visit" className="px-[clamp(20px,5vw,72px)] pt-[84px] max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-y-7 gap-x-[clamp(24px,4vw,64px)] rounded-xl bg-sage-100 px-[clamp(24px,4vw,64px)] py-14">
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-2">{T.visit.location[lang]}</h3>
          <p className="font-body text-[15.5px] leading-7 text-ink/85">{T.visit.address[lang]}</p>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block font-body text-[14px] font-semibold text-accent-700 hover:text-accent-900 underline underline-offset-2"
          >
            {T.visit.getDirections[lang]} →
          </a>
        </div>
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-2">{T.visit.hours[lang]}</h3>
          <HoursList hours={businessHours} lang={lang} />
        </div>
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-accent-700 mb-2">{T.visit.follow[lang]}</h3>
          <p className="font-body text-[15.5px] leading-7 text-ink/85">@noncaphe</p>
          <div className="mt-3 flex gap-3">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-200 text-sage-800 hover:bg-sage-300">
              <InstagramIcon />
            </a>
            <a href={XIAOHONGSHU_LINK} target="_blank" rel="noopener noreferrer" aria-label="Xiaohongshu" className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-200 text-sage-800 hover:bg-sage-300">
              <XiaohongshuIcon />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-200 text-sage-800 hover:bg-sage-300">
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
