'use client';

import React from 'react';

import { Section, SectionTitle } from '.';

export interface IconCardListProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const IconCardList: React.FC<IconCardListProps> = ({
  id,
  title,
  subtitle,
  className,
  children,
  ...props
}) => {
  return (
    <Section id={id} name="services" className={className} {...props}>
      {title && (
        <SectionTitle title={title}>{subtitle && <p>{subtitle}</p>}</SectionTitle>
      )}
      <div className="container">
        <div className="row gy-4">{children}</div>
      </div>
    </Section>
  );
};

IconCardList.displayName = 'IconCardList';

export default IconCardList;
