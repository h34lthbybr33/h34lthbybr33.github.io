'use client';

import React from 'react';
import Link from 'next/link';
import { PopupModal } from 'react-calendly';
import { sendGAEvent } from '@next/third-parties/google';

export function BookAppointment() {
  const rootElement = React.createRef();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleBooking: React.MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    sendGAEvent({
      event: 'click',
      value: 'book-appointment',
    });
    setIsOpen(true);
    e.preventDefault();
  };

  return (
    <>
      <Link href="#" className="cta-btn d-none d-sm-block" onClick={handleBooking}>
        Book an Appointment
      </Link>
      <div id="calendly-modal"></div>
      <PopupModal
        url={process.env.NEXT_PUBLIC_CALENDLY_URL || ''}
        rootElement={document.body}
        open={isOpen}
        onModalClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default BookAppointment;
