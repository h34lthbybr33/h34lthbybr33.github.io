'use client';

import React from 'react';

import HeaderTopBar from './HeaderTopBar';
import HeaderMain from './HeaderMain';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<HeaderProps> = ({ className, ...props }): JSX.Element => {
  return (
    <header className={`header sticky-top ${className && className}`} {...props}>
      <HeaderTopBar />
      <HeaderMain />
    </header>
  );
};

export default Header;
