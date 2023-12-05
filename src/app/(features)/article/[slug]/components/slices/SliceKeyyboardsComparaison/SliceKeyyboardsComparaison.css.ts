import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const tableDesc = style({
  '@media': {
    [mediaQueries.mobile]: {
      padding: '0 8px',
    },
  },
});

export const wrapperTable = style({
  '@media': {
    [mediaQueries.mobile]: {
      maxWidth: '375px',
      overflowX: 'auto',
      margin: '48px 0',
    },
    [mediaQueries.miniMobile]: {
      maxWidth: '360px',
    },
  },
});

export const table = style({
  borderCollapse: 'collapse',
  width: '100%',
  margin: '114px 0',
  '@media': {
    [mediaQueries.mobile]: {
      margin: '0',
    },
  },
});

export const thead = style({
  backgroundColor: globalTheme.color.primary,
  color: globalTheme.color.revert,
  fontSize: '24px',
  fontFamily: globalTheme.font.title,
  textTransform: 'uppercase',
});

globalStyle(`${thead} th`, {
  height: '52px',
});

globalStyle(`${thead} .pos`, {
  padding: '0 35px',
});

globalStyle(`${table} tbody tr:nth-of-type(odd)`, {
  padding: '0 35px',
});

globalStyle(`${table} tbody tr:nth-of-type(1) .pos`, {
  fontSize: '36px',
  color: globalTheme.color.primary,
});

globalStyle(`${table} tbody tr:nth-of-type(2) .pos`, {
  fontSize: '24px',
});

globalStyle(`${table} tbody .pos`, {
  fontSize: '24px',
});

globalStyle(`${table} tbody .pos`, {
  fontSize: '32px',
  fontFamily: globalTheme.font.title,
});

globalStyle(`${table} tbody .pos .marker`, {
  fontSize: '24px',
});

globalStyle(`${table} tbody .cell`, {
  textAlign: 'center',
});

globalStyle(`${table} tbody .name`, {
  fontSize: '24px',
  fontFamily: globalTheme.font.title,
});

globalStyle(`${table} tbody .photo`, {
  fontSize: '0',
});

globalStyle(`${table} tbody .price`, {
  fontSize: '24px',
  fontFamily: globalTheme.font.light,
});

globalStyle(`${table} tbody .price .currency`, {
  fontSize: '18px',
});

export const styleSliceKeyboardsComparaison = {
  tableDesc,
  wrapperTable,
  table,
  thead,
};
