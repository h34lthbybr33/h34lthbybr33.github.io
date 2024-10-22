'use server';

import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { range } from '@www/_lib/util';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage?: number;
  totalPages: number;
  pageLinkBuilder: (page: number) => string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pageLinkBuilder,
  ...props
}) => {
  return (
    <div className="container text-center">
      <div className="row gy-4 gx-5">
        <div className="col-lg-12 position-relative align-self-center">
          <ul className="pagination pagination-lg justify-content-center">
            {[
              range(totalPages, 1).map((page, key) => {
                return (
                  <li
                    key={key}
                    className={classNames('page-item', page === currentPage && 'active')}>
                    <Link href={pageLinkBuilder(page)} className="page-link">
                      {page}
                    </Link>
                  </li>
                );
              }),
            ]}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
