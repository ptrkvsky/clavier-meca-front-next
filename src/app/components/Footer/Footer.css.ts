import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { globalStyle, style as vanillaStyle } from '@vanilla-extract/css';

const footer = vanillaStyle({
  margin: '114px 0 0 0',
  padding: '80px',
  color: globalTheme.color.revert,
  background: globalTheme.bg.revert,

  '@media': {
    [mediaQueries.mobile]: {
      margin: '64px 0 0 0',
      padding: '24px',
    },
  },
});

globalStyle(`${footer} a`, {
  color: globalTheme?.color?.revert,
  textDecoration: 'none',
});

globalStyle(`${footer} a:hover`, {
  textDecoration: 'underline',
});

const footerTop = vanillaStyle({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'baseline',

  '@media': {
    [mediaQueries.tabletLandscape]: {
      flexDirection: 'column',
    },
  },
});

const disclaimer = vanillaStyle({
  maxWidth: globalTheme.contentWidth,
});

const separator = vanillaStyle({
  display: 'inline-block',
  margin: '0 8px',
});

export const styleFooter = {
  separator,
  disclaimer,
  footer,
  footerTop,
};
