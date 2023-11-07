import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style as vanillaStyle } from '@vanilla-extract/css';

const nav = vanillaStyle({
  display: 'inherit', // props tablet
  '@media': {
    [mediaQueries.tabletLandscape]: {
      display: 'initial', // toggle
    },
  },
});

const background = vanillaStyle({
  clipPath: 'circle(30px at 260px 40px)',
  transition: 'clip-path 0.5s',
  display: 'none',
  zIndex: 900,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '300px',
  background: globalTheme.bg.revert,

  '@media': {
    [mediaQueries.tabletLandscape]: {
      display: 'inherit',
    },
  },
});

const wrapper = vanillaStyle({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

const ul = vanillaStyle({
  position: 'relative',
  zIndex: 920,
  display: 'flex',
  flexDirection: 'row',
  listStyleType: 'none',
  gap: '42px',

  '@media': {
    [mediaQueries.tabletLandscape]: {
      position: 'fixed',
      top: '75px',
      display: 'block',
      fontSize: '3rem',
      padding: '0',
      margin: '0',
      gap: '0',
      flexDirection: 'column',
    },
    [mediaQueries.mobile]: {
      left: 'initial',
      right: '48px',
    },
  },

  pointerEvents: 'auto',
});

export const styleNavHeader = {
  background,
  nav,
  ul,
  wrapper,
};
