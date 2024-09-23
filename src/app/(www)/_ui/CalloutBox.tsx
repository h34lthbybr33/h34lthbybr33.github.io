'use client';

import React from 'react';

export interface CalloutBoxProps extends React.HTMLAttributes<HTMLElement> {}

const CalloutBox: React.FC<CalloutBoxProps> = ({ children, ...props }): JSX.Element => {
  return (
    <div {...props} className="callout">
      {children}
    </div>
  );
};

CalloutBox.displayName = 'CalloutBox';

export default CalloutBox;
