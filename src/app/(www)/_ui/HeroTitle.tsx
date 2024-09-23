'use client';

import React from 'react';

export interface HeroTitleProps extends React.HTMLAttributes<HTMLElement> {}

const HeroTitle: React.FC<HeroTitleProps> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div className={`title position-relative ${className}`} {...props}>
      {children}
    </div>
  );
};

HeroTitle.displayName = 'HeroTitle';

export default HeroTitle;
