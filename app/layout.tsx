import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Christian Ball 2026 | An Evening of Elegance & Fellowship',
  description: 'Join us for a grand black-tie evening celebrating faith, fellowship, and charity. Live orchestra, gourmet dining, keynote addresses, and ballroom dancing.',
  keywords: ['Christian Ball', 'Gala', 'Christian Gala', 'Charity Ball', 'Black Tie', 'Faith Event', 'Banquet'],
  openGraph: {
    title: 'The Christian Ball 2026 | An Evening of Elegance & Fellowship',
    description: 'An unforgettable evening celebrating faith, fellowship, and charity in London.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
