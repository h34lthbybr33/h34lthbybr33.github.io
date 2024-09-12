'use client';

import Link from 'next/link';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiShare } from 'react-icons/bi';

import {
  FacebookAccount,
  InstagramAccount,
  LinkedInAccount,
  SocialMediaAccount,
} from '@www/_data/social-links';
import { sendGAEvent } from '@next/third-parties/google';

export function SocialIcon(link: SocialMediaAccount) {
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

  const handleClick: React.MouseEventHandler = (
    e: React.MouseEvent, // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    sendGAEvent('event', 'linkClicked', { value: `${link.type}/${link.type}` });
  };

  return (
    <Link
      href={link.url}
      className={link.type.toLowerCase()}
      target="_blank"
      onClick={handleClick}>
      {resolveLogo(link)}
    </Link>
  );
}

export default SocialIcon;
