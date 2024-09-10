'use client';

import Link from 'next/link';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiShare } from 'react-icons/bi';

import socialLinks, {
  FacebookAccount,
  InstagramAccount,
  LinkedInAccount,
  type SocialMediaAccount,
} from '@/app/(www)/_data/social-links';

export function SocialLinks() {
  const resolveLogo = (account: SocialMediaAccount) => {
    const isFacebook = (acct: SocialMediaAccount): acct is FacebookAccount =>
      acct.type === 'Facebook';
    const isInstagram = (acct: SocialMediaAccount): acct is InstagramAccount =>
      acct.type === 'Instagram';
    const isLinkedIn = (acct: SocialMediaAccount): acct is LinkedInAccount =>
      acct.type == 'LinkedIn';

    if (isFacebook(account)) {
      return <BiLogoFacebook />;
    } else if (isInstagram(account)) {
      return <BiLogoInstagram />;
    } else if (isLinkedIn(account)) {
      return <BiLogoLinkedin />;
    }
    return <BiShare />;
  };

  return (
    <div className="social-links d-none d-md-flex align-items-center">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className={link.type.toLowerCase()}
          target="_blank">
          {resolveLogo(link)}
        </Link>
      ))}
    </div>
  );
}

export default SocialLinks;
