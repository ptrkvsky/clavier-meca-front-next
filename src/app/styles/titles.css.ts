import { globalStyle, style } from '@vanilla-extract/css';
import { globalTheme } from './theme.css';
import mediaQueries from './mediaQueries';

export const main = style({
  margin: '100px 0',
  fontSize: '45px',
  lineHeight: 1.33,
  letterSpacing: '21px',
  fontFamily: globalTheme.font.title,
  textAlign: 'center',
  textTransform: 'uppercase',

  '@media': {
    [mediaQueries.tabletLandscape]: {
      width: '100%',
    },
    [mediaQueries.mobile]: {
      paddingLeft: '2vw',
    },
  },
});

export const h2 = style({
  position: 'relative',
  fontSize: '48px',
  lineHeight: '64px',
  fontFamily: globalTheme.font.title,
  margin: '120px 0 85px 0',
  '@media': {
    [mediaQueries.mobile]: {
      margin: '24px 0',
      padding: '0 8px',
      fontSize: '35px',
      lineHeight: '1.2',
    },
  },
});

globalStyle(`${h2} span`, {
  zIndex: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: '-160px',
  fontSize: '250px',
  color: 'white',
  textShadow: `-1px -1px 0 ${globalTheme.color.primary},
        1px -1px 0 ${globalTheme.color.primary}, -1px 1px 0 ${globalTheme.color.primary},
        1px 1px 0 ${globalTheme.color.primary}`,
  fontFamily: globalTheme.font.light,
  opacity: 0.2,
  '@media': {
    [mediaQueries.mobile]: {
      left: '-7px',
    },
  },
});

export const h3 = style({
  position: 'relative',
  margin: '64px 0 67px',
  fontSize: '48px',
  fontFamily: globalTheme.font.title,
  lineHeight: '64px',
  selectors: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: '-20px',
      width: '74px',
      height: '11px',
      backgroundColor: globalTheme.color.primary,
    },
  },
});

export const h4 = style({
  fontFamily: globalTheme.font.title,
  fontSize: '32px',
  letterSpacing: '-1px',
  '@media': {
    [mediaQueries.mobile]: {
      marginLeft: '8px',
      margin: '24px 0 16px 8px',
    },
  },
});

export const h5 = style({
  fontFamily: globalTheme.font.title,
  fontSize: '32px',
  letterSpacing: '-1px',
  '@media': {
    [mediaQueries.mobile]: {
      marginLeft: '8px',
      margin: '24px 0 16px 8px',
    },
  },
});

export const h6 = style({
  fontFamily: globalTheme.font.title,
  fontSize: '32px',
  letterSpacing: '-1px',
  '@media': {
    [mediaQueries.mobile]: {
      marginLeft: '8px',
      margin: '24px 0 16px 8px',
    },
  },
});

export const title = {
  main,
  h2,
  h3,
  h4,
  h5,
  h6,
};
