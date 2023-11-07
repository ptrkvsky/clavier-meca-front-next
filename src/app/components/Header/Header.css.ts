import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style as vanillaStyle } from '@vanilla-extract/css';

const header = vanillaStyle({
  width: globalTheme.maxWidth,
  maxWidth: '100%',
  margin: '0 auto',
  height: '72px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media': {
    [mediaQueries.tabletLandscape]: {
      width: '100%',
    },
    [mediaQueries.mobile]: {
      paddingLeft: '2vw',
    },
  },
});

const logo = vanillaStyle({
  fontFamily: globalTheme.font.title,
  fontSize: '20px',
  letterSpacing: '2px',
  lineHeight: '1',
  textTransform: 'uppercase',
  color: globalTheme.color.main,
  textDecoration: 'none',
});

export const styleHeader = {
  header,
  logo,
};
