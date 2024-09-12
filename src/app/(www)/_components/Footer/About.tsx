'use client';

import Link from 'next/link';

import SocialIcon from '@www/_components/SocialIcon';
import contactInfo from '@www/_data/contact-info';
import siteInfo from '@www/_data/site-info';
import socialLinks from '@www/_data/social-links';

export function About() {
  return (
    <div className="col-lg-4 col-md-6 footer-about">
      <Link href="/" className="logo d-flex align-items-center">
        <span className="sitename">{siteInfo.title}</span>
      </Link>
      <div className="footer-contact">
        <p>{contactInfo.address.line1}</p>
        {contactInfo.address.line2 && <p>{contactInfo.address.line2}</p>}
        <p>
          {contactInfo.address.city}, {contactInfo.address.state}{' '}
          {contactInfo.address.zipCode}
        </p>
      </div>
      <div className="social-links d-flex mt-4">
        {socialLinks.map((link, index) => (
          <SocialIcon key={index} {...link} />
        ))}
      </div>
    </div>
  );
}

export default About;
