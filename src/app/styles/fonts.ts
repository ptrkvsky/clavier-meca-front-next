import localFont from 'next/font/local';

export const fontMain = localFont({
  src: '../assets/fonts/swissintl/swiss-intel-regular.woff2',
  display: 'swap',
});

export const fontTitle = localFont({
  src: '../assets/fonts/swissintl/swiss-intel-bold.woff2',
  weight: '800',
  display: 'swap',
  variable: '--font-title',
});

export const fontLight = localFont({
  src: '../assets/fonts/swissintl/swiss-intel-light.woff2',
  display: 'swap',
});
