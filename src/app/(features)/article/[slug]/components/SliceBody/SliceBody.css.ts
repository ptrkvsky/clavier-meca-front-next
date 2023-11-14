import { style, globalStyle } from '@vanilla-extract/css';
import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';

export const sectionBody = style({
  maxWidth: globalTheme.contentWidth,
  margin: '0 auto',
  fontSize: '18px',
  lineHeight: '24px',
});

globalStyle(`${sectionBody} img`, {
  maxWidth: '100%',
});

globalStyle(`${sectionBody} blockquote`, {
  position: 'relative',
  padding: '54px 0 54px 98px',
  fontSize: '32px',
  lineHeight: '44px',
  fontFamily: globalTheme.font.light,

  '@media': {
    [mediaQueries.mobile]: {
      padding: '12px 0 12px 24px',
      margin: '0 0 0 22px',
      fontSize: '30px',
      lineHeight: '42px',
    },
  },
});

globalStyle(`${sectionBody} blockquote:before`, {
  content: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCA0MyAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjM2OCAzMy4wNkgwLjYwOFYxNS4xMDhMMTAuNCAwLjg5OTk5OEgxOS44MDhMMTEuNDU2IDE2LjA2OEgxOC4zNjhWMzMuMDZaTTQxLjUwNCAzMy4wNkgyMy43NDRWMTUuMTA4TDMzLjUzNiAwLjg5OTk5OEg0Mi45NDRMMzQuNTkyIDE2LjA2OEg0MS41MDRWMzMuMDZaIiBmaWxsPSIjODAwMEZGIi8+Cjwvc3ZnPgo=")`,
  position: 'absolute',
  top: '54px',
  left: '34px',

  '@media': {
    [mediaQueries.mobile]: {
      top: '12px',
      left: '-30px',
    },
  },
});

globalStyle(`${sectionBody} h2`, {
  position: 'relative',
  fontSize: '48px',
  lineHeight: '64px',
  fontFamily: globalTheme.font.title,
  margin: '120px 0 85px 0',

  '@media': {
    [mediaQueries.mobile]: {
      margin: '48px 0 24px 0',
      lineHeight: '1.2',
      fontSize: '38px',
    },
  },
});

globalStyle(`${sectionBody} h2 span`, {
  zIndex: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: '-160px',
  fontSize: '250px',
  color: 'white',
  textShadow: `-1px -1px 0 ${globalTheme.color.primary},
    1px -1px 0 ${globalTheme.color.primary},
    -1px 1px 0 ${globalTheme.color.primary},
    1px 1px 0 ${globalTheme.color.primary}`,
  fontFamily: globalTheme.font.light,
  opacity: 0.2,

  '@media': {
    [mediaQueries.mobile]: {
      left: 0,
    },
  },
});

globalStyle(`${sectionBody} h3`, {
  position: 'relative',
  margin: '64px 0 67px',
  fontSize: '48px',
  fontFamily: globalTheme.font.title,
  lineHeight: '64px',

  '@media': {
    [mediaQueries.mobile]: {
      margin: '24px 0 32px 0',
      fontSize: '30px',
      lineHeight: '1.2',
    },
    [mediaQueries.miniMobile]: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      maxWidth: '360px',
      textOverflow: 'ellipsis',
    },
  },
});

globalStyle(`${sectionBody} h3:after`, {
  content: '""',
  display: 'block',
  position: 'absolute',
  bottom: '-20px',
  width: '74px',
  height: '11px',
  backgroundColor: globalTheme.color.primary,
});

globalStyle(`${sectionBody} h4`, {
  fontFamily: globalTheme.font.title,
  fontSize: '32px',
  lineHeight: '1.2',
});

export const styleSliceBody = {
  sectionBody,
};
