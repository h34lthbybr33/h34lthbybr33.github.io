'use client';

import React from 'react';

export interface IconListProps /*extends React.HTMLAttributes<HTMLElement>*/ {
  children?: React.ReactNode;
}

const IconList: React.FC<IconListProps> = ({ children, ...props }) => {
  return <ul {...props}>{children}</ul>;
};

IconList.displayName = 'IconList';

export default IconList;
