/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-satoshi)'],
      },
      colors: {
        green: {
          100: '#A6F2A6',
          200: '#85E585',
          300: '#62CA62',
          400: '#3CB33C',
          500: '#2D862D',
          600: '#1E761E',
          700: '#156115',
          800: '#0D4A0D',
          900: '#052E05',
        },
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 400ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 400ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
};
