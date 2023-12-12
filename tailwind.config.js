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
    },
  },
  plugins: [],
};
