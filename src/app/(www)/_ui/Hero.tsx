'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import { FaPerson, FaPeopleGroup, FaBriefcase } from 'react-icons/fa6';

import { type SectionBackground, Section, IconBox, CalloutBox, useCalendly } from '.';

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  background?: SectionBackground;
  image: StaticImageData;
}

const Hero: React.FC<HeroProps> = ({ id, image, background, ...props }) => {
  const { bookAppointment } = useCalendly();

  return (
    <Section id={id} name="hero" background={background || 'light'} {...props}>
      <Image src={image} alt="" className="hero-img" />
      <div className="container position-relative">
        {/* <HeroTitle className="d-none d-xl-block d-xxl-block">
          <Image src={heroTitleImage} alt="" style={{maxHeight:100}} className="d-block mx-auto" />
        </HeroTitle> */}

        <div className="content row gy-2">
          <div className="col-lg-4 d-flex align-items-stretch">
            <CalloutBox>
              <h3>Why choose me?</h3>
              <p className="fw-bold">
                I specialize in providing health insurance solutions specifically designed
                for individuals, families and self-employed professionals. My goal is to
                simplify the process and ensure you have access to the best possible
                coverage at an affordable price.
              </p>
              <Link href="#" className="more-btn" onClick={() => bookAppointment()}>
                <span>Book an Appointment</span>
                <BiChevronRight />
              </Link>
            </CalloutBox>
          </div>

          <div className="col-lg-8 d-flex align-items-stretch gy-sm-4">
            <div className="d-flex flex-column justify-content-center">
              <div className="row gy-4">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <IconBox icon={<FaPerson />} title="Individual">
                    <p className="fw-bold">
                      Just looking for yourself? I can help find a plan that's right for
                      you at a price that meets your budgetary requirements.
                    </p>
                  </IconBox>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <IconBox icon={<FaPeopleGroup />} title="Family">
                    <p className="fw-bold">
                      Plans can be confusing, so let&apos;s review the options together
                      and discover a plan that meets your whole family&apos;s needs.
                    </p>
                  </IconBox>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <IconBox icon={<FaBriefcase />} title="Business">
                    <p className="fw-bold">
                      Are you self-employed or have a company with 50 or fewer employees?
                      I can help you navigate the landscape to find a policy.
                    </p>
                  </IconBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
