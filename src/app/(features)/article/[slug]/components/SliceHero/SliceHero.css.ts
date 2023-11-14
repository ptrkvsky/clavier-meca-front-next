import { style as vanillaStyle, globalStyle } from '@vanilla-extract/css';
import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';

export const grid = vanillaStyle({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  margin: '114px 0',

  '@media': {
    [mediaQueries.tabletLandscape]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto auto',
    },
    [mediaQueries.mobile]: {
      margin: '24px 0',
    },
  },
});

export const illustration = vanillaStyle({
  display: 'flex',
  padding: 0,
  backgroundColor: 'transparent',
});

globalStyle(`${illustration}.has-padding`, {
  padding: '45px',
  backgroundColor: globalTheme.color.primary,
});

export const hightLightWrapper = vanillaStyle({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const highLight = vanillaStyle({
  maxWidth: '367px',
  fontSize: '24px',
  lineHeight: '40px',
  fontFamily: globalTheme?.font?.light,
  '@media': {
    [mediaQueries.mobile]: {
      padding: '0 8px',
      letterSpacing: '0',
    },
  },
});

export const styleSliceHero = {
  grid,
  illustration,
  hightLightWrapper,
  highLight,
};

// const HeroStyled = styled('section')`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   margin: 114px 0;

//   ${mediaQueries.tabletLandscape} {
//     grid-template-columns: 1fr;
//     grid-template-rows: auto auto;
//   }
//   ${mediaQueries.mobile} {
//     margin: 24px 0;
//   }

//   .illustration {
//     display: flex;
//     padding: ${props => (props.padding ? '45px' : '0')};
//     background-color: ${props =>
//       props.padding ? props.theme.colors.primary : 'transparent'};
//   }

//   .highlight-wrapper {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .highlight {
//     max-width: 367px;
//     font-size: 24px;
//     line-height: 40px;
//     font-family: ${fonts.light};
//     ${mediaQueries.mobile} {
//       padding: 0 8px;
//       letter-spacing: 0;
//     }
//   }
// `;
