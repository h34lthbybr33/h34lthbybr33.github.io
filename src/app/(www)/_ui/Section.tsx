'use client';

import React from 'react';
import classNames from 'classnames';

export type SectionBackground = 'light' | 'dark';
export type SectionName =
  | 'about'
  | 'appointment'
  | 'contact'
  | 'departments'
  | 'doctors'
  | 'faq'
  | 'gallery'
  | 'hero'
  | 'services'
  | 'stats'
  | 'testimonials'
  | string;

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  name: SectionName;
  id?: string;
  background?: SectionBackground;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  name,
  background,
  children,
  className,
  ...props
}): JSX.Element => {
  const sectionClassName: string = React.useMemo(() => {
    return classNames(
      name,
      'section',
      background && `${background}-background`,
      ...(className?.split(' ') || []),
    );
  }, [name, background, className]);

  return (
    <section id={id} className={sectionClassName} {...props}>
      {children}
    </section>
  );
};

export default Section;
