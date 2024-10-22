import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { BlogPost, BlogPosts, PageTitle, Pagination } from '@www/_ui';
import { siteInfo } from '@www/_data/site-info';
import {
  buildBlogPageUrl,
  buildBlogTagUrl,
  buildBlogUrl,
  buildFullUrl,
  getBlogUrl,
  range,
} from '@www/_lib/util';
import {
  getBlogPostBySlug,
  getBlogPosts,
  getBlogPostsByTag,
  getBlogPostTag,
  getBlogPostTags,
} from '@www/_data/outstatic';
import {
  BLOG_PAGE_SLUG,
  BLOG_POSTS_PER_PAGE,
  BLOG_TAG_SLUG,
} from '@www/_data/site-settings';

import defaultPostImage from '@www/_assets/img/logo/full.png';

const SinglePost: React.FC<{ slug: string }> = async ({ slug }) => {
  const post = await getBlogPostBySlug(slug);
  if (post) {
    const breadcrumbs = [
      {
        name: 'Blog',
        title: 'Latest blog posts',
        url: getBlogUrl(),
      },
    ];

    return (
      <>
        <PageTitle breadcrumbs={breadcrumbs} />
        <BlogPost post={post} />
      </>
    );
  }
  redirect(getBlogUrl());
};

const PostsByPage: React.FC<{ page: number }> = async ({ page }) => {
  const posts = await getBlogPosts();
  const totalPages = Math.ceil(posts.length / BLOG_POSTS_PER_PAGE);
  const start = (page - 1) * BLOG_POSTS_PER_PAGE;
  const end = Math.min(posts.length, start + BLOG_POSTS_PER_PAGE);

  const breadcrumbs = [
    {
      name: 'Blog',
      title: 'Latest blog posts',
      url: getBlogUrl(),
    },
    {
      name: `Page ${page}`,
      title: `Blog posts page ${page}`,
      url: buildBlogPageUrl(page),
    },
  ];

  return (
    <>
      <PageTitle breadcrumbs={breadcrumbs} />
      <BlogPosts
        posts={posts.slice(start, end)}
        title={`Older blog posts`}
        subTitle={`Page ${page} of blog posts.`}
      />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        pageLinkBuilder={buildBlogPageUrl}
      />
    </>
  );
};

const PostsByTag: React.FC<{ tag: string }> = async ({ tag: tagValue }) => {
  const tag = await getBlogPostTag(tagValue);
  if (tag) {
    const posts = await getBlogPostsByTag(tagValue);

    const breadcrumbs = [
      {
        name: 'Blog',
        title: 'Latest blog posts',
        url: getBlogUrl(),
      },
      {
        name: `${tag.label}`,
        title: `Blog posts tagged ${tag.label}`,
        url: buildBlogTagUrl(tag.value),
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
  redirect(getBlogUrl());
};

interface BlogPostPageProps {
  params: {
    slug: string[];
  };
}
export default async function BlogPostPage({ params: { slug } }: BlogPostPageProps) {
  switch (slug[0]) {
    case BLOG_PAGE_SLUG:
      const page = slug.length > 1 ? parseInt(slug[1] || '') : 1;
      if (!isNaN(page)) {
        return <PostsByPage page={page} />;
      }
      break;
    case BLOG_TAG_SLUG:
      if (slug.length > 1) {
        return <PostsByTag tag={slug[1]} />;
      }
      break;
    default:
      return <SinglePost slug={slug[0]} />;
  }
  return redirect(getBlogUrl());
}

export const generateStaticParams = async () => {
  const posts = await getBlogPosts();
  const tags = await getBlogPostTags();
  let staticParams = [
    ...posts.map((post) => ({
      slug: [post.slug],
    })),
    ...tags.map((tag) => ({
      slug: [BLOG_TAG_SLUG, tag?.value], //TODO: use buildBlogTagUrl
    })),
  ];
  if (posts.length > BLOG_POSTS_PER_PAGE) {
    const lastPage = Math.ceil(posts.length / BLOG_POSTS_PER_PAGE);
    staticParams = staticParams.concat(
      range(lastPage, 1).map((key) => ({
        slug: [BLOG_PAGE_SLUG, `${key + 1}`], //TODO: use buildBlogSlugUrl
      })),
    );
  }
  return staticParams;
};

type GenerateMetadata = ({ params }: BlogPostPageProps) => Promise<Metadata>;

export const generateMetadata: GenerateMetadata = async ({
  params: { slug },
}: BlogPostPageProps) => {
  switch (slug[0]) {
    case BLOG_PAGE_SLUG:
      const page = slug.length > 1 ? parseInt(slug[1] || '') : 1;
      if (!isNaN(page)) {
        return {
          title: `Older blog posts`,
          description: `Page ${page} of older blog posts.`,
          keywords: siteInfo.keywords,
        };
      }
      break;
    case BLOG_TAG_SLUG:
      const tag = await getBlogPostTag(slug[1]);
      if (typeof tag !== 'undefined') {
        return {
          title: `${tag?.label} blog posts`,
          description: `All blog posts tagged with ${tag?.label}.`,
          keywords: siteInfo.keywords,
        };
      }
      break;
    default:
      const post = await getBlogPostBySlug(slug[0]);
      if (typeof post !== 'undefined') {
        return {
          title: post.title || siteInfo.title,
          description: post.description || siteInfo.title,
          keywords: siteInfo.keywords,
          openGraph: {
            type: 'article',
            title: post.title,
            description: post.description,
            url: buildBlogUrl(post.slug, true),
            images: [buildFullUrl(post.coverImage || defaultPostImage.src)],
            publishedTime: post.publishedAt,
            authors: post.author?.name,
            tags: post.tags.map((tag) => tag && tag.label),
          },
        };
      }
      break;
  }
  return {} as Metadata;
};
