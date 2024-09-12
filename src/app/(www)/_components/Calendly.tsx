'use client';

import React from 'react';

type Props = {
  accountId: string;
  action?: string;
};

export function Calendly({ accountId, action }: Props) {
  const calendlyUrl = React.useMemo(() => {
    console.log(`action: ${action}`);
    const url = `https://calendly.com/${accountId}${typeof action === 'string' ? `/${encodeURIComponent(action)}` : ''}`;
    const params = [
      'embed_type=Inline',
      'hide_gdpr_banner=1',
      'hide_landing_page_details=1',
      'embed_domain=1',
    ];
    console.log(`URL: ${[url, '?', params.join('&')].join('')}`);
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
        console.log(`event.data`, e.data);
      }
    };

    if (window) {
      window.addEventListener('message', handleMessage);
      return () => window.removeEventListener('message', handleMessage);
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    // noop
  };

  return (
    <iframe
      width="100%"
      height="100%"
      frameBorder={0}
      src={calendlyUrl}
      onLoad={handleOnLoad}
    />
  );
}

export default Calendly;
