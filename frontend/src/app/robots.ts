import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/privacy',
      },
    ],
    sitemap: 'https://mbl1.by/sitemap.xml',
  };
}
