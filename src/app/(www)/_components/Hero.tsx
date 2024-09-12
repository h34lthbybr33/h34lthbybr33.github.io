'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiChevronRight, BiCalendar } from 'react-icons/bi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { BsClock } from 'react-icons/bs';

import heroBg from '@www/_assets/img/hero-bg.png';
import HeroTitle from '@www/_components/HeroTitle';
import HeroTile from '@www/_components/HeroTile';
import { useBookAppointment } from '@www/_ctx/BookAppointment';

type Props = {
  id?: string;
  background?: 'light' | 'dark';
};

export function Hero({ id, background }: Props) {
  const { bookAppointment } = useBookAppointment();

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
                I am a licensed health insurance agent in Florida, Texas and Michigan here
                to make choosing a plan that is affordable and meets your needs.
              </p>
              <div className="text-center">
                <Link href="#" className="more-btn" onClick={() => bookAppointment()}>
                  <span>Book Appointment</span>
                  <BiChevronRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-center">
              <div className="row gy-4">
                <HeroTile icon={<BiCalendar />} title="Efficient">
                  <p>
                    Pick a time and date that works for you to explain your current
                    situation and see what's available.
                  </p>
                </HeroTile>
                <HeroTile icon={<BsClock />} title="Review">
                  <p>
                    In as little as 30 minutes, we can review options, and make sure
                    everything meets your needs and expectations.
                  </p>
                </HeroTile>
                <HeroTile icon={<MdOutlineHealthAndSafety />} title="Security">
                  <p>
                    Feel confident you have plan that satisfies your requirements (and
                    doesn't cost you an arm and a leg).
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
