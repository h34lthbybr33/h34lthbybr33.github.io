'use client';

import React from 'react';
import classNames from 'classnames';
import { GoClock, GoPersonFill } from 'react-icons/go';
import Link from 'next/link';
import moment from 'moment';

import { BlogPost as BlogPostType } from '@www/_data/outstatic';
import { Markdown, Section } from '.';
import { BiFolder, BiTag } from 'react-icons/bi';

export interface BlogPostProps extends React.HTMLAttributes<HTMLElement> {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, className, ...props }) => {
  return (
    <div className={classNames('container', className)} {...props}>
      <div className="row">
        <div className="col-lg-8">
          <Section name="blog-details">
            <div className="container">
              <article className="article">
                <div className="post-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage || ''}
                    alt={post.title}
                    className="img-fluid"
                  />
                </div>
                <h2 className="title">{post.title}</h2>
                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center">
                      <GoPersonFill />
                      <Link href="#">{post.author?.name}</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <GoClock />
                      <Link href="#">
                        <time dateTime={post.publishedAt}>
                          {moment(post.publishedAt).format('LL')}
                        </time>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <Markdown content={post.content} />
                </div>
                <div className="meta-bottom">
                  <BiFolder />
                  <ul className="cats">
                    <li>
                      <Link href="#">Blog Posts</Link>
                    </li>
                  </ul>
                  <BiTag />
                  <ul className="tags">
                    {post.tags?.map((tag, key) => (
                      <li key={key}>
                        <Link href={`#${tag.value}`}>{tag.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </Section>
        </div>
        <div className="col-lg-4 sidebar">
          <div className="widgets-container">
            <div className="blog-author-widget widget-item">
              <div className="d-flex flex-column align-items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.author?.picture || ''}
                  alt={post.author?.name}
                  className="rounded-circle flex-shrink-0"
                />
                <h4>{post.author?.name}</h4>
              </div>
            </div>
            <div className="categories-widget widget-item">
              <h3 className="widget-title">Categories</h3>
              <ul className="mt-3">
                {post.tags.map((tag, key) => (
                  <li key={key}>
                    <Link href={`#${tag.value}`}>{tag.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <article>
    //   <div className="post-img">
    //     {/* eslint-disable-next-line @next/next/no-img-element */}
    //     <img src={post.coverImage || ''} alt={post.title} className="img-fluid" />
    //   </div>
    //   <p className="post-category">Blog Articles</p>
    //   <h2 className="title">
    //     <Link href={`/blog/${post.slug}`}>{post.title}</Link>
    //   </h2>
    //   <div className="d-flex align-items-center">
    //     {/* eslint-disable-next-line @next/next/no-img-element */}
    //     <img src={post.author?.picture} alt={post.author?.name} className="img-fluid post-author-img flex-shrink-0" />
    //     <div className="post-meta">
    //       <p className="post-author">{post.author?.name || 'Anonymous'}</p>
    //       <p className="post-date">
    //         <time dateTime={post.publishedAt}>{moment(post.publishedAt).format('LL')}</time>
    //       </p>
    //     </div>
    //   </div>
    // </article>
    //</div>
  );
};

BlogPost.displayName = 'BlogPost';

export default BlogPost;
