'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import footerImage from '@www/_assets/img/logo/full.png';
import { useCalendly, useSiteContext } from '.';
import SocialIcon from './SocialIcon';
import classNames from 'classnames';

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

  const footerLinksClassName = classNames(
    'col-lg-2',
    'col-md-3',
    'col-sm-6',
    'footer-links',
    'text-center',
    'text-md-start',
  );
  const footerLiClassName = classNames(
    'd-flex',
    'justify-content-center',
    'justify-content-md-start',
  );

  return (
    <div className={classNames('container', 'footer-top', className)} {...props}>
      <div className="row gy-4">
        <div className="col-lg-4 col-md-12 footer-about">
          <Link href="/" className="d-flex align-items-left align-items-sm-left">
            <Image src={footerImage} alt="" className="mx-auto" />
          </Link>
          <div className="social-links d-flex mt-4 text-center text-sm-start">
            <div className="mx-auto d-flex">
              {socialMedias?.map((account, key) => (
                <SocialIcon account={account} key={key} />
              ))}
            </div>
          </div>
        </div>
        <div className={footerLinksClassName}>
          <h4>Sitemap</h4>
          <ul>
            <li className={footerLiClassName}>
              <Link href=".">Home</Link>
            </li>
            <li className={footerLiClassName}>
              <Link href="/blog">Blog Posts</Link>
            </li>
            <li className={footerLiClassName}>
              <Link href="/faq">Frequently Asked Questions</Link>
            </li>
          </ul>
        </div>
        <div className={footerLinksClassName}>
          <h4>Resources</h4>
          <ul>
            <li className={footerLiClassName}>
              <Link
                href="https://www.forbes.com/advisor/health-insurance/health-insurance-statistics-and-facts/"
                target="_blank">
                Health Insurance Statistics
              </Link>
            </li>
            <li className={footerLiClassName}>
              <Link
                href="https://www.forbes.com/advisor/health-insurance/is-health-insurance-tax-deductible/"
                target="_blank">
                Is Health Insurance Deductable?
              </Link>
            </li>
          </ul>
        </div>
        <div className={footerLinksClassName}>
          <h4>Scheduling</h4>
          <ul>
            <li className={footerLiClassName}>
              <Link href="#" onClick={() => bookQuote()}>
                Request a Quote
              </Link>
            </li>
            <li className={footerLiClassName}>
              <Link href="#" onClick={() => bookReviewPolicy()}>
                Review Policy
              </Link>
            </li>
            <li className={footerLiClassName}>
              <Link href="#" onClick={() => bookApplication()}>
                Application
              </Link>
            </li>
            <li className={footerLiClassName}>
              <Link href="#" onClick={() => bookGroupPlan()}>
                Employee Group Plan
              </Link>
            </li>
          </ul>
        </div>
        <div className={footerLinksClassName}>
          <h4>Partnership</h4>
          <ul>
            <li className={footerLiClassName}>
              <Link href="#" onClick={() => bookPartnership()}>
                Referral Partnership
              </Link>
            </li>
            <li className={footerLiClassName}>
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
