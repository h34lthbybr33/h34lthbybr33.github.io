import { MetadataRoute } from 'next';
import { buildFullUrl, getBlogUrl } from '@www/_lib/util';

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: buildFullUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: getBlogUrl(true),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: buildFullUrl('/faq'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
