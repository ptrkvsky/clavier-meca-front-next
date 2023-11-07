import mediaQueries from '@/app/styles/mediaQueries';
import { style as vanillaStyle } from '@vanilla-extract/css';

const button = vanillaStyle({
  display: 'none',
  position: 'fixed',
  top: '15px',
  right: '15px',
  zIndex: 930,
  width: '50px',
  height: '50px',
  outline: 'none',
  border: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  borderRadius: '50%',
  background: 'transparent',

  '@media': {
    [mediaQueries.tabletLandscape]: {
      display: 'flex',
    },
  },
});

export const styleButtonMenu = {
  button,
};
