import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/app/styles/theme.css';

export const dt = style({
  display: 'inline-block',
  margin: '0',
  fontSize: '24px',
  lineHeight: '39px',
  textTransform: 'uppercase',
  letterSpacing: '0',
  fontFamily: globalTheme.font.title,
  selectors: {
    '&:after': {
      content: '":"',
    },
  },
});

export const dd = style({
  display: 'inline-block',
  margin: '0',
  fontSize: '24px',
  paddingLeft: '8px',
});

export const unite = style({
  fontSize: '0.85em',
});

export const styleSwitchDetail = {
  dt,
  dd,
  unite,
};
