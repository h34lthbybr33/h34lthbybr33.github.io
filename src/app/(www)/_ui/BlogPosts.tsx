'use client';

import React from 'react';
import { BlogPostCollection } from '@www/_data/outstatic';
import { BlogPostTile, Section, SectionBackground, SectionTitle } from '.';

export interface BlogPostsProps extends React.HTMLAttributes<HTMLElement> {
  background?: SectionBackground;
  posts: BlogPostCollection;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BlogPosts: React.FC<BlogPostsProps> = ({ background, posts, ...props }) => {
  return (
    <Section name="blog-posts" background={background}>
      <SectionTitle title="Recent Blog Posts">
        <p>Some recents posts about various insurance related topics.</p>
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
