const ENDPOINT = 'https://dhh9ms17.api.sanity.io/v1/graphql/production/default';

function fetchSanity<ReturnType>(
  query: string,
  variables: Record<any, string> | undefined = undefined
) {
  const CACHE_TIME = 3600 * 24; // 24h

  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: CACHE_TIME },
  })
    .then((r) => r.json())
    .then((result) => {
      return result.data as ReturnType;
    })
    .catch((error: unknown) => {
      console.error('👨‍🚒', ENDPOINT);
      console.error('👨‍🚒', error);
    });
}

export default fetchSanity;
