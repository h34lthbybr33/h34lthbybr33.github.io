'use client';

import ContactInfo from '@www/_components/ContactInfo';
import SocialLinks from '@www/_components/SocialLinks';

export function TopBar() {
  return (
    <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <ContactInfo />
        <SocialLinks />
      </div>
    </div>
  );
}

export default TopBar;
