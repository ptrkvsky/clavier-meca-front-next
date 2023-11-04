import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '@media': {
    [mediaQueries.tabletLandscape]: {
      display: 'block',
    },
  },
});

const containerTitle = style({
  position: 'relative',
});

const colLeft = style({
  display: 'flex',
  alignItems: 'center',
  [mediaQueries.mobile]: {
    padding: '0 8px',
  },
});

export const title = style({
  position: 'absolute',
  zIndex: 10,
  padding: '18px 18px 18px 0',
  marginBottom: '84px',
  fontSize: '90px',
  fontFamily: globalTheme.font.title,
  textTransform: 'uppercase',
  lineHeight: 1,
  background: globalTheme.bg.main,

  '@media': {
    'screen and (max-width: 767px)': {
      position: 'relative',
      fontSize: '43px',
      margin: '16px 0 23px',
    },
  },
});

globalStyle(`${title}:after`, {
  content: '""',
  display: 'block',
  position: 'absolute',
  bottom: '-32px',
  width: '128px',
  height: '20px',
  backgroundColor: globalTheme.color.primary,

  '@media': {
    'screen and (max-width: 767px)': {
      bottom: '-5px',
      width: '93px',
      height: '13px',
    },
  },
});

export const colRight = style({
  position: 'relative',
  zIndex: 0,
  textAlign: 'right',
  fontSize: '0',
  lineHeight: 1,
});

export const intro = style({
  fontSize: '24px',
  lineHeight: '30px',
  fontFamily: globalTheme.font.main, // Replace with your actual font family
  marginTop: '351px',

  '@media': {
    [mediaQueries.mobile]: {
      marginTop: '0',
      fontSize: '22px',
      lineHeight: '28px',
    },
  },
});

export const styleHero = {
  grid,
  containerTitle,
  colLeft,
  colRight,
  title,
  intro,
};
