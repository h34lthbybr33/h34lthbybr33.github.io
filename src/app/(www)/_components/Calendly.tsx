'use client';

import React from 'react';

type Props = {
  accountId: string;
};

export function Calendly({ accountId }: Props) {
  const calendlyUrl = React.useMemo(() => {
    return `https://calendly.com/${accountId}?embed_type=Inline&hide_gdpr_banner=1&hide_landing_page_details=1`;
  }, [accountId]);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMessage = (e: MessageEvent<any>) => {
      console.log(`Window message: ${JSON.stringify(e)}`);
      if (
        e.origin === 'https://calendly.com' &&
        e.data?.event?.indexOf('calendly.') === 0
      ) {
        console.log(`Calendly: ${JSON.stringify(e.data)}`);
      }
    };

    if (window) {
      console.log(`Subscribing to message events`);
      window.addEventListener('message', handleMessage);
      return () => window.removeEventListener('message', handleMessage);
    } else {
      console.log(`Window not present`);
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
