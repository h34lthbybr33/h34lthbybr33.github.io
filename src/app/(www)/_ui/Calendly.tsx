'use client';

import React from 'react';
import { sendGAEvent } from '@next/third-parties/google';

export const CalendlyApplication = 'application';
export const CalendlyQuote = 'quote';
export const CalendlyPartnership = 'referral-partnerships';
export const CalendlyReferAFriend = 'refer-a-friend';
export const CalendlyReviewPolicy = 'policy-review';
export const CalendlyGroupPlan = 'employee-group-plans';

export type CalendlyAction =
  | typeof CalendlyApplication
  | typeof CalendlyGroupPlan
  | typeof CalendlyQuote
  | typeof CalendlyPartnership
  | typeof CalendlyReferAFriend
  | typeof CalendlyReviewPolicy
  | null;

export interface CalendlyProps {
  accountId: string;
  action?: CalendlyAction;
  onLoad?: React.ReactEventHandler<HTMLIFrameElement>;
}

const Calendly: React.FC<CalendlyProps> = ({
  accountId,
  action,
  onLoad,
}: CalendlyProps) => {
  const calendlyUrl = React.useMemo(() => {
    const url = [
      'https://calendly.com/',
      accountId,
      action && `/${encodeURIComponent(action)}`,
    ].join('');
    const params = [
      'embed_type=Inline',
      'hide_gdpr_banner=1',
      'hide_landing_page_details=1',
      'embed_domain=1',
    ];
    return [url, '?', params.join('&')].join('');
  }, [accountId, action]);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMessage = (e: MessageEvent<any>) => {
      /*
      e.data = ...
        { event: "calendly.page_height", payload: { height: "__px" } }
        { event: "calendly.profile_page_viewed" }
        { event: "calendly.event_type_viewed" }
        { event: "calendly.date_and_time_selected" }
        {
          event: "calendly.event_scheduled"
          payload: {
            event: {
              uri: "https://api.calendly.com/scheduled_events/{guid}}"
            },
            invitee: {
              uri: "https://api.calendly.com/scheduled_events/{guid}/invitees/{guid}"
            }
          }
        }
      */
      if (
        e.origin === 'https://calendly.com' &&
        e.data?.event?.indexOf('calendly.') === 0
      ) {
        sendGAEvent('event', e.data.event, e.data.payload);
      }
    };

    if (window) {
      window.addEventListener('message', handleMessage);
      return () => window.removeEventListener('message', handleMessage);
    }
  }, []);

  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      src={calendlyUrl}
      onLoad={onLoad}
    />
  );
};

Calendly.displayName = 'Calendly';

export default Calendly;
