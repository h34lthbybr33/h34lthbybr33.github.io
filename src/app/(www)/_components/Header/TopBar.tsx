'use client';

import TopBarContactInfo from '@www/_components/ContactInfo';
import TopBarSocialLinks from '@www/_components/SocialLinks';

export function TopBar() {
  return (
    <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <TopBar.ContactInfo />
        <TopBar.SocialLinks />
      </div>
    </div>
  );
}

TopBar.ContactInfo = TopBarContactInfo;
TopBar.SocialLinks = TopBarSocialLinks;

export default TopBar;
