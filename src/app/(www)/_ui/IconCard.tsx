'use client';

import React from 'react';
import Link from 'next/link';

export interface IconCardProps extends React.HTMLAttributes<HTMLElement> {
  icon: JSX.Element;
  title: string;
  titleHref?: string;
  children?: React.ReactNode;
}

const IconCard: React.FC<IconCardProps> = ({
  icon,
  title,
  titleHref = '#',
  className,
  children,
  ...props
}) => (
  <div className={`col-xl-3 col-lg-6 ${className && className}`} {...props}>
    <div className="service-item position-relative">
      <div className="icon">{icon}</div>
      <Link href={titleHref} className="stretched-link">
        <h3>{title}</h3>
      </Link>
      {children}
    </div>
  </div>
);

IconCard.displayName = 'IconCard';

export default IconCard;
