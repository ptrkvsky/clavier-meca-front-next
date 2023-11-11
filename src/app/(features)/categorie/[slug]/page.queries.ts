export const queryAllPost = ` 
  query {
    posts: allPost {
      _id
      slug {
        current
      }
      title
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
`;
