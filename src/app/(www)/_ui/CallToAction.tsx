'use client';

import React from 'react';
import classNames from 'classnames';

import { Section, SectionBackground } from '.';

export interface CallToActionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  background?: SectionBackground;
  children?: React.ReactNode;
}

const CallToAction: React.FC<CallToActionProps> = ({
  id,
  background,
  className,
  children,
  ...props
}) => {
  return (
    <Section
      id={id}
      background={background}
      name="call-to-action"
      className={classNames('text-center', className)}
      {...props}>
      <div className="container">
        <div className="gy-4">{children}</div>
      </div>
    </Section>
  );
};

CallToAction.displayName = 'CallToAction';

export default CallToAction;
