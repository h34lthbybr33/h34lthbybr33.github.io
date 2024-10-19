import { Metadata } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

import { BlogPosts, PageTitle } from '@www/_ui';
import { getBlogPosts } from '@www/_data/outstatic';
import { generateFeeds } from '@www/_lib/feeds';

export const metadata: Metadata = {
  title: 'Recent Blog Posts',
};

const PROJECT_DIR = path.join(fileURLToPath(import.meta.url), '../../../../../');
const PUBLIC_DIR = path.join(PROJECT_DIR, 'public');

export default async function BlogPage() {
  await generateFeeds(PUBLIC_DIR);

  const posts = await getBlogPosts();

  return (
    <>
      <PageTitle breadcrumbTitle="Blog" />
      <BlogPosts posts={posts} />
    </>
  );
}
