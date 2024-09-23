'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import footerImage from '@www/_assets/img/logo/full.png';
import { useCalendly, useSiteContext } from '.';
import SocialIcon from './SocialIcon';

export interface FooterMainProps extends React.HTMLAttributes<HTMLElement> {
  //children?: React.ReactNode;
}

const FooterMain: React.FC<FooterMainProps> = ({ className, ...props }) => {
  const { socialMedias } = useSiteContext();
  const {
    bookApplication,
    bookGroupPlan,
    bookPartnership,
    bookQuote,
    bookReferAFriend,
    bookReviewPolicy,
  } = useCalendly();

  return (
    <div className={`container footer-top ${className && className}`} {...props}>
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <Link href="/" className="d-flex align-items-center">
            <Image src={footerImage} alt="" />
          </Link>
          <div className="social-links d-flex mt-4 align-items-center">
            {socialMedias?.map((account, key) => (
              <SocialIcon account={account} key={key} />
            ))}
          </div>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Sitemap</h4>
          <ul>
            <li>
              <Link href=".">Home</Link>
            </li>
            <li>
              <Link href="/faq">Frequently Asked Questions</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Resources</h4>
          <ul>
            <li>
              <Link
                href="https://www.forbes.com/advisor/health-insurance/health-insurance-statistics-and-facts/"
                target="_blank">
                Health Insurance Statistics
              </Link>
            </li>
            <li>
              <Link
                href="https://www.forbes.com/advisor/health-insurance/is-health-insurance-tax-deductible/"
                target="_blank">
                Is Health Insurance Deductable?
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Scheduling</h4>
          <ul>
            <li>
              <Link href="#" onClick={() => bookQuote()}>
                Request a Quote
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => bookReviewPolicy()}>
                Review Policy
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => bookApplication()}>
                Application
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => bookGroupPlan()}>
                Employee Group Plan
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Partnership</h4>
          <ul>
            <li>
              <Link href="#" onClick={() => bookPartnership()}>
                Referral Partnership
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => bookReferAFriend()}>
                Refer a Friend
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

FooterMain.displayName = 'FooterMain';

export default FooterMain;
