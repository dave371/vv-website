/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        h1: '4.236rem',
        h2: '2.618rem',
        h3: '1.618rem',
        h4: '1.25rem',
        p: '1rem',
        small: '.618rem',
        xsmall: '.382rem',
      },
      spacing: {
        4: '.24rem',
        7: '.438rem',
        11: '.688rem',
        17: '1.063rem',
        27: '1.688rem',
        44: '2.75rem',
      },
    },
  },
  plugins: [],
};
