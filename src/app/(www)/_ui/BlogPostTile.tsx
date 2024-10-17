'use client';

import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import moment from 'moment';

import { BlogPost } from '@www/_data/outstatic';

export interface BlogPostTileProps extends React.HTMLAttributes<HTMLElement> {
  post: BlogPost;
}

const BlogPostTile: React.FC<BlogPostTileProps> = ({ post, className, ...props }) => {
  return (
    <div className={classNames('col-lg-4 col-md-6 col-sm-12 py-2', className)} {...props}>
      <article className="card">
        <div className="post-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.coverImage || ''} alt={post.title} className="img-fluid" />
        </div>
        <p className="post-category">Blog Articles</p>
        <h2 className="title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <div className="d-flex align-items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.author?.picture}
            alt={post.author?.name}
            className="img-fluid post-author-img flex-shrink-0"
          />
          <div className="post-meta">
            <p className="post-author">{post.author?.name || 'Anonymous'}</p>
            <p className="post-date">
              <time dateTime={post.publishedAt}>
                {moment(post.publishedAt).format('LL')}
              </time>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

BlogPostTile.displayName = 'BlogPostTile';

export default BlogPostTile;
