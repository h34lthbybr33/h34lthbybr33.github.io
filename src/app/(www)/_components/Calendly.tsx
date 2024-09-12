'use client';

import React from 'react';

type Props = {
  accountId: string;
  action?: string;
};

export function Calendly({ accountId, action }: Props) {
  const calendlyUrl = React.useMemo(() => {
    const url = `https://calendly.com/${accountId}${action && `/${encodeURIComponent(action)}`}`;
    const params = [
      'embed_type=Inline',
      'hide_gdpr_banner=1',
      'hide_landing_page_details=1',
    ];
    console.log(`URL: ${[url, '?', params.join('&')].join('')}`);
    return [url, '?', params.join('&')].join('');
  }, [accountId, action]);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMessage = (e: MessageEvent<any>) => {
      console.log(`Window message: ${JSON.stringify(e)}`);
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
