let cachedURL: URL | null = null;

const getApiURL = (): URL => {
  if (cachedURL) return cachedURL;

  const url = process.env.NEXT_PUBLIC_CLIENT_API_URL;

  if (!url) throw new Error('API_URL is not set in environment variables');

  cachedURL = new URL(url);

  return cachedURL;
};

export { getApiURL };
