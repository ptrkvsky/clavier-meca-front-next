export const queryNavHeaderList = `
  query {
    allMenu(where: { slug: {current :{eq:"main-menu"} }}) {
      _id
      menuItem {
        _key
        menuItemName
        menuItemSlug {
          current
        }
      }
    }
  }
`;
