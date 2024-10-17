'use client';

import React from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';

import { formatTelephone, normalizeTelephone } from '@/lib/util';
import { SocialIcon, useSiteContext } from '.';
import { BiEnvelope, BiPhone, BiMessageDetail } from 'react-icons/bi';

export interface HeaderTopBarProps extends React.HTMLAttributes<HTMLElement> {}

const HeaderTopBar: React.FC<HeaderTopBarProps> = ({ className, ...props }) => {
  const { contactEmail, contactTelephone, textingTelephone, socialMedias } =
    useSiteContext();

  const telephone = React.useMemo(
    () => normalizeTelephone(contactTelephone),
    [contactTelephone],
  );
  const formattedTelephone = React.useMemo(
    () => formatTelephone(contactTelephone),
    [contactTelephone],
  );
  // const formattedTexting = React.useMemo(
  //   () => formatTelephone(textingTelephone),
  //   [textingTelephone],
  // );

  const handleEmailClick: React.MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement>, // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    sendGAEvent('event', 'emailClicked', { value: 'HeaderTopBar' });
  };
  const handleTelephoneClick: React.MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement>, // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    sendGAEvent('event', 'telephoneClicked', { value: 'HeaderTopBar' });
  };
  const handleTextingClick: React.MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement>, // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    sendGAEvent('event', 'textingClicked', { value: 'HeaderTopBar' });
  };

  const defaultSubject = 'Looking for Health Insurance Options';

  return (
    <div
      className={`topbar d-flex align-items-center ${className && className}`}
      {...props}>
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <Link
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(defaultSubject)}`}
            onClick={handleEmailClick}
            className="flex-sm-fill">
            <BiEnvelope />
            <span>{contactEmail}</span>
          </Link>
          <Link
            href={`tel:${telephone}`}
            onClick={handleTelephoneClick}
            className="flex-sm-fill">
            <BiPhone />
            <span>{formattedTelephone}</span>
          </Link>
          <Link
            href={`sms:${textingTelephone}?body=${encodeURIComponent(defaultSubject)}`}
            onClick={handleTextingClick}
            className="flex-sm-fill">
            <BiMessageDetail />
            <span>Text Me</span>
          </Link>
        </div>
        <div className="social-links d-none d-md-flex">
          {socialMedias.map((account, key) => (
            <SocialIcon key={key} account={account} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
