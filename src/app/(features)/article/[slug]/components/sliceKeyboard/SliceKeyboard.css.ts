import mediaQueries from '@/app/styles/mediaQueries';
import { style, globalStyle } from '@vanilla-extract/css';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 269px',
  gridGap: '98px',

  '@media': {
    [mediaQueries.tabletLandscape]: {
      gridTemplateColumns: '1fr',
    },
  },
});

globalStyle(`${grid} .intro`, {
  '@media': {
    [mediaQueries.mobile]: {
      paddingLeft: '8px',
    },
  },
});

export const styleSliceKeyboard = {
  grid,
};
