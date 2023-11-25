import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapperMain = style({
  margin: '114px 0',
  display: 'grid',
  gridTemplateColumns: '1fr 760px 1fr',

  '@media': {
    [mediaQueries.tabletLandscape]: {
      gridTemplateColumns: '1fr',
      gap: '24px',
      margin: '64px 0',
    },
    [mediaQueries.mobile]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto auto auto',
      gap: '16px',
      margin: '24px 0',
      padding: '0 8px',
    },
  },
});

export const h1 = style({
  margin: '0',
  padding: '0',
  fontSize: '48px',
  lineHeight: '59px',
  fontFamily: globalTheme.font.title,

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: '35px',
      lineHeight: '35px',
    },
  },
});

export const info = style({
  fontSize: '14px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  color: globalTheme.color.lighter,
});

const categorie = style([
  info,
  {
    position: 'relative',
    top: '11px',

    '@media': {
      [mediaQueries.mobile]: {
        top: '0',
      },
    },
  },
]);

const wrapperDate = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

export const styleIntro = {
  wrapperMain,
  h1,
  info,
  categorie,
  wrapperDate,
};
