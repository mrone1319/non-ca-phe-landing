import React from 'react';

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Nav() {
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between gap-6 px-6 md:px-12 py-3 bg-bg/90 backdrop-blur-md">
      <span className="inline-flex items-center gap-2 font-body font-bold text-ink">
        <img src="/assets/logo.png" alt="NÓN Cà Phê logo" className="w-[34px] h-[34px] rounded-full object-cover" />
        NÓN Cà Phê
      </span>
      <div className="hidden md:flex items-center gap-6 font-body text-sm">
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
    </nav>
  );
}
