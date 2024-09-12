'use client';

import Link from 'next/link';

import siteInfo from '@www/_data/site-info';
import NavMenu from '@www/_components/Header/NavMenu';
import BookAppointment from '@www/_components/BookAppointment';

export function Branding() {
  return (
    <div className="branding d-flex align-items-center">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">{siteInfo.title}</h1>
        </Link>
        <Branding.NavMenu />
        <BookAppointment />
      </div>
    </div>
  );
}

Branding.NavMenu = NavMenu;

export default Branding;
