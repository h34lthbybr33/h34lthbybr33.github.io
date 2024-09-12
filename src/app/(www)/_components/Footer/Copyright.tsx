'use client';

import Link from 'next/link';

import siteInfo from '@www/_data/site-info';

export function Copyright() {
  return (
    <div className="container copyright text-center mt-4">
      <p>
        &copy; <span>Copyright</span> {siteInfo.title}. All rights reserved.
      </p>
      <div className="credits">
        Designed by <Link href="https://bootstrapmade.com/">BootstrapMade</Link>
      </div>
    </div>
  );
}

export default Copyright;
