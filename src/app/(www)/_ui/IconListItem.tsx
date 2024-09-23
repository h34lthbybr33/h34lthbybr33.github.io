'use client';

import React from 'react';

export interface IconListItemProps /*extends React.HTMLAttributes<HTMLElement>*/ {
  icon: JSX.Element;
  title: string;
  children?: React.ReactNode;
}

const IconListItem: React.FC<IconListItemProps> = ({ icon, title, children }) => {
  return (
    <li>
      {icon}
      <div>
        <h5>{title}</h5>
        {children}
      </div>
    </li>
  );
};

IconListItem.displayName = 'IconListItem';

export default IconListItem;
