import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const section = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px',
  borderTop: `8px solid ${globalTheme.color.main}`,
  marginTop: '59px',
  paddingTop: '12px',

  '@media': {
    [mediaQueries.mobile]: {
      gridTemplateColumns: '1fr',
      marginTop: '32px',
    },
  },
});

export const title = style({
  display: 'inline-block',
  padding: '20px',
  fontSize: '30px',
  fontFamily: "'Suisse-bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  letterSpacing: '-1px',
  backgroundColor: globalTheme.color.border,

  '@media': {
    [mediaQueries.mobile]: {
      display: 'block',
      marginTop: '12px',
    },
  },
});

globalStyle(`${section} li`, {
  position: 'relative',
  marginBottom: '8px',
  listStyleType: 'none',
  fontSize: '0.9em',
  lineHeight: '1.25',
});

globalStyle(`${section} li:before`, {
  content: "''",
  position: 'absolute',
  top: '5px',
  left: '-23px',
  display: 'block',
  width: '12px',
  height: '12px',
  backgroundSize: 'cover',
});

globalStyle(`${section} .pros li:before`, {
  content: "''",
  position: 'absolute',
  top: '5px',
  left: '-23px',
  display: 'block',
  width: '12px',
  height: '12px',
  backgroundSize: 'cover',
});

globalStyle(`${section} .pros li:before`, {
  backgroundImage:
    'url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQxN3B0IiB2aWV3Qm94PSIwIC00NiA0MTcuODEzMzMgNDE3IiB3aWR0aD0iNDE3cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iZ3JlZW4iIGQ9Im0xNTkuOTg4MjgxIDMxOC41ODIwMzFjLTMuOTg4MjgxIDQuMDExNzE5LTkuNDI5Njg3IDYuMjUtMTUuMDgyMDMxIDYuMjVzLTExLjA5Mzc1LTIuMjM4MjgxLTE1LjA4MjAzMS02LjI1bC0xMjAuNDQ5MjE5LTEyMC40Njg3NWMtMTIuNS0xMi41LTEyLjUtMzIuNzY5NTMxIDAtNDUuMjQ2MDkzbDE1LjA4MjAzMS0xNS4wODU5MzhjMTIuNTAzOTA3LTEyLjUgMzIuNzUtMTIuNSA0NS4yNSAwbDc1LjE5OTIxOSA3NS4yMDMxMjUgMjAzLjE5OTIxOS0yMDMuMjAzMTI1YzEyLjUwMzkwNi0xMi41IDMyLjc2OTUzMS0xMi41IDQ1LjI1IDBsMTUuMDgyMDMxIDE1LjA4NTkzOGMxMi41IDEyLjUgMTIuNSAzMi43NjU2MjQgMCA0NS4yNDYwOTN6bTAgMCIvPjwvc3ZnPg==)',
});

globalStyle(`${section} .cons li:before`, {
  backgroundImage:
    'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDE4MC42MDcgMTgwLjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTgwLjYwNyAxODAuNjA3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSJyZWQiIGQ9Ik0xODAuNjA3LDEwLjYwN2wtNzkuNjk2LDc5LjY5N2w3OS42OTYsNzkuNjk3TDE3MCwxODAuNjA3bC03OS42OTYtNzkuNjk2bC03OS42OTYsNzkuNjk2TDAsMTcwLjAwMWw3OS42OTYtNzkuNjk3TDAsMTAuNjA3DQoJTDEwLjYwNywwLjAwMWw3OS42OTYsNzkuNjk2TDE3MCwwLjAwMUwxODAuNjA3LDEwLjYwN3oiLz4NCg0KPC9zdmc+DQo=)',
});

export const styleSectionProsAndCons = {
  section,
  title,
};
