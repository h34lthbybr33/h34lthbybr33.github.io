import { Metadata } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

import { BlogPosts, PageTitle, Pagination } from '@www/_ui';
import { getBlogPosts } from '@www/_data/outstatic';
import { generateFeeds } from '@www/_lib/feeds';
import { buildBlogPageUrl } from '../_lib/util';
import { BLOG_POSTS_PER_PAGE } from '../_data/site-settings';

export const metadata: Metadata = {
  title: 'Recent Blog Posts',
};

const PROJECT_DIR = path.join(fileURLToPath(import.meta.url), '../../../../../');
const PUBLIC_DIR = path.join(PROJECT_DIR, 'public');

export default async function BlogPage() {
  await generateFeeds(PUBLIC_DIR);

  const posts = await getBlogPosts();
  const totalPages = Math.ceil(posts.length / BLOG_POSTS_PER_PAGE);

  return (
    <>
      <PageTitle breadcrumbTitle="Blog" />
      <BlogPosts posts={posts.slice(0, Math.min(posts.length, BLOG_POSTS_PER_PAGE))} />
      <Pagination
        currentPage={1}
        totalPages={totalPages}
        pageLinkBuilder={buildBlogPageUrl}
      />
    </>
  );
}
