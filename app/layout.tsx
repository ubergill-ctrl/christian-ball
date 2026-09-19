import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Saint Gabriel's Orthodox Youth Ceilidh 2026",
  description:
    'An evening of dinner, music and dancing at Hulme Hall, Port Sunlight, on Saturday 7 November 2026. A five-piece ceilidh band, a three-course dinner, and regional dress.',
  keywords: ['Orthodox ceilidh', 'Orthodox youth', 'Wirral', 'Port Sunlight', 'Hulme Hall', 'ceilidh', 'November 2026'],
  openGraph: {
    title: "Saint Gabriel's Orthodox Youth Ceilidh 2026",
    description:
      'Dinner, music and dancing at Hulme Hall, Port Sunlight, on Saturday 7 November 2026.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
