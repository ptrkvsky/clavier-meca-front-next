import type { Metadata } from 'next';
import '@/app/styles/global.css';
import '@/app/styles/text.css';
import '@/app/styles/fonts';
import Providers from './utils/Providers';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
