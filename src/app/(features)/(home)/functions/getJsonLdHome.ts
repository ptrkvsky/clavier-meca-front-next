export function getJsonLdHome() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Clavier Meca',
    url: process.env.BASE_URL,
    sameAs: 'https://www.facebook.com/Clavier-Meca-102753598401711',
  };
  return schema;
}
