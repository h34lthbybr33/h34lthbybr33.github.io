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
          <Link href="/#faq">Questions?</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navmenu;
