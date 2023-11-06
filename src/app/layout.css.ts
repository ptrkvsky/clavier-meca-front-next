import { style as vanillaStyle } from '@vanilla-extract/css';
import { globalTheme } from './styles/theme.css';
import mediaQueries from './styles/mediaQueries';

const wrapperMain = vanillaStyle({
  width: globalTheme.maxWidth,
  maxWidth: '100%',
  margin: '0 auto',
  '@media': {
    [mediaQueries.tabletLandscape]: {
      width: '100%',
    },
  },
});

const wrapperGlobal = vanillaStyle({
  display: 'grid',
  minHeight: '100vh',
  gridTemplateRows: '70px auto auto',
  gridTemplateAreas: `
    'header'
    'main'
    'footer'
  `,
});

export const style = {
  wrapperMain,
  wrapperGlobal,
};
