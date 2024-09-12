'use client';

import Link from 'next/link';

import {
  ACTION_REFERRAL_PARTNERSHIP,
  useBookAppointment,
} from '@www/_ctx/BookAppointment';
import FooterAbout from './About';
import FooterLicenses from './Licenses';
import FooterLinks from './Links';

export function FooterTop() {
  const { bookAppointment } = useBookAppointment();

  return (
    <div className="container footer-top">
      <div className="row gy-4">
        <FooterTop.About />
        <FooterTop.Licenses />
        <FooterTop.Links title="Additional Links">
          <ul>
            <li>
              <Link href="https://google.com/">Satisfaction survey</Link>
            </li>
            <li>
              <Link href="https://google.com/">Refer a friend</Link>
            </li>
            <li>
              <Link href="#" onClick={() => bookAppointment(ACTION_REFERRAL_PARTNERSHIP)}>
                Become a partner
              </Link>
            </li>
          </ul>
        </FooterTop.Links>
      </div>
    </div>
  );
}

FooterTop.About = FooterAbout;
FooterTop.Licenses = FooterLicenses;
FooterTop.Links = FooterLinks;

export default FooterTop;
