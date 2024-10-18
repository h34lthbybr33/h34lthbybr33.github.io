import { Feed } from 'feed';
import path from 'node:path';
import fs from 'node:fs/promises';

import { getBlogPosts } from '@www/_data/outstatic';
import { PUBLIC_DIR } from '@www/_lib/const';
import { buildFullUrl } from '@www/_lib/util';
import siteInfo from '../_data/site-info';
import contactInfo from '../_data/contact-info';
import { getImageProps } from 'next/image';

export async function generateFeeds(): Promise<void> {
  const posts = await getBlogPosts();
  const siteImageProps = getImageProps({
    alt: '',
    width: 300,
    height: 300,
    src: require('@www/_assets/img/logo/full.svg'),
  });

  const feed = new Feed({
    title: siteInfo.title,
    description: siteInfo.description,
    id: buildFullUrl('/'),
    link: buildFullUrl('/'),
    language: 'en',
    generator: 'HealthByBree.com',
    image: buildFullUrl(siteImageProps.props?.src),
    copyright: `${new Date().getFullYear()} ${contactInfo.name}`,
    author: {
      name: contactInfo.name,
      email: contactInfo.email,
      //link: '',
    },
    updated: new Date(),
    feedLinks: {
      json: buildFullUrl('/feed.json'),
      atom: buildFullUrl('/atom.xml'),
      rss: buildFullUrl('/rss.xml'),
    },
  });
  const categories: string[] = [];
  posts.forEach((post) => {
    feed.addItem({
      id: post.slug,
      title: post.title,
      description: post.description,
      date: new Date(post.publishedAt),
      link: buildFullUrl(`/blog/${post.slug}`),
      author: [
        {
          name: post.author?.name || contactInfo.name,
        },
      ],
    });
    post.tags.forEach((tag) => {
      if (categories.indexOf(tag.label) === -1) {
        categories.push(tag.label);
        feed.addCategory(tag.label);
      }
    });
  });

  await fs.writeFile(path.join(PUBLIC_DIR, 'feed.json'), feed.json1());
  await fs.writeFile(path.join(PUBLIC_DIR, 'rss.xml'), feed.rss2());
  await fs.writeFile(path.join(PUBLIC_DIR, 'atom.xml'), feed.atom1());
}
