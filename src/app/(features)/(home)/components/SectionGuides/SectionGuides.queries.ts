export const postsQueryHomeComparatifs = `
  query Comparatifs {
    allHome {
      postGuides {
        _id
        title
        slug {
          current
        }
        categories {
          slug {
            current
          }
        }
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
  }
`;
