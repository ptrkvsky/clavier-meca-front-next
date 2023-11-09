export const siteMapQuery = `
  query {
    authors: allAuthor {
      _id
      name
      slug {
        current
      }
    }
    categories: allCategory {
      _id
      title
      slug {
        current
      }
    }
    posts: allPost {
      _id
      title
      isOnSitemap
      slug {
        current
      }
      categories {
        _id
        title
        slug {
          current
        }
      }
    }
  }
`;
