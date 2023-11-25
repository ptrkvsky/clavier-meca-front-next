import { globalTheme } from '@/app/styles/theme.css';
import { style } from '@vanilla-extract/css';

const date = style({
  fontSize: '14px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  color: globalTheme.color.lighter,
});

export const styleDate = {
  date,
};
