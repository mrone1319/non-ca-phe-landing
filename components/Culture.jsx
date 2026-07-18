'use client';

import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import ImagePlaceholder from './ImagePlaceholder';
import { useLanguage } from '@/lib/LanguageContext';
import { T } from '@/data/translations';

const PLATFORM_LABEL = {
  instagram: { en: 'Instagram check-in', zh: 'Instagram 打卡' },
  xiaohongshu: { en: 'Xiaohongshu check-in', zh: '小红书打卡' },
  facebook: { en: 'Facebook check-in', zh: 'Facebook 打卡' },
  tiktok: { en: 'TikTok check-in', zh: 'TikTok 打卡' },
  wechat: { en: 'WeChat check-in', zh: '微信打卡' },
  google: { en: 'Google review', zh: 'Google 评价' },
  twitter: { en: 'Twitter / X check-in', zh: 'Twitter / X 打卡' },
  youtube: { en: 'YouTube check-in', zh: 'YouTube 打卡' },
};

const PLACEHOLDER_ALTS = [
  { en: 'Instagram check-in', zh: 'Instagram 打卡' },
  { en: 'Xiaohongshu check-in', zh: '小红书打卡' },
  { en: 'Instagram check-in', zh: 'Instagram 打卡' },
  { en: 'Xiaohongshu check-in', zh: '小红书打卡' },
  { en: 'Instagram check-in', zh: 'Instagram 打卡' },
  { en: 'Xiaohongshu check-in', zh: '小红书打卡' },
];

export default function Culture({ socialPosts = [] }) {
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
          {socialPosts.length > 0
            ? socialPosts.map((post) => (
                <Image
                  key={post._id}
                  src={urlFor(post.image).width(400).height(400).fit('crop').auto('format').url()}
                  alt={PLATFORM_LABEL[post.platform]?.[lang] || post.platform}
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-md object-cover"
                />
              ))
            : PLACEHOLDER_ALTS.map((alt, i) => (
                <ImagePlaceholder key={i} label={alt[lang]} className="aspect-square w-full rounded-md" />
              ))}
        </div>
      </div>
    </section>
  );
}
