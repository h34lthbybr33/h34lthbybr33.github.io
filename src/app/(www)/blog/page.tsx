import { Metadata } from 'next';

import { BlogPosts, PageTitle } from '@www/_ui';
import { getBlogPosts } from '@www/_data/outstatic';
import { generateFeeds } from '../_lib/feeds';

export const metadata: Metadata = {
  title: 'Recent Blog Posts',
};

export default async function BlogPage() {
  await generateFeeds();
  const posts = await getBlogPosts();

  return (
    <>
      <PageTitle breadcrumbTitle="Blog" />
      <BlogPosts posts={posts} />
    </>
  );
}
