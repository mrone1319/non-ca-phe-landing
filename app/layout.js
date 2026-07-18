import { Caprasimo, Figtree, Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';

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

const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-heading-zh',
  display: 'swap',
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body-zh',
  display: 'swap',
});

const title = "NÓN Cà Phê — More than coffee, it's a culture";
const description =
  'A 2-year journey of craftsmanship by a Malaysian-Vietnamese couple. Authentic, direct-trade Vietnamese coffee in Kuchai Lama, Kuala Lumpur.';

export const metadata = {
  metadataBase: new URL('https://non-ca-phe-landing.vercel.app'),
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
    images: ['/assets/logo.png'],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/assets/logo.png'],
  },
};

export const viewport = {
  themeColor: '#f5ead8',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${caprasimo.variable} ${figtree.variable} ${notoSerifSC.variable} ${notoSansSC.variable}`}
    >
      <body className="bg-bg text-ink font-body">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
