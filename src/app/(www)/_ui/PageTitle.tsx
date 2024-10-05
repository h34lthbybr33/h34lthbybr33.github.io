'use client';

import Link from 'next/link';
import React from 'react';
import classNames from 'classnames';

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
    <div className={classNames('container', className)} {...props}>
      <div className="page-title border-top">
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
            {breadcrumbTitle && <li>{breadcrumbTitle}</li>}
          </ol>
        </nav>
        {title && (
          <div className="heading">
            <h2 className="text-center">{title}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

PageTitle.displayName = 'PageTitle';

export default PageTitle;
