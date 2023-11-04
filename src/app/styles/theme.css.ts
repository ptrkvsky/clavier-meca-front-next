import { createGlobalTheme } from '@vanilla-extract/css';

export const globalTheme = createGlobalTheme(':root', {
  color: {
    main: '#000',
    lighter: '#767676',
    revert: '#FFF',
    primary: '#8000FF',
    primary17: '#E9D4FF',
    border: '#F6F6F6',
    contrast: '#767676',
  },
  bg: {
    main: '#FFF',
    revert: '#000',
  },
  border: {
    primary: '#434343',
  },
  font: {
    main: 'Suisse-regular',
    title: `'Suisse-bold'`,
    light: "'Suisse-light', 'Helvetica Neue',Helvetica,Arial,sans-serif",
  },
  maxWidth: '1150px',
  contentWidth: '760px',
});
