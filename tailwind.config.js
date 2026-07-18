/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        // Matches the approved prototype's exact breakpoints (not Tailwind's
        // default md:768px) — nav links hide under 720px, grids collapse
        // under 880px.
        nav: '721px',
        split: '881px',
      },
      colors: {
        bg: '#f5ead8',
        surface: '#ebddc5',
        ink: '#201e1d',
        accent: {
          DEFAULT: '#c67139',
          100: '#fff2eb', 200: '#ffe1d0', 300: '#ffc6a5', 400: '#f6a06b',
          500: '#d67f48', 600: '#b2622d', 700: '#8c491a', 800: '#643312', 900: '#402310',
        },
        sage: {
          DEFAULT: '#7a8a5e',
          100: '#f0fae1', 200: '#e1eecc', 300: '#ccdbb2', 400: '#aebf92',
          500: '#8fa073', 600: '#728157', 700: '#56633f', 800: '#3d472b', 900: '#272e1b',
        },
        neutral: {
          100: '#f9f4ed', 200: '#eee7db', 300: '#dcd3c4', 400: '#c0b6a5',
          500: '#a19786', 600: '#82796a', 700: '#645c50', 800: '#474238', 900: '#2e2b25',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px', md: '16px', lg: '28px', xl: '56px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(46,43,37,0.14)',
        md: '0 3px 10px rgba(46,43,37,0.16)',
        lg: '0 12px 32px rgba(46,43,37,0.22)',
      },
    },
  },
  plugins: [],
};
