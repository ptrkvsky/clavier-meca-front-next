export const queryHomeMETA = `
  query HomeMeta {
    allHome {
      metaDescription
      metaTitle
      mainImage { 
        asset { 
          url
        }
      }
    }
  }
`;
