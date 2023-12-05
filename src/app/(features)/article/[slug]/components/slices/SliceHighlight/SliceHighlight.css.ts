import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const section = style({
  margin: '114px 0',
  '@media': {
    [mediaQueries.mobile]: {
      margin: '24px 0',
    },
  },
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const content = style({
  padding: '0 35px',
  width: '757px',
  maxWidth: '100%',
  fontSize: '32px',
  lineHeight: '44px',
  letterSpacing: '-1px',
  fontFamily: globalTheme.font.light,
  '@media': {
    [mediaQueries.tabletLandscape]: {
      width: 'auto',
    },
    [mediaQueries.mobile]: {
      padding: '0 8px',
      fontSize: '24px',
      lineHeight: '40px',
    },
  },
});

globalStyle(`${content} p:first-of-type`, {
  margin: '0',
});

export const styleSliceHighlight = {
  section,
  wrapper,
  content,
};
