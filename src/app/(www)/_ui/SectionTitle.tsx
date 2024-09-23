'use client';

import React from 'react';

export interface SectionTitleProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <div className={`container section-title ${className || ''}`} {...props}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;
