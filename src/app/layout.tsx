import type { Viewport } from 'next';
import '@/app/styles/global.css';
import '@/app/styles/text.css';
import '@/app/styles/fonts';
import Providers from './utils/Providers';
import { globalTheme } from './styles/theme.css';
import { style } from './layout.css';
import { Footer } from './components/Footer/Footer';

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
