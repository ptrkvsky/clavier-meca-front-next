import { style, globalStyle } from '@vanilla-extract/css';
import { globalTheme } from '@/app/styles/theme.css';

export const aside = style({
  position: 'sticky',
  top: '27px',
  paddingBottom: '27px',
  backgroundColor: globalTheme.color.border,
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  margin: '27px 0',
  textAlign: 'center',
  fontSize: '24px',
  fontFamily: globalTheme.font.title,
  color: globalTheme.color.primary,
  letterSpacing: '-1px',
});

globalStyle(`${title} span`, {
  display: 'none',
});

export const titleProduct = style({
  margin: '27px 0 27px',
  textAlign: 'center',
  fontSize: '22px',
  letterSpacing: '-1px',
});

globalStyle(`${titleProduct} span`, {
  display: 'none',
});

export const subTitle = style({
  margin: '0 0 27px 0',
  textAlign: 'center',
  fontSize: '18px',
  fontFamily: globalTheme.font.light,
  letterSpacing: '-1px',
});

export const styleAside = {
  aside,
  title,
  titleProduct,
  subTitle,
};
