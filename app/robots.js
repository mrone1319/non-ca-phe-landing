export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/studio',
      },
    ],
    sitemap: 'https://non-ca-phe-landing.vercel.app/sitemap.xml',
  };
}
