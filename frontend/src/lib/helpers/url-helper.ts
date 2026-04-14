let cachedURL: URL | null = null;

const getApiURL = (): URL => {
  if (cachedURL) return cachedURL;

  const isServer = typeof window === 'undefined';
  const isDev = process.env.NODE_ENV === 'development';

  let url;

  if (!isDev && isServer) url = process.env.SERVER_API_URL;
  else url = process.env.NEXT_PUBLIC_CLIENT_API_URL;

  if (!url) throw new Error('API_URL is not set in environment variables');

  cachedURL = new URL(url);

  return cachedURL;
};

export { getApiURL };
