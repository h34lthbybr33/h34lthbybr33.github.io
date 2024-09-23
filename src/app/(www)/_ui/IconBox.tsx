'use client';

import React from 'react';

export interface IconBoxProps extends React.HTMLAttributes<HTMLElement> {
  icon: React.ReactNode;
  title: string;
}

const IconBox: React.FC<IconBoxProps> = ({ icon, title, children, ...props }) => {
  return (
    <div {...props} className="icon-box">
      {icon}
      <h4>{title}</h4>
      {children}
    </div>
  );
};

IconBox.displayName = 'IconBox';

export default IconBox;
