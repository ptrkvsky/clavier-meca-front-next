import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const mainWrapper = style({
  width: globalTheme.maxWidth,
  maxWidth: '100%',
  margin: '0 auto',

  '@media': {
    [mediaQueries.tabletLandscape]: {
      width: '100%',
    },
  },
});

export const styleTemplatePost = {
  mainWrapper,
};
