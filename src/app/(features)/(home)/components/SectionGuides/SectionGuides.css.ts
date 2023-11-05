import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style } from '@vanilla-extract/css';

const section = style({
  marginTop: '128px',
  '@media': {
    [mediaQueries.mobile]: {
      marginTop: '32px',
    },
  },
});

const title = style({
  position: 'relative',
  fontSize: '64px',
  lineHeight: '1',
  fontFamily: globalTheme.font.title,
  letterSpacing: '-1px',

  ':after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: '-20px',
    width: '74px',
    height: '11px',
    backgroundColor: globalTheme.color.primary,
  },
  '@media': {
    [mediaQueries.mobile]: {
      fontSize: '40px',
      padding: '0 8px',
    },
  },
});

export const styleSectionGuides = {
  section,
  title,
};
