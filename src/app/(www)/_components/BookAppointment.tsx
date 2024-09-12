'use client';

import React from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';
import { useBookAppointment } from '../_ctx/BookAppointment';

export function BookAppointment() {
  const { bookAppointment } = useBookAppointment();

  const handleBooking: React.MouseEventHandler = (e: React.MouseEvent) => {
    sendGAEvent({
      event: 'click',
      value: 'book-appointment',
    });
    bookAppointment();
    e.preventDefault();
  };

  return (
    <Link href="#" className="cta-btn" onClick={handleBooking}>
      Book an Appointment
    </Link>
  );
}

export default BookAppointment;
