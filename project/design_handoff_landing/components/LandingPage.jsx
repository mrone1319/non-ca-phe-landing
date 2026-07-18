import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Story from './Story';
import Menu from './Menu';
import Culture from './Culture';
import Visit from './Visit';
import Footer from './Footer';

/**
 * Full NÓN Cà Phê landing page.
 * Requires "Caprasimo" and "Figtree" fonts loaded globally, and the
 * tailwind.config.js theme.extend from this folder merged into your config.
 */
export default function LandingPage() {
  return (
    <div className="bg-bg text-ink font-body">
      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Culture />
      <Visit />
      <Footer />
    </div>
  );
}
