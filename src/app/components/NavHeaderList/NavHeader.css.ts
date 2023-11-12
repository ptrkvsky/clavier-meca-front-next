import mediaQueries from '@/app/styles/mediaQueries';
import { style as vanillaStyle } from '@vanilla-extract/css';

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

export const styleNavHeaderList = {
  ul,
};
