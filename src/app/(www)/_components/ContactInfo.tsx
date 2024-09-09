'use client';

import React from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';
import { BiEnvelope, BiPhone } from 'react-icons/bi';

import { normalizeTelephone, formatTelephone } from '@/lib/util';
import contactInfo from '@www/_data/contact-info';

export function ContactInfo() {
  const email = React.useMemo(() => contactInfo.email, [contactInfo.email]);
  const rawTelephone = React.useMemo(
    () => normalizeTelephone(contactInfo.telephone),
    [contactInfo.telephone],
  );
  const telephone = React.useMemo(
    () => formatTelephone(contactInfo.telephone),
    [contactInfo.telephone],
  );

  const handleEmailClick: React.MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    sendGAEvent({
      event: 'click',
      value: email,
    });
  };
  const handleTelephoneClick: React.MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    sendGAEvent({
      event: 'click',
      value: telephone,
    });
  };

  return (
    <div className="contact-info d-flex align-items-center">
      <Link href={`mailto:${email}`} onClick={handleEmailClick}>
        <BiEnvelope />
        <span>{email}</span>
      </Link>
      <Link href={`tel:${rawTelephone}`} onClick={handleTelephoneClick}>
        <BiPhone />
        <span>{telephone}</span>
      </Link>
    </div>
  );
}

export default ContactInfo;
