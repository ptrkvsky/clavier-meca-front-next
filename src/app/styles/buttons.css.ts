import { style, globalStyle } from '@vanilla-extract/css';
import { globalTheme } from './theme.css';

export const primary = style({
  cursor: 'pointer',
  display: 'inline-block',
  padding: '10px 20px',
  fontSize: '18px',
  fontFamily: globalTheme.font.title,
  textAlign: 'center',
  textTransform: 'uppercase',
  backgroundColor: globalTheme.color.primary,
  color: globalTheme.color.revert,
  borderRadius: '3px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  transition: 'all 0.1s linear',
  border: 'none',
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'none',
    boxShadow: '0px 4px 9px rgba(128, 0, 255, 0.25)',
  },
});

// Big button
globalStyle(`${primary}.big`, {
  padding: '12px 32px',
  fontSize: '24px',
});

export const stylesButton = {
  primary,
};
