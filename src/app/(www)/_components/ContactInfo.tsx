'use client';

import React from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';
import { BiEnvelope, BiPhone } from 'react-icons/bi';

import { normalizeTelephone, formatTelephone } from '@/lib/util';
import contactInfo from '@www/_data/contact-info';
// import { useBookAppointment } from '@www/_ctx/BookAppointment';

export function ContactInfo() {
  // const { bookAppointment } = useBookAppointment();

  const email = React.useMemo(() => contactInfo.email, []);
  const rawTelephone = React.useMemo(() => normalizeTelephone(contactInfo.telephone), []);
  const telephone = React.useMemo(() => formatTelephone(contactInfo.telephone), []);

  const handleEmailClick: React.MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement>, // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    sendGAEvent('event', 'linkClicked', { value: email });
  };
  const handleTelephoneClick: React.MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement>, // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => {
    sendGAEvent('event', 'linkClicked', { value: telephone });
  };
  // const handleBookingClick: React.MouseEventHandler = (
  //   e: React.MouseEvent<HTMLAnchorElement>, // eslint-disable-line @typescript-eslint/no-unused-vars
  // ) => {
  //   bookAppointment();
  //   e.preventDefault();
  // };

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
      {/* <Link href="#" onClick={handleBookingClick}>
        <BiCalendarEvent />
        <span>Book Appointment</span>
      </Link> */}
    </div>
  );
}

export default ContactInfo;
