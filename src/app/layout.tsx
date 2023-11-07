import type { Viewport } from 'next';
import { globalTheme } from '@/app/styles/theme.css';
import '@/app/styles/global.css';
import '@/app/styles/text.css';
import '@/app/styles/fonts';
import { style } from './layout.css';

import Providers from '@/app/utils/Providers';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <div className={style.wrapperGlobal}>
            <main className={style.wrapperMain}>{children}</main>
            <Header />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: globalTheme.color.main,
};
