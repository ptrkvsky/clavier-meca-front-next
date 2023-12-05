import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';
import { title as styleTitle } from '@/app/styles/titles.css';

export const article = style({
  margin: '98px 0',

  '@media': {
    [mediaQueries.mobile]: {
      margin: '48px 0',
    },
  },
});

globalStyle(`${article}:first-child`, {
  marginTop: 0,
});

globalStyle(`${article} .button`, {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '32px',
});

globalStyle(`${article} .text-desc`, {
  '@media': {
    [mediaQueries.mobile]: {
      padding: '0 8px',
    },
  },
});

const title = style({
  marginTop: 0,
  '@media': {
    [mediaQueries.mobile]: {
      margin: '24px 0 3px',
      paddingLeft: '8px',
      lineHeight: '1',
    },
  },
});

export const stickyHeading = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '466px 1fr',
  gap: '24px',

  '@media': {
    [mediaQueries.mobile]: {
      gridTemplateColumns: '1fr',
    },
  },
});

globalStyle(`${stickyHeading} .button-wrapper`, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  '@media': {
    [mediaQueries.mobile]: {
      margin: '12px 0 12px 8px',
    },
  },
});

globalStyle(`${stickyHeading} .teaser`, {
  position: 'absolute',
  bottom: '44px',
  left: '98px',
  fontSize: '16px',
  color: globalTheme.color.lighter,

  '@media': {
    [mediaQueries.mobile]: {
      bottom: '68px',
    },
  },
});

export const keyboardTitle = style([
  styleTitle.h3,
  {
    marginTop: '0',
    '@media': {
      [mediaQueries.mobile]: {
        margin: '24px 0 3px',
        paddingLeft: '8px',
        lineHeight: '1',
      },
    },
  },
]);

export const wrapperImage = style({
  height: '309px',
});

export const nextImage = style({
  height: '100%',
  position: 'relative',
});

export const wrapperDesc = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  borderBottom: '8px solid #000',
  marginBottom: '59px',
  '@media': {
    [mediaQueries.mobile]: {
      flexDirection: 'column',
      marginBottom: '32px',
    },
  },
});

globalStyle(`${wrapperDesc} dl`, {
  display: 'flex',
  alignItems: 'center',
  marginLeft: '24px',
  '@media': {
    [mediaQueries.mobile]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '8px',
      padding: '0',
      margin: '12px 0 12px 8px',
    },
  },
});

globalStyle(`${wrapperDesc} dt`, {
  padding: 0,
  fontFamily: globalTheme.font.title,
  textTransform: 'uppercase',
  letterSpacing: '-1px',
});

globalStyle(`${wrapperDesc} h3`, {
  marginTop: 0,
});

globalStyle(`${wrapperDesc} dd`, {
  display: 'flex',
  alignItems: 'baseline',
  margin: '0 24px 0 7px',
  padding: ' 0',
  fontFamily: globalTheme.font.light,
  '@media': {
    [mediaQueries.mobile]: {
      padding: '0',
      fontFamily: globalTheme.font.title,
      textTransform: 'uppercase',
      letterSpacing: '-1px',
    },
  },
});

globalStyle(`${wrapperDesc} dd:last-child`, {
  marginRight: '0',
});

export const styleArticle = {
  article,
  title,
  keyboardTitle,
  nextImage,
  stickyHeading,
  wrapperDesc,
  wrapperImage,
};
