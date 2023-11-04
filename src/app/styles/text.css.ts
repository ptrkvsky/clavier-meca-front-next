import { globalFontFace } from '@vanilla-extract/css';

const suisseBold = 'Suisse-bold';
const suisseRegular = "'Suisse-regular'";

globalFontFace(suisseBold, {
  src: `url("/assets/fonts/swissintl/swiss-intel-bold.woff2")`,
  fontDisplay: 'block',
});

globalFontFace(suisseRegular, {
  src: `url("/assets/fonts/swissintl/swiss-intel-regular.woff2")`,
  fontDisplay: 'block',
});
