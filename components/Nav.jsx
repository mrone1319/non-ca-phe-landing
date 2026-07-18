'use client';

import Image from 'next/image';
import logo from '@/public/assets/logo.png';

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Nav() {
  return (
    <nav className="sticky top-0 z-20 bg-bg/[0.92] backdrop-blur-[6px]">
      <div className="flex items-center justify-between gap-6 max-w-[1200px] mx-auto px-[clamp(20px,5vw,72px)] py-3">
        <span className="inline-flex items-center gap-2 font-body font-bold text-ink">
          <Image
            src={logo}
            alt="NÓN Cà Phê logo"
            width={34}
            height={34}
            className="w-[34px] h-[34px] rounded-full object-cover"
          />
          NÓN Cà Phê
        </span>
        <div className="hidden nav:flex items-center gap-6 font-body text-sm">
          <a href="#story" className="text-accent-700 hover:text-accent-900">Our Story</a>
          <a href="#menu" className="text-accent-700 hover:text-accent-900">Menu</a>
          <a href="#visit" className="text-accent-700 hover:text-accent-900">Visit</a>
        </div>
        <button
          type="button"
          onClick={() => scrollToId('visit')}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-neutral-100 hover:bg-accent-600 active:bg-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Find Us / 导航到店
        </button>
      </div>
    </nav>
  );
}
