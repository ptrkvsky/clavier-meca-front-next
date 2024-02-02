import { globalTheme } from '@/app/styles/theme.css';
import mediaQueries from '@/app/styles/mediaQueries';
import { globalStyle, style } from '@vanilla-extract/css';

export const article12 = style({
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

globalStyle(`${article12}:nth-of-type(even) .desc`, {
  gridColumn: '1',
  gridRow: '1',

  '@media': {
    [mediaQueries.mobile]: {
      gridColumn: '1',
      gridRow: '2',
    },
  },
});

globalStyle(`${article12}:nth-of-type(even) .illu`, {
  gridColumn: '2',
  gridRow: '1',

  '@media': {
    [mediaQueries.mobile]: {
      gridColumn: '1',
      gridRow: '2',
    },
  },
});

const article6 = style({
  padding: '0 0 30px 0',
  margin: '61px 0',
  width: '343px',
  background: ' #fefefe',
  boxShadow: '0px 4px 35px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  boxSizing: 'border-box',
  border: `4px solid ${globalTheme?.color?.main}`,
  display: 'grid',
  gridTemplateRows: '340px auto',

  '@media': {
    [mediaQueries.mobile]: {
      width: '100%',
      margin: '24px 8px',
    },
  },
});

globalStyle(`${article6} img`, {
  borderRadius: '15px',
});

export const styleProductWrapper = {
  article12,
  article6,
};
