import { style as vanillaStyle } from '@vanilla-extract/css';
import { globalTheme } from './theme.css';
import mediaQueries from './mediaQueries';

export const main = vanillaStyle({
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

export const title = {
  main,
};
