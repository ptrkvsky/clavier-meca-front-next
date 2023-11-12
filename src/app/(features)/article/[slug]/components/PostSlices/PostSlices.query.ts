export const queryPostSlices = `
  query($slug: String!) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      _id
      title
      content {
        ... on Hero {
          _key
          _type
          brefRaw
          padding
          illustration {
            disabled
            image {
              alt
              asset {
                url
              }
              caption
            }
          }
        }
        ... on KeyboardsTable {
          _type
          descriptionRaw
          hn
          title
          keyboards {
            keyboard {
              _id
              asin
              price
              mainImage {
                alt
                asset {
                  url
                }
              }
              urlAmazon
              urlMateriel
              slug {
                current
              }
              title
              rgb
            }
            title
          }
        }
      }
    }
  }
`;
