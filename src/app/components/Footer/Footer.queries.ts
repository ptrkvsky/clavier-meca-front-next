export const queryFooter = `
  query {
    allPost(where: { slug: {current :{eq:"mentions-legales"} }}) {
      _id,
      title 
      slug {
        current
      }
    }
  }
`;
