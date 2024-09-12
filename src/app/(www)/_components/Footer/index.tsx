'use client';

import FooterCopyright from './Copyright';
import FooterTop from './Top';

type Props = {
  background?: 'light' | 'dark';
};

export function Footer({ background = 'light' }: Props) {
  return (
    <footer id="footer" className={`footer ${background}-background`}>
      <Footer.Top />
      <Footer.Copyright />
    </footer>
  );
}

Footer.Copyright = FooterCopyright;
Footer.Top = FooterTop;

export default Footer;
