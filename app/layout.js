import { Caprasimo, Figtree } from 'next/font/google';
import './globals.css';

const caprasimo = Caprasimo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: "NÓN Cà Phê — More than coffee, it's a culture",
  description:
    'A 2-year journey of craftsmanship by a Malaysian-Vietnamese couple. Authentic, direct-trade Vietnamese coffee in Kuchai Lama, Kuala Lumpur.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${caprasimo.variable} ${figtree.variable}`}>
      <body className="bg-bg text-ink font-body">{children}</body>
    </html>
  );
}
