export const postsQueryHomeComparatifs = `
  query Comparatifs {
    allHome {
      postComparatifs {
        _id
        title
        slug {
          current
        }
        mainImage {
          alt
          asset {
            url
            metadata {
              dimensions { 
              height
                width
                aspectRatio
              }
            }
          }
        }
      }
    }
  }
`;
