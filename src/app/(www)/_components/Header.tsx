'use client';

import Branding from '@www/_components/Branding';
import TopBar from '@www/_components/TopBar';

export function Header() {
  return (
    <header id="header" className="header sticky-top">
      <TopBar />
      <Branding />
    </header>
  );
}

export default Header;
