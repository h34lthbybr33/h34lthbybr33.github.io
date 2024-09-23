import { Metadata } from 'next';
import Link from 'next/link';
import { FaMoneyBill } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { BiSolidCustomize } from 'react-icons/bi';
import { IoIosMegaphone } from 'react-icons/io';

import { About, CallToAction, Hero, IconCard, IconCardList } from '@www/_ui/';
import heroImage from '@www/_assets/img/hero/beach-sunset.jpg';
import aboutImage from '@www/_assets/img/about/standing-by-window.jpg';
import aboutAltImage from '@www/_assets/img/about/health-insurance-tiles.jpg';

export const metadata: Metadata = {};

export default function Home() {
  return (
    <>
      <Hero image={heroImage} />
      <About image={aboutImage}>
        <h3>Nice to meet you&hellip;</h3>
        <p>
          My name is Bree, and I'm elated to be your dedicated health insurance advisor,
          ready to navigate the world of health coverage with comprehensive knowledge and
          ease. I've traded the crisp New Hampshire winters for the vibrant warmth of
          Florida.
        </p>
        <p>
          When I'm not enjoying walks on the beach with my crazy pup, Halo, I'm staying up
          to date with new ways to provide the most comprehensive and affordable coverage
          for my clients. I specialize in finding health coverage that benefits everyone
          from individuals to families, and the self-employed!
        </p>
        <p>Making a positive difference in the lives of others is my passion.</p>
      </About>
      <About image={aboutAltImage} imageAlignment="left" background="light">
        <h3>My Mission / Goal</h3>
        <p>
          My mission is to listen to your unique health needs, comprehensively analyze all
          the coverage options available to you, and ensure you and your loved ones get
          the premium coverage you need. I put my clients' needs and wants at the center
          of the process and provide support through every step on the journey of finding,
          securing, keeping, and changing coverages. It is my goal to be your agent for
          life, and provide expertise, value, and ease to the process.
        </p>
        <p>
          Together, we'll find a plan that fits your needs and lifestyle perfectly. Let's
          join forces and transform those coverage puzzles into a seamless journey of
          security and tranquility.
        </p>
        <p>Your well-being and happiness are my top priorities!</p>
        {/* <IconList>
          <IconListItem icon={<FaQuoteLeft />} title="Hair today, gone tomorrow">
            <p>Some cool quote</p>
          </IconListItem>
          <IconListItem icon={<FaQuoteLeft />} title="Hair today, gone tomorrow">
            <p>Some cool quote</p>
          </IconListItem>
          <IconListItem icon={<FaQuoteLeft />} title="Hair today, gone tomorrow">
            <p>Some cool quote</p>
          </IconListItem>
        </IconList> */}
      </About>
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
          href="https://xpl0ydmsdxh.typeform.com/to/Gki8gO9x?typeform-source=htalthbybree.com"
          target="_blank"
          className="btn btn-primary">
          Refer a friend
        </Link>
      </CallToAction>
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
