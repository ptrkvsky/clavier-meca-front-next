import type { Viewport } from 'next';
import '@/app/styles/global.css';
import '@/app/styles/text.css';
import '@/app/styles/fonts';
import Providers from './utils/Providers';
import { globalTheme } from './styles/theme.css';

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

export const viewport: Viewport = {
  themeColor: globalTheme.color.main,
};
