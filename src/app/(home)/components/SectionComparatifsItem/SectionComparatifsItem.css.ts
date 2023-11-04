import { globalTheme } from '@/app/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const styleLinkItem = style({
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      cursor: 'pointer',
      color: globalTheme.color.primary,
    },
  },
});

export const styleGrid = style({
  position: 'relative',
  zIndex: 10,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateAreas: "'col1 col2'",
  marginBottom: '61px',
  '@media': {
    'screen and (max-width: 767px)': {
      display: 'block',
      marginBottom: '32px',
    },
  },
});

export const styleWrapperImage = style({
  display: 'block',
  gridArea: 'col1',
  selectors: {
    '.revert &': {
      gridArea: 'col2',
    },
  },
  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: '0',
      lineHeight: '0',
    },
  },
});

export const styleColLeft = style({
  display: 'flex',
  gridArea: 'col2',
  alignItems: 'center',
  position: 'relative',
  left: '-60px',
  '@media': {
    'screen and (max-width: 767px)': {
      left: '0px',
    },
  },
  selectors: {
    '.revert &': {
      gridArea: 'col1',
      left: 'initial',
      right: '-60px',
      '@media': {
        'screen and (max-width: 767px)': {
          right: '0',
        },
      },
    },
  },
});

export const styleTitle = style({
  padding: '24px',
  fontSize: '48px',
  letterSpacing: '-2px',
  backgroundColor: globalTheme.color.revert,
  fontFamily: globalTheme.font.title,
  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: '27px',
      padding: '0 8px',
      margin: '10px 0',
      lineHeight: 1.1,
    },
  },
});
