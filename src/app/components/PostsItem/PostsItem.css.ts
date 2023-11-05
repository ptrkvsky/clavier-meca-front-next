import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style } from '@vanilla-extract/css';

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
    '&:after': {
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
    '&.hover': {
      background: globalTheme.color.primary17,
    },
  },

  '@media': {
    [mediaQueries.mobile]: {
      bottom: '0',
    },
  },
});

export const stylePostsItem = {
  title,
  wrapperImage,
  wrapperTitle,
};
