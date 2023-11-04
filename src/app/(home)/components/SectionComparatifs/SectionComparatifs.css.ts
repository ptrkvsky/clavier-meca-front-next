// const Title = styled('h2')`
//   position: relative;
//   margin-bottom: 61px;
//   font-size: 64px;
//   font-family: ${fonts.title};
//   letter-spacing: -1px;
//   line-height: 1;
//   ${mediaQueries.mobile}{
//     padding-left: 8px;
//     padding-right: 8px;
//     margin-bottom: 45px;
//     font-size: 40px;
//   }

import mediaQueries from '@/app/styles/mediaQueries';
import { globalTheme } from '@/app/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const styleTitleSection = style({
  position: 'relative',
  marginBottom: '61px',
  fontSize: '64px',
  fontFamily: globalTheme.font.title, // Make sure 'fonts.title' is defined somewhere in your code.
  letterSpacing: '-1px',
  lineHeight: 1,
  ':after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: '-21px',
    width: '74px',
    height: '11px',
    backgroundColor: globalTheme.color.primary, // Assuming you have 'props.theme.colors.primary'.
  },
  '@media': {
    [mediaQueries.mobile]: {
      paddingLeft: '8px',
      paddingRight: '8px',
      marginBottom: '45px',
      fontSize: '40px',
    },
  },
  // Add more styles as needed.
});

export const sectionStyle = style({
  position: 'relative',
  ':after': {
    content: '""',
    zIndex: 0,
    display: 'block',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    width: '488px',
    height: '563px',
    backgroundColor: globalTheme.color.primary17, // Assuming you have 'props.theme.colors.primary17'.
  },

  // Add more styles as needed.
});
