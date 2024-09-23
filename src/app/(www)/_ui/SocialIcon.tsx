'use client';

import React from 'react';
import Link from 'next/link';
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoYoutube,
  BiShare,
} from 'react-icons/bi';
import { sendGAEvent } from '@next/third-parties/google';
import {
  SocialMediaAccount,
  isFacebook,
  isInstagram,
  isLinkedIn,
  isTikTok,
  isTwitter,
  isYouTube,
} from '@www/_data/social-links';

interface SocialIconProps {
  account: SocialMediaAccount;
}

const SocialIcon: React.FC<SocialIconProps> = ({ account }) => {
  const icon = React.useMemo<JSX.Element>(() => {
    if (isInstagram(account)) {
      return <BiLogoInstagram />;
    } else if (isFacebook(account)) {
      return <BiLogoFacebook />;
    } else if (isLinkedIn(account)) {
      return <BiLogoLinkedin />;
    } else if (isTikTok(account)) {
      return <BiLogoTiktok />;
    } else if (isTwitter(account)) {
      return <BiLogoTwitter />;
    } else if (isYouTube(account)) {
      return <BiLogoYoutube />;
    }
    return <BiShare />;
  }, [account]);

  const handleClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLElement>, // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    sendGAEvent('event', 'linkClicked', { value: `SocialIcon.${account.type}` });
  };

  return (
    <Link
      href={account.url}
      className={account.type.toLocaleLowerCase()}
      onClick={handleClick}
      target="_blank">
      {icon}
    </Link>
  );
};

SocialIcon.displayName = 'SocialIcon';

export default SocialIcon;
