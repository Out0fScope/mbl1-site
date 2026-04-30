import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8055',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.mbl1.by',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
