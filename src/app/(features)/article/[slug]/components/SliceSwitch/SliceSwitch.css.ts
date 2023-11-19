import { style } from '@vanilla-extract/css';
import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';

export const section = style({
  marginBottom: '90px',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '464px 1fr',
  gridColumnGap: '122px',

  '@media': {
    [mediaQueries.mobile]: {
      gridTemplateColumns: '1fr',
    },
  },
});

export const illustration = style({
  padding: '40px',
  backgroundColor: 'purple',
});

export const title = style({
  marginTop: '120px',
  marginBottom: '80px',
  fontSize: '45px',
  lineHeight: '1.33',
  letterSpacing: '21px',
  fontFamily: globalTheme.font.title,
  textAlign: 'center',
  textTransform: 'uppercase',
});

export const descWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
});

export const desc = style({
  maxWidth: '100%',
  fontSize: '32px',
  lineHeight: '44px',
  letterSpacing: '-1px',
  fontFamily: globalTheme.font.light,
});

export const unite = style({
  fontSize: '0.9em',
});

export const styleSliceSwitch = {
  descWrapper,
  grid,
  illustration,
  section,
  title,
  unite,
};
