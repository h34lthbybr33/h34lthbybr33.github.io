'use client';

import React from 'react';
import { sendGAEvent } from '@next/third-parties/google';

import Calendly from '../_components/Calendly';
import { Button, Modal } from 'react-bootstrap';

export const ACTION_QUOTE = '30min' as const; // What are my options? (Quote)
export const ACTION_APPLICATION = 'what-are-my-options-quote-clone'; // Application
export const ACTION_REFERRAL_PARTNERSHIP = 'what-are-my-options-quote-clone-1'; // Referrel partnerships
export const ACTION_REVIEW_POLICY = 'review-current-policy'; // Review current policy

type AppointmentAction =
  | typeof ACTION_QUOTE
  | typeof ACTION_APPLICATION
  | typeof ACTION_REFERRAL_PARTNERSHIP
  | typeof ACTION_REVIEW_POLICY;

type BookAppointmentContext = {
  bookAppointment: (action?: AppointmentAction) => void;
};

export const BookAppointmentContext = React.createContext<BookAppointmentContext>({
  bookAppointment: (e) => {}, // eslint-disable-line @typescript-eslint/no-unused-vars
});

export const useBookAppointment = () => {
  const context = React.useContext(BookAppointmentContext);
  if (typeof context === 'undefined') {
    throw new Error('BookAppointmentContext not found on page.');
  }
  return context;
};

type Props = {
  children: React.ReactNode;
};

export function BookAppointmentProvider({ children }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [action, setAction] = React.useState<string | undefined>(undefined);

  const bookAppointment = (action?: string) => {
    console.log('book appt', action);
    setAction(typeof action === 'string' ? action : undefined);
    sendGAEvent('event', 'bookAppointment', { value: action });
    setIsOpen(true);
  };
  const handleHide = () => {
    setAction(undefined);
    setIsOpen(false);
  };

  return (
    <BookAppointmentContext.Provider value={{ bookAppointment }}>
      {children}
      <Modal show={isOpen} onHide={handleHide} scrollable fullscreen>
        <Modal.Header closeButton>Book an Appointment</Modal.Header>
        <Modal.Body>
          <Calendly
            accountId={process.env.NEXT_PUBLIC_CALENDLY_ACCOUNTID!}
            action={action}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </BookAppointmentContext.Provider>
  );
}

export default BookAppointmentProvider;
