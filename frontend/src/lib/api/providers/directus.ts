import { createDirectus, createItems, readItems, rest, staticToken } from '@directus/sdk';
import { getApiURL } from '_helpers/url-helper';

const directus = createDirectus(getApiURL().href)
  .with(rest())
  .with(staticToken('GbOjzxPfosOPItS_v28R-DYNyFR5kBN7'));

const getData = async (
  collection: string,
  throwOnError = false
): Promise<Record<string, any>[]> => {
  try {
    const result = await directus.request(
      readItems(collection, {
        fields: ['*', '*.*'],
      })
    );

    return Array.isArray(result) ? result : [result];
  } catch (err) {
    console.error(`Error fetching collection "${collection}":`, err);

    if (throwOnError) throw err;

    return [];
  }
};

const postData = async (collection: string, data: any[], throwOnError = false): Promise<void> => {
  try {
    await directus.request(createItems(collection, data));
  } catch (err) {
    console.error(`Error post collection "${collection}":`, err);

    if (throwOnError) throw err;
  }
};

export { getData, postData };
