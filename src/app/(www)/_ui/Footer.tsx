'use client';

import React from 'react';

import { FooterBottomBar, FooterMain } from '.';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <footer className="footer" {...props}>
      <FooterMain />
      <FooterBottomBar />
    </footer>
  );
};

export default Footer;
