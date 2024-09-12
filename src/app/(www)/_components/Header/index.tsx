'use client';

import HeaderBranding from './Branding';
import HeaderTopBar from './TopBar';

export function Header() {
  return (
    <header id="header" className="header sticky-top">
      <Header.TopBar />
      <Header.Branding />
    </header>
  );
}

Header.Branding = HeaderBranding;
Header.TopBar = HeaderTopBar;

export default Header;
