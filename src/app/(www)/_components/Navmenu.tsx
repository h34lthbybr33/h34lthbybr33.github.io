'use client';

import Link from 'next/link';

export function Navmenu() {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <Link href="/#home" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navmenu;
