'use client';

import React from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';
import { Button, Modal } from 'react-bootstrap';
import Calendly from './Calendly';

export function BookAppointment() {
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
      <Modal show={isOpen} onHide={() => setIsOpen(false)} scrollable fullscreen>
        <Modal.Header closeButton>Book an Appointment</Modal.Header>
        <Modal.Body>
          <Calendly accountId="h34lthbybr33" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookAppointment;
