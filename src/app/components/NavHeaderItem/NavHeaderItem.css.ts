import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { globalStyle, style as vanillaStyle } from '@vanilla-extract/css';

const listItem = vanillaStyle({
  position: 'relative',
  fontSize: '16px',
  lineHeight: '20px',
});

globalStyle(`${listItem} a`, {
  color: globalTheme.color.main,
  textDecoration: 'none',

  '@media': {
    [mediaQueries.tabletLandscape]: {
      opacity: 0,
      color: globalTheme.color.revert,
      fontSize: '34px',
      lineHeight: '1.5',
      pointerEvents: 'none',
      transition: 'opacity 0.33s',
    },
  },
});

globalStyle(`.background-open ${listItem} a`, {
  '@media': {
    [mediaQueries.tabletLandscape]: {
      opacity: 1,
      pointerEvents: 'initial',
    },
  },
});

globalStyle(`${listItem} .active:after`, {
  content: '""',
  position: 'absolute',
  top: '24px',
  left: '1px',
  display: 'block',
  width: '29px',
  height: '4px',
  backgroundColor: globalTheme.bg.revert,
});

export const styleNavHeaderItem = {
  listItem,
};
