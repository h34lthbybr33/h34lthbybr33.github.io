'use client';

import React from 'react';
import Link from 'next/link';
import { BsList, BsX } from 'react-icons/bs';

export function NavMenu() {
  const [showMenu, setShowMenu] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleShowMenu: React.MouseEventHandler = (e: React.MouseEvent) => {
    setShowMenu((prev) => !prev);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLinkClick: React.MouseEventHandler = (e: React.MouseEvent) => {
    setShowMenu(false);
  };

  React.useEffect(() => {
    if (document) {
      if (showMenu) {
        document.body.classList.add('mobile-nav-active');
      } else {
        document.body.classList.remove('mobile-nav-active');
      }
    }
  }, [showMenu]);

  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <Link href="/#home" className="active" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/#faq" onClick={handleLinkClick}>
            Questions?
          </Link>
        </li>
      </ul>
      {showMenu ? (
        <BsX className="mobile-nav-toggle d-xl-none" onClick={handleShowMenu} />
      ) : (
        <BsList className="mobile-nav-toggle d-xl-none" onClick={handleShowMenu} />
      )}
    </nav>
  );
}

export default NavMenu;
