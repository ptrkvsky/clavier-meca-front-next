import mediaQueries from '@/app/styles/mediaQueries';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  fontSize: 0,
  lineHeight: 1,

  '@media': {
    [mediaQueries.tabletLandscape]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [mediaQueries.mobile]: {
      gridTemplateColumns: '1fr',
    },
  },
});

export const stylePostsList = {
  wrapper,
};
