'use client';

import { StaticImageData } from 'next/image';
import React from 'react';

export interface TabProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title: string;
  image: StaticImageData;
  children?: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};

Tab.displayName = 'Tab';

export default Tab;
