'use client';

import Link from 'next/link';
import React from 'react';

export interface PageTitleProps extends React.HTMLAttributes<HTMLElement> {
  breadcrumbs?: {
    name: string;
    title?: string;
    url: string;
  }[];
  title?: string;
  breadcrumbTitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  breadcrumbs,
  title,
  breadcrumbTitle,
  className,
  ...props
}) => {
  return (
    <div className={`container ${className && className}`} {...props}>
      <div className="page-title">
        <nav>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            {breadcrumbs &&
              breadcrumbs.map((bc, key) => (
                <li key={key}>
                  <Link href={bc.url} title={bc.title}>
                    {bc.name}
                  </Link>
                </li>
              ))}
            {!breadcrumbs && <li>{breadcrumbTitle || title}</li>}
          </ol>
        </nav>
        {title && (
          <div className="heading">
            <h1>{title}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

PageTitle.displayName = 'PageTitle';

export default PageTitle;
