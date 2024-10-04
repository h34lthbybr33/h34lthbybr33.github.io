import { Metadata } from 'next';
import Link from 'next/link';
import { FaMoneyBill } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { BiSolidCustomize } from 'react-icons/bi';
import { IoIosMegaphone } from 'react-icons/io';
import { getAbout, getTestimonials } from '@www/_data/outstatic';

import { About, CallToAction, Hero, IconCard, IconCardList, Markdown } from '@www/_ui/';
import heroImage from '@www/_assets/img/hero/beach-sunset.jpg';
import Testimonials from './_ui/Testimonials';

export const metadata: Metadata = {};

export default async function HomePage() {
  const abouts = await getAbout();
  const testimonials = await getTestimonials();

  return (
    <>
      <Hero image={heroImage} />
      {abouts.map((about, key) => (
        <About
          image={about.coverImage!}
          background={about.darkBackground ? 'light' : undefined}
          imageAlignment={!!about.imageOnRight ? 'right' : 'left'}
          key={key}>
          <h3>{about.title}</h3>
          <Markdown content={about.content} />
        </About>
      ))}
      <IconCardList>
        <IconCard icon={<FaMoneyBill />} title="Affordable Options">
          <p>
            By partnering with insurers on the public and private market, I'm able to help
            you secure the best rates possible before annual increases and look into ways
            you can qualify to save on health coverage.
          </p>
        </IconCard>
        <IconCard icon={<BiSolidCustomize />} title="Personalized Plans">
          <p>
            Let's customize your health plan to match your lifestyle, needs, and budget.
          </p>
        </IconCard>
        <IconCard icon={<FaMagnifyingGlass />} title="Transparency">
          <p>
            The power of your plan is in your hands. It's my job to break down all your
            options and make sure that there are no surprises!
          </p>
        </IconCard>
        <IconCard icon={<IoIosMegaphone />} title="Advocacy">
          <p>
            As your agent for life, I'm also your advocate. Don't worry about going back
            and forth with insurance companies. I'm here to be your intermediary.
          </p>
        </IconCard>
      </IconCardList>
      <CallToAction background="light">
        <h3>Referrals</h3>
        <p>
          Do you know anyone in need of health insurance coverage? I would be thrilled to
          provide them with the same support and guidance.
        </p>
        <p>
          If I can successfully enroll your referral in a plan, you'll receive $100 from
          me as a token of appreciation!
        </p>
        <Link
          href={`https://xpl0ydmsdxh.typeform.com/to/Gki8gO9x?typeform-source=${process.env.NEXT_PUBLIC_BASE_URL}`}
          target="_blank"
          className="btn btn-primary">
          Refer a friend
        </Link>
      </CallToAction>
      {testimonials && testimonials.length && (
        <Testimonials
          testimonials={testimonials.map((t) => ({
            name: t.author?.name || 'Anonymous',
            image: t.author?.picture || '',
            content: t.content,
          }))}
        />
      )}
      {/* <Tabs title="Services" subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit">
        <Tab id="affordable-options" title="Affordable Options" image={tabAffordableImage}>
          <p>
            By partnering with insurers on the public and private market, I'm able
            to help you secure the best rates possible before annual increases and
            look into ways you can qualify to save on health coverage
          </p>
        </Tab>
        <Tab id="personalized-plans" title="Personalized Plans" image={tabPuzzleImage}>
          <p>
            Let's customize your health plan to match your lifestyle, needs, and budget.
          </p>
        </Tab>
        <Tab id="transparency" title="Transparency" image={tabTransparentImage}>
          <p>
            The power of your plan is in your hands. It's my job to break down all your
            options and make sure that there are no surprises!
          </p>
        </Tab>
        <Tab id="advocacy" title="Advocacy" image={tabAdvocateImage}>
          <p>
            As your agent for life, I'm also your advocate. Don't worry about going back
            and forth with insurance companies. I'm here to be your intermediary.
          </p>
        </Tab>
      </Tabs> */}
    </>
  );
}
