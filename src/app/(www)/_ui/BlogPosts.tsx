'use client';

import React from 'react';
import { BlogPostCollection } from '@www/_data/outstatic';
import { BlogPostTile, Section, SectionBackground, SectionTitle } from '.';

export interface BlogPostsProps extends React.HTMLAttributes<HTMLElement> {
  background?: SectionBackground;
  posts: BlogPostCollection;
  title?: string;
  subTitle?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BlogPosts: React.FC<BlogPostsProps> = ({
  background,
  posts,
  title = 'Recent Blog Posts',
  subTitle = 'Some recents posts about various insurance related topics.',
  ...props
}) => {
  return (
    <Section name="blog-posts" background={background} {...props}>
      <SectionTitle title={title}>
        <p>{subTitle}</p>
      </SectionTitle>
      <div className="container">
        <div className="row justify-content-center">
          {posts.map((post, key) => (
            <BlogPostTile key={key} post={post} />
          ))}
        </div>
      </div>
    </Section>
  );
};

BlogPosts.displayName = 'BlogPosts';

export default BlogPosts;
