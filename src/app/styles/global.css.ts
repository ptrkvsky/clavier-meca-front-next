import { style, globalStyle } from '@vanilla-extract/css';
import { globalTheme } from '@/app/styles/theme.css';
import mediaQueries from './mediaQueries';

export const myStyle = style({
  display: 'flex',
  paddingTop: '3px',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  margin: 0,
  padding: 0,

  background: globalTheme.bg.main,
  color: globalTheme.color.main,
  fontFamily: globalTheme.font.main,
  fontSize: 'clamp(1.0rem, 0.972vw, 2.8rem)',
  fontStyle: 'normal',
  letterSpacing: '0.02em',
});

globalStyle('iframe', {
  maxWidth: '100%',
});

globalStyle('img', {
  maxWidth: '100%',
  height: 'auto',
});

globalStyle('.max-container', {
  maxWidth: globalTheme.maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media': {
    [mediaQueries.tabletLandscape]: {
      padding: 10,
    },
  },
  // ${mediaQueries.tabletLandscape} {
  //   width: 100%;
  //   padding: 0 5%;
  // }
});

globalStyle('strong', {
  fontFamily: globalTheme.font.title,
  fontSize: '1.05em',
});

globalStyle('input:focus', {
  outline: 'none !important',
  border: 'none',
  backgroundColor: '#e8e8e8',
  paddingLeft: '8px',
});

globalStyle('textarea:focus', {
  outline: 'none !important',
  border: 'none',
  backgroundColor: '#e8e8e8',
  paddingLeft: '12px',
});

globalStyle('a, .daclok', {
  textDecoration: 'underline',
  color: 'inherit',
});
