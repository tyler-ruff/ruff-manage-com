
import type { Metadata } from 'next';
import { Hind_Vadodara, DM_Serif_Display } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

import { config } from '@/config/app';
import { Providers } from './providers';

import './globals.css';

const hind = Hind_Vadodara({
  variable: '--font-hind', 
  subsets: ["latin"], 
  weight: '400', 
  display: 'swap' 
});

const dm = DM_Serif_Display({
  variable: '--font-dm', 
  subsets: ["latin"], 
  weight: '400', 
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rtmtransit.com'),
  title: {
    template: `%s | ${config.name}`,
    default: config.name, 
  },
  applicationName: config.name,
  description: config.description,
  keywords: ['rtm', 'transit', 'shipping', 'trucking', 'company'],
  publisher: 'Blazed Labs LLC',
  icons: {
    icon: [
      { url: '/icons/favicon.svg', type: 'image/svg+xml'},
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
      { url: '/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png'},
      { url: '/icons/android-icon-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    shortcut: '/icons/mstile-150x150.png',
    apple: [
      { url: '/icons/apple-touch-icon.png', type: 'image/png' },
      { url: '/icons/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/icons/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/icons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/icons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: "shortcut icon",
        url: "/icons/favicon.ico"
      },
      {
        type: "text/plain",
        rel: "author",
        url: "https://blazedlabs.com/humans"
      }
    ]
  },
  manifest: '/manifest.webmanifest',
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: "https://rtmtransit.com",
  name: config.name,
  description: config.description,
  license: "https://blazedlabs.com/license"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dm.variable} ${hind.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <Providers>
          <section id="blz-app">
            <Header />
            <main role="main" className="bg-white dark:bg-gray-900">
              {children}
            </main>
            <Footer />
          </section>
        </Providers>
      </body>
    </html>
  )
}
