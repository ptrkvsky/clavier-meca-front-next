import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';

const tr = style({
  display: 'initial',
});

globalStyle(`${tr}:nth-of-type(odd)`, {
  padding: '0 35px',
});

globalStyle(`${tr}:nth-of-type(1) .pos`, {
  fontSize: '36px',
  color: globalTheme.color.primary,
});

globalStyle(`${tr}:nth-of-type(2) .pos`, {
  fontSize: '24px',
});
