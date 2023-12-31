import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const wrapperTitle = style({
  padding: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  transition: 'all 0.25s linear',
  background: 'transparent',

  selectors: {
    '&:hover': {
      background: globalTheme.color.primary17,
    },
    '&.hover': {
      background: globalTheme.color.primary17,
    },
  },

  '@media': {
    [mediaQueries.mobile]: {
      display: 'block',
      padding: '0 8px',
    },
  },
});

export const title = style({
  position: 'relative',
  bottom: '15px',
  fontFamily: globalTheme.font.title,
  color: globalTheme.color.main,
  letterSpacing: '-1px',
  fontSize: '24px',
  textAlign: 'center',

  '@media': {
    [mediaQueries.mobile]: {
      bottom: '0',
      fontSize: '27px',
      lineHeight: '1',
      fontFamily: globalTheme.font.main,
    },
  },
});

export const wrapperImage = style({
  position: 'relative',

  selectors: {
    '&.hover': {
      background: globalTheme.color.primary17,
    },
    '&.hover:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      opacity: '0',
      background: 'transparent',
      mixBlendMode: 'multiply',
      transition: 'all 0.3s linear',
    },
  },

  '@media': {
    [mediaQueries.mobile]: {
      bottom: '0',
    },
  },
});

export const illu = style({
  height: '383px',
  objectFit: 'cover',

  '@media': {
    [mediaQueries.mobile]: {
      bottom: '0',
    },
  },
});

globalStyle(`${wrapperImage}.hover:after`, {
  content: '""',
  display: 'block',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  opacity: '1',
  background: globalTheme.color.primary17,
  mixBlendMode: 'multiply',
  transition: 'all 0.3s linear',
});

export const stylePostsItem = {
  title,
  wrapperImage,
  wrapperTitle,
  illu,
};
