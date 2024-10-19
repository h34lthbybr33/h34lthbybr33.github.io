'use server';

import { Feed } from 'feed';
import path from 'path';
import fs from 'fs/promises';
import { getImageProps } from 'next/image';

import { getBlogPosts } from '@www/_data/outstatic';
import { buildFullUrl } from '@www/_lib/util';
import siteInfo from '@www/_data/site-info';
import contactInfo from '@www/_data/contact-info';

export async function generateFeeds(destinationPath: string): Promise<void> {
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
      if (tag && categories.indexOf(tag.label) === -1) {
        categories.push(tag.label);
        feed.addCategory(tag.label);
      }
    });
  });

  await fs.writeFile(path.join(destinationPath, 'feed.json'), feed.json1());
  await fs.writeFile(path.join(destinationPath, 'rss.xml'), feed.rss2());
  await fs.writeFile(path.join(destinationPath, 'atom.xml'), feed.atom1());
}
