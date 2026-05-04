import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ВАЖНО: включаем статический экспорт
  output: 'export',

  images: {
    unoptimized: true, // важно для статического хостинга
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.mbl1.by',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
