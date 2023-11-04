export const queryHomeHero = `
  query Hero {
    allHome {
      h1
      introRaw
      mainImage { 
        alt
        asset { 
          url
          metadata { 
           dimensions { 
            width
            height
            }
          }
        }
      }
    }
  }
`;
