import { MetadataRoute } from 'next';
import { buildFullUrl, getBlogUrl, buildBlogTagUrl, buildBlogUrl } from '@www/_lib/util';
import { getBlogPostTags, getBlogPosts } from './_data/outstatic';

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: buildFullUrl('/'),
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: getBlogUrl(true),
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: buildFullUrl('/faq'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  const posts = await getBlogPosts();
  for (const post of posts) {
    if (post) {
      sitemap.push({
        url: buildBlogUrl(post.slug, true),
        lastModified: post.publishedAt,
        changeFrequency: 'daily',
        priority: 0.75,
      });
    }
  }

  const tags = await getBlogPostTags();
  for (const tag of tags) {
    if (tag) {
      sitemap.push({
        url: buildBlogTagUrl(tag.value, true),
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.25,
      });
    }
  }

  return sitemap;
}
