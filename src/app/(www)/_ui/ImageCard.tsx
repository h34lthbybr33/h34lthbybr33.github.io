'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { Section, SectionBackground } from '.';

interface AboutProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  background?: SectionBackground;
  image: StaticImageData | string;
  imageAlignment?: 'left' | 'right';
  children?: React.ReactNode;
}

const About: React.FC<AboutProps> = ({
  id,
  background,
  image,
  imageAlignment,
  children,
  ...props
}) => {
  const AboutImage = () => (
    <div className="col-lg-6 position-relative align-self-start">
      {typeof image === 'string' ? (
        <Image
          src={image}
          width={1024}
          height={1024}
          style={{ width: '100%', height: 'auto' }}
          alt="about image"
          className="img-fluid"
        />
      ) : (
        <Image src={image} alt="about image" className="img-fluid" />
      )}
    </div>
  );

  return (
    <Section id={id} name="about" background={background} {...props}>
      <div className="container">
        <div className="row gy-4 gx-5">
          {imageAlignment === 'left' && <AboutImage />}
          <div className="col-lg-6 content">{children}</div>
          {(!imageAlignment || imageAlignment === 'right') && <AboutImage />}
        </div>
      </div>
    </Section>
  );
};

About.displayName = 'About';

export default About;
