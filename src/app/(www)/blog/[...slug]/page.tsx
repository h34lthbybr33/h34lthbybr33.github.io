import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { BlogPost, BlogPosts, PageTitle } from '@www/_ui';
import { siteInfo } from '@www/_data/site-info';
import { buildFullUrl } from '@www/_lib/util';
import {
  getBlogPostBySlug,
  getBlogPosts,
  getBlogPostsByTag,
  getBlogPostTag,
  getBlogPostTags,
} from '@www/_data/outstatic';
import defaultPostImage from '@www/_assets/img/logo/full.png';

const TAG_SLUG = 'tag';

interface PageProps {
  params: {
    slug: string[];
  };
}

const SinglePost: React.FC<{ slug: string }> = async ({ slug }) => {
  const post = await getBlogPostBySlug(slug);
  if (post) {
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
  redirect('/blog');
};

const PostsByTag: React.FC<{ tag: string }> = async ({ tag: tagValue }) => {
  const tag = await getBlogPostTag(tagValue);
  if (tag) {
    const posts = await getBlogPostsByTag(tagValue);

    const breadcrumbs = [
      {
        name: 'Blog',
        title: 'Latest blog posts',
        url: '/blog',
      },
      {
        name: `${tag.label}`,
        title: `Blog posts tagged ${tag.label}`,
        url: `/blog/tag/${tag.value}`,
      },
    ];

    return (
      <>
        <PageTitle breadcrumbs={breadcrumbs} />
        <BlogPosts
          posts={posts}
          title={`${tag.label} blog posts`}
          subTitle={`All posts tagged with '${tag.label}'.`}
        />
      </>
    );
  }
  redirect('/blog');
};

export default async function BlogPostPage({ params: { slug } }: PageProps) {
  if (slug.length === 2 && slug[0] === TAG_SLUG) {
    return <PostsByTag tag={slug[1]} />;
  } else if (slug.length === 1) {
    return <SinglePost slug={slug[0]} />;
  }
  redirect(buildFullUrl('/blog'));
}

export const generateStaticParams = async () => {
  const posts = await getBlogPosts();
  const tags = await getBlogPostTags();
  const staticParams = [
    ...posts.map((post) => ({
      slug: [post.slug],
    })),
    ...tags.map((tag) => ({
      slug: [TAG_SLUG, tag?.value],
    })),
  ];
  return staticParams;
};

type GenerateMetadata = ({ params }: PageProps) => Promise<Metadata>;

export const generateMetadata: GenerateMetadata = async ({
  params: { slug },
}: PageProps) => {
  if (slug.length > 1 && slug[0] === TAG_SLUG) {
    const tag = await getBlogPostTag(slug[1]);
    if (typeof tag !== 'undefined') {
      return {
        title: `${tag?.label} blog posts`,
        description: `All blog posts tagged with ${tag?.label}`,
      };
    }
  } else if (slug.length === 1) {
    const post = await getBlogPostBySlug(slug[0]);

    if (typeof post !== 'undefined') {
      return {
        title: post.title || siteInfo.title,
        description: post.description || siteInfo.title,
        openGraph: {
          type: 'article',
          title: post.title,
          description: post.description,
          url: buildFullUrl(`/blog/${post.slug}`),
          images: [buildFullUrl(post.coverImage || defaultPostImage.src)],
          publishedTime: post.publishedAt,
          authors: post.author?.name,
          tags: post.tags.map((tag) => tag && tag.label),
        },
      };
    }
  }

  return {} as Metadata;
};
