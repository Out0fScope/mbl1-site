export const dynamic = 'force-static';

import CookieBanner from '_components/CookieBanner';
import Footer from '_components/Footer';
import Header from '_components/Header';
import OrganizationSchema from '_components/SEO/OrganizationSchema';
import ProductSchema from '_components/SEO/ProductSchema';
import ServiceSchema from '_components/SEO/ServiceSchema';
import AppProvider from '_context/AppProvider';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mbl1.by'),

  title: {
    default: 'MBL1 — мебель на заказ в Минске',
    template: '%s | MBL1',
  },

  description:
    'Изготовление мебели на заказ в Минске. Кухни, шкафы, гардеробные, мебель для бизнеса и интерьеров.',

  alternates: {
    canonical: 'https://mbl1.by',
  },

  keywords: [
    'мебель под заказ',
    'кухни',
    'шкафы',
    'мебель Минск',
    'дизайн мебели',
    'корпусная мебель',
    'встроенная мебель',
  ],

  robots: {
    index: true,
    follow: true,
  },

  themeColor: '#000000',
  authors: [{ name: 'MBL1' }],
  creator: 'MBL1',
  publisher: 'MBL1',

  openGraph: {
    title: 'MBL1 — мебель под заказ',
    description: 'Мебель на заказ в Минске.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MBL1 — мебель на заказ в Минске',
      },
    ],
    url: 'https://mbl1.by',
    siteName: 'MBL1',
    locale: 'ru_BY',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
    title: 'MBL1',
    description: 'Изготовление мебели под заказ в Беларуси.',
  },

  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <AppProvider>
          <Header />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only p-2 bg-primary text-white rounded z-50 fixed top-2 left-2"
          >
            Перейти к основному контенту
          </a>
          <main id="main-content" className="min-h-screen mt-0 md:mt-24 lg:mt-16">
            {children}
          </main>
          <CookieBanner />
          <Footer />
        </AppProvider>
        <OrganizationSchema />
        <ServiceSchema />
      </body>
    </html>
  );
}
