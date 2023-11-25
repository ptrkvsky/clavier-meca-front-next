export const queryIntro = `
query($slug: String!) {
  posts: allPost(where: { slug: { current: { eq: $slug } } }) {
    title
    _updatedAt
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
