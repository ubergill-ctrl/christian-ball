import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Christian Ball 2026',
  description:
    'An evening of dinner, music and dancing in London on Saturday 21 November 2026, held in aid of a nominated charity. Guests of every English tradition welcome.',
  keywords: ['Christian Ball', 'charity ball London', 'Catholic', 'Orthodox', 'black tie', 'November 2026'],
  openGraph: {
    title: 'The Christian Ball 2026',
    description:
      'Dinner, music and dancing in London on Saturday 21 November 2026, in aid of a nominated charity.',
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
