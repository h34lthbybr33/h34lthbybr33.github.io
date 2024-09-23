'use client';

import React from 'react';
import Link from 'next/link';

import { useSiteContext } from '.';

export interface FooterBottomBarProps extends React.HTMLAttributes<HTMLElement> {
  //children?: React.ReactNode;
}

const FooterBottomBar: React.FC<FooterBottomBarProps> = ({ className, ...props }) => {
  const { siteTitle } = useSiteContext();

  return (
    <div
      className={`container copyright text-center mt-4 ${className && className}`}
      {...props}>
      <p>
        &copy;
        {` `}
        <span>Copyright</span>
        {` `}
        <strong className="px-1 sitename">{siteTitle}</strong>
        <span>All rights reserved.</span>
      </p>
      <div className="credits">
        Designed by
        {` `}
        <Link href="https://bootstrapmade.com" target="_blank">
          BootstrapMade
        </Link>
      </div>
    </div>
  );
};

FooterBottomBar.displayName = 'FooterBottomBar';

export default FooterBottomBar;
