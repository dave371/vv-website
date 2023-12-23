import Nav from '@/components/Nav';
import './globals.css';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

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
    <ClerkProvider>
      <html lang="en" className={`${satoshi.variable} ${satoshi.className}`}>
        <body className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1 p-4">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
