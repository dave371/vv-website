import './globals.css';
import localFont from 'next/font/local';

export const metadata = {
  title: 'VitalityVault',
  description: 'health and wellness center',
};

const satoshi = localFont({
  src: '../../font/satoshi.woff2',
  display: 'swap',
  variable: '--font-satoshi',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${satoshi.className}`}>
      <body>{children}</body>
    </html>
  );
}
