import Nav from '@/components/Nav';
import './globals.css';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';

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
      <body className="flex flex-col">
        <Nav />
        <main className="p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
