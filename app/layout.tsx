import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Tecnologías 5G, IoT y M2M - Presentación',
//   description:
//     'Situación Actual, Casos de Éxito y Perspectiva a Futuro - Gabriel González Isaías',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// };

export const metadata: Metadata = {
  title: 'Tecnologías 5G, IoT y M2M - Presentación',
  description:
    'Situación Actual, Casos de Éxito y Perspectiva a Futuro - Gabriel Isaías González',
  generator: 'v0.app',
  icons: {
    // favicon principal y favicon para Apple
    icon: '/5g-big.png',
    apple: '/5g-big.png',
  },
  // Metadatos para compartir (Open Graph)
  openGraph: {
    title: 'Tecnologías 5G, IoT y M2M - Presentación',
    description:
      'Situación Actual, Casos de Éxito y Perspectiva a Futuro - Gabriel Isaías González',
    url: 'https://siscom-5g-deploy.vercel.app/', // <- reemplaza por tu URL real
    siteName: 'Sistem-com',
    images: [
      {
        url: '/5g-image.png',
        width: 1200,
        height: 630,
        alt: '5G image',
        type: 'image/png',
      },
    ],
    type: 'website',
  },
  // Metadatos para tarjetas de Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Tecnologías 5G, IoT y M2M - Presentación',
    description:
      'Situación Actual, Casos de Éxito y Perspectiva a Futuro - Gabriel Isaías González',
    images: ['/5g-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
