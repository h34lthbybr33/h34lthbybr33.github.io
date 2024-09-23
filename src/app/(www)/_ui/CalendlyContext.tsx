'use client';

import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import Calendly, {
  CalendlyAction,
  CalendlyApplication,
  CalendlyGroupPlan,
  CalendlyPartnership,
  CalendlyQuote,
  CalendlyReferAFriend,
  CalendlyReviewPolicy,
} from './Calendly';
import { sendGAEvent } from '@next/third-parties/google';

export interface CalendlyContext {
  bookAppointment: VoidFunction;

  bookApplication: VoidFunction;
  bookGroupPlan: VoidFunction;
  bookQuote: VoidFunction;
  bookPartnership: VoidFunction;
  bookReferAFriend: VoidFunction;
  bookReviewPolicy: VoidFunction;
}

export const CalendlyContext = React.createContext<CalendlyContext | undefined>(
  undefined,
);

CalendlyContext.displayName = 'CalendlyContext';

export interface CalendlyContextProviderProps {
  children?: React.ReactNode;
}

const CalendlyContextProvider: React.FC<CalendlyContextProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [action, setAction] = React.useState<CalendlyAction | null>(null);

  const book = (action?: CalendlyAction) => {
    return () => {
      setAction(action || null);
      sendGAEvent('event', 'bookAppointment', { value: action });
      setIsOpen(true);
    };
  };
  const value: CalendlyContext = {
    bookAppointment: book(),

    bookApplication: book(CalendlyApplication),
    bookGroupPlan: book(CalendlyGroupPlan),
    bookPartnership: book(CalendlyPartnership),
    bookQuote: book(CalendlyQuote),
    bookReferAFriend: book(CalendlyReferAFriend),
    bookReviewPolicy: book(CalendlyReviewPolicy),
  };
  const handleHide: VoidFunction = () => {
    setAction(null);
    setIsOpen(false);
  };

  return (
    <CalendlyContext.Provider value={value}>
      {children}
      <Modal show={isOpen} onHide={handleHide} scrollable fullscreen>
        <Modal.Header closeButton>Book an Appointment</Modal.Header>
        <Modal.Body>
          <Calendly
            accountId={process.env.NEXT_PUBLIC_CALENDLY_ACCOUNTID || ''}
            action={action}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </CalendlyContext.Provider>
  );
};

const useCalendly = (): CalendlyContext => {
  const context = React.useContext(CalendlyContext);
  if (typeof context === 'undefined') {
    throw new Error('CalendlyContext does not exist.');
  }
  return context;
};

export { useCalendly };
export default CalendlyContextProvider;
