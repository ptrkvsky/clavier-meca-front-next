import mediaQueries from '@/app/styles/mediaQueries';
import { globalStyle, style } from '@vanilla-extract/css';

export const articleFull = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '122px',
  margin: '61px 0',

  '@media': {
    [mediaQueries.mobile]: {
      padding: '0 8px',
      margin: '24px 0',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto auto',
      gridGap: '12px',
    },
  },
});

globalStyle(`${articleFull}:nth-of-type(even) .desc`, {
  gridColumn: '1',
  gridRow: '1',

  '@media': {
    [mediaQueries.mobile]: {
      gridColumn: '1',
      gridRow: '2',
    },
  },
});

globalStyle(`${articleFull}:nth-of-type(even) .illu`, {
  gridColumn: '2',
  gridRow: '1',

  '@media': {
    [mediaQueries.mobile]: {
      gridColumn: '1',
      gridRow: '2',
    },
  },
});

export const styleProductWrapper = {
  articleFull,
};
