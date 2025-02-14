'use client';

import React from 'react';
import Link from 'next/link';
import { FaBoltLightning as CTAIcon } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { useCalendly, useSiteContext } from '.';
import headerImage from '@www/_assets/img/logo/blue-bold.svg';
import headerLinks from '@www/_data/header-links';

export interface HeaderMainProps extends React.HTMLAttributes<HTMLElement> {}

const HeaderMain: React.FC<HeaderMainProps> = ({ ...props }): JSX.Element => {
  const pathname = usePathname();
  const { bookQuote } = useCalendly();
  const { siteTitle } = useSiteContext();

  const isActive = (href: string) =>
    pathname === href || (href.length > 1 && pathname.startsWith(href));
  const handleCtaClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLElement>, // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    bookQuote();
  };

  return (
    <div
      className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3"
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
        {headerLinks.map((link, key) => (
          <li key={key}>
            <Link
              href={link.url}
              className={`nav-link px-2 ${isActive(link.url) ? 'active' : ''}`}
              title={link.title}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <div className="col-md-3 text-end">
        <button
          type="button"
          className="btn btn-primary animate__animated animate__pulse animate__infinite animate__slow"
          onClick={handleCtaClick}
          title="Request a Quote">
          <CTAIcon className="mx-1" /> Get Quote
        </button>
      </div>
    </div>
  );
};

export default HeaderMain;
