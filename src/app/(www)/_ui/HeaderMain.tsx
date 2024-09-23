'use client';

import React from 'react';
import Link from 'next/link';
import { FaBoltLightning as CTAIcon } from 'react-icons/fa6';

import { useCalendly, useSiteContext } from '.';
import headerImage from '@www/_assets/img/logo/blue-bold.svg';
import Image from 'next/image';

export interface HeaderMainProps extends React.HTMLAttributes<HTMLElement> {}

const HeaderMain: React.FC<HeaderMainProps> = ({ ...props }): JSX.Element => {
  const { bookQuote } = useCalendly();
  const { siteTitle } = useSiteContext();

  const handleCtaClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLElement>, // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    bookQuote();
  };

  return (
    <div
      className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom"
      {...props}>
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          href="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
          title={siteTitle}>
          <Image
            src={headerImage}
            alt={siteTitle}
            className="img-fluid"
            style={{ maxWidth: 180 }}
          />
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link href="/" className="nav-link px-2" title="Homepage">
            Home
          </Link>
        </li>
        <li>
          <Link href="/faq" className="nav-link px-2" title="Frequently Asked Questions">
            FAQs
          </Link>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCtaClick}
          title="Request a Quote">
          <CTAIcon className="mx-1" /> Get Quote
        </button>
      </div>
    </div>
  );
};

export default HeaderMain;
