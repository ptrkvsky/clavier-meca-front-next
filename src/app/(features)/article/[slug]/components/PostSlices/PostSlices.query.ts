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
                metadata {
                  dimensions {
                    width
                    height
                  }
                }
              }
              caption
            }
          }
        }
        ... on SwitchBlock {
          _key
          _type
          Hn
          switch {
            couleur {
              hex
            }
            type
            distanceDactivation
            distanceTotale
            forceDactionnement
            forceMaximale
            nom
            son {
              asset {
                url
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
                  metadata { 
                    dimensions { 
                     width
                     height
                    }
                  }
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
        ... on BodySection {
          _key
        	_type
          bodyTexttRaw
        }
      }
    }
  }
`;
