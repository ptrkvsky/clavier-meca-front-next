const ENDPOINT = 'https://dhh9ms17.api.sanity.io/v1/graphql/production/default';

async function fetchSanity<ReturnType>(
  query: string,
  variables: Record<any, string> | undefined = undefined
) {
  const CACHE_TIME = 3600 * 24; // 24h

  try {
    const response = await fetch(ENDPOINT, {
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
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson.data as ReturnType;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('👨‍🚒', ENDPOINT);
    console.error('👨‍🚒', error);
    throw error;
  }
}

export default fetchSanity;
