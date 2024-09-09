'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiClipboard, BiChevronRight, BiWallet } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';

import heroBg from '@www/_assets/img/hero-bg.png';
import HeroTitle from '@www/_components/HeroTitle';
import HeroTile from '@www/_components/HeroTile';

type Props = {
  id?: string;
  background?: 'light' | 'dark';
};

export function Hero({ id, background }: Props) {
  return (
    <section
      id={id || 'hero'}
      className={`hero section ${background || 'light'}-background`}>
      <Image src={heroBg} alt="" />
      <div className="container position-relative">
        <HeroTitle
          title="I'm Bree Thomas"
          subtitle="Let me find you affordable health insurance."
        />
        <div className="content row gy-4">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
              <h3>Who am I?</h3>
              <p>
                I'm a licensed health insurance agent in Florida, Texas and Michigan here
                to make choosing a plan that's affordable and meets your needs.
              </p>
              <div className="text-center">
                <Link href="/#about" className="more-btn">
                  <span>Learn More</span>
                  <BiChevronRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-center">
              <div className="row gy-4">
                <HeroTile icon={<BiClipboard />} title="Plans are confusing">
                  <p>
                    Give me an opportunity to go over what's available, and find a plan
                    that meets
                    {` `}
                    <strong>your needs</strong>.
                  </p>
                </HeroTile>
                <HeroTile icon={<BiWallet />} title="Sounds expensive">
                  <p>
                    Not every plan has to cost you an arm and a leg. Let's find a plan
                    that meets
                    {` `}
                    <strong>your budget</strong>.
                  </p>
                </HeroTile>
                <HeroTile icon={<BsClock />} title="Time is money">
                  <p>
                    Finding a plan shouldn't take all day. Let me do the research so you
                    can get back to
                    {` `}
                    <strong>your day</strong>.
                  </p>
                </HeroTile>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
