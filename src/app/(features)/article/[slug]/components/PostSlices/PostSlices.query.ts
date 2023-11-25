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
                  aspectRatio
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
                  aspectRatio
                  width
                  height
                }
              }
            }
          }
        }
      }
      ... on KeyboardsSection {
        _key
        _type
        descriptionRaw
        hn
        rightCol
        subTitleCol
        title
        titleCol
        keyboardCol {
          _key
          urlAmazon
          urlMateriel
          title
          mainImage {
            alt
            asset {
              url
              metadata {
                dimensions {
                  width
                  height
                  aspectRatio
                }
              }
            }
          }
        }
        keyboards {
          Hn
          title
          _key
          keyboard {
            _key
            asin
            mainImage {
              alt
              asset {
                url
                metadata {
                  dimensions {
                    width
                    height
                    aspectRatio
                  }
                }
              }
            }
            price
            rgb
            shortDescRaw
            slug {
              _key
              _type
              current
            }
            switchCategory {
              _key
              nom
            }
            teaser
            urlAmazon
            urlMateriel
            title
            layout
            prosRaw
            consRaw
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
                    aspectRatio
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
