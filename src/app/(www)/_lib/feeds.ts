import { Feed } from 'feed';
import path from 'node:path';
import fs from 'node:fs/promises';

import { getBlogPosts } from '@www/_data/outstatic';
import { BASE_URL, PUBLIC_DIR } from '@www/_lib/const';
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
    id: BASE_URL || '',
    link: BASE_URL,
    language: 'en',
    generator: 'HealthByBree.com',
    image: siteImageProps.props?.src,
    copyright: `${new Date().getFullYear()} ${contactInfo.name}`,
    author: {
      name: contactInfo.name || BASE_URL,
      email: contactInfo.email,
      //link: '',
    },
    updated: new Date(),
    feedLinks: {
      json: `${BASE_URL}feed.json`,
      atom: `${BASE_URL}atom.xml`,
      rss: `${BASE_URL}rss.xml`,
    },
  });
  const categories: string[] = [];
  posts.forEach((post) => {
    feed.addItem({
      id: post.slug,
      title: post.title,
      description: post.description,
      date: new Date(post.publishedAt),
      link: `${BASE_URL}blog/${post.slug}`,
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

  console.log(`JSON feed: ${path.join(PUBLIC_DIR, 'feed.json')}`);
  await fs.writeFile(path.join(PUBLIC_DIR, 'feed.json'), feed.json1());
  console.log(`RSS feed: ${path.join(PUBLIC_DIR, 'rss.xml')}`);
  await fs.writeFile(path.join(PUBLIC_DIR, 'rss.xml'), feed.rss2());
  console.log(`ATOM feed: ${path.join(PUBLIC_DIR, 'atom.xml')}`);
  await fs.writeFile(path.join(PUBLIC_DIR, 'atom.xml'), feed.atom1());
}
