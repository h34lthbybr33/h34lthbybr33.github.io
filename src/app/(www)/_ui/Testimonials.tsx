'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
//import { BiStar, BiSolidStar } from 'react-icons/bi';

import { Markdown, Section, SectionBackground } from '.';
import 'swiper/css/bundle';

export interface TestimonialsProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  background?: SectionBackground;
  testimonials: {
    name: string;
    title?: string;
    image: StaticImageData | string;
    content: string;
  }[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Testimonials: React.FC<TestimonialsProps> = ({
  id,
  background,
  testimonials,
  ...props
}) => {
  const swiperRef = React.createRef<HTMLDivElement>();

  return (
    <Section name="testimonials" id={id} background={background} {...props}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 info">
            <h3>Testimonials</h3>
            <p>
              Unsolicited reviews directly from clients on how I've managed to get them
              the outcome they were expecting.
            </p>
          </div>
          <div className="col-md-8">
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
              autoplay={{ delay: 5_000 }}
              speed={1_500}
              loop>
              {testimonials.map((review, key) => (
                <SwiperSlide key={key}>
                  <div className="testimonial-item">
                    <div>
                      {typeof review.image === 'string' ? (
                        <Image
                          src={review.image}
                          className="testimonial-img flex-shrink-0"
                          alt={review.name}
                          width={100}
                          height={100}
                        />
                      ) : (
                        <Image
                          src={review.image}
                          className="testimonial-img flex-shrink-0"
                          alt={review.name}
                        />
                      )}
                      <div>
                        <h3>{review.name}</h3>
                        {review.title && <h4>{review.title}</h4>}
                        {/* <div className="stars">
                          <BiSolidStar />
                          <BiSolidStar />
                          <BiSolidStar />
                          <BiSolidStar />
                          <BiStar />
                        </div> */}
                      </div>
                      <Markdown
                        content={review.content}
                        className="testimonial-content"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination" ref={swiperRef}></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

Testimonials.displayName = 'Testimonials';

export default Testimonials;
