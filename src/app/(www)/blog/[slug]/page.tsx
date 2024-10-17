import { Metadata } from 'next';

import { BlogPost, PageTitle } from '@www/_ui';
import { siteInfo } from '@www/_data/site-info';
import { getBlogPostBySlug, getBlogPosts } from '@www/_data/outstatic';
import defaultPostImage from '@www/_assets/img/logo/full.png';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params: { slug } }: PageProps) {
  const post = await getBlogPostBySlug(slug);

  const breadcrumbs = [
    {
      name: 'Blog',
      title: 'Latest blog posts',
      url: '/blog',
    },
  ];

  return (
    <>
      <PageTitle breadcrumbs={breadcrumbs} />
      <BlogPost post={post} />
    </>
  );
}

export const generateStaticParams = async () => {
  const posts = await getBlogPosts(6);
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

type GenerateMetadata = ({ params }: PageProps) => Promise<Metadata>;

export const generateMetadata: GenerateMetadata = async ({ params: { slug } }) => {
  const post = await getBlogPostBySlug(slug);
  return {
    title: post.title || siteInfo.title,
    description: post.description || siteInfo.title,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
      images: [
        `${process.env.NEXT_PUBLIC_BASE_URL}${post.coverImage || defaultPostImage.src}`,
      ],
      publishedTime: post.publishedAt,
      authors: post.author?.name,
      tags: post.tags.map((tag) => tag.label),
    },
  };
};
