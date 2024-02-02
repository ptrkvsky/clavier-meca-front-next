import { style, globalStyle } from '@vanilla-extract/css';

export const blockIllu = style({
  display: 'flex',
  alignItems: 'center',
});

globalStyle(`${blockIllu} a`, {
  display: 'block',
  width: '100%',
});

export const styleProduct = {
  blockIllu,
};
