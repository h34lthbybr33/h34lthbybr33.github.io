'use client';

import socialLinks from '@/app/(www)/_data/social-links';
import { SocialIcon } from './SocialIcon';

export function SocialLinks() {
  return (
    <div className="social-links d-none d-md-flex align-items-center">
      {socialLinks.map((link, index) => (
        <SocialIcon key={index} {...link} />
      ))}
    </div>
  );
}

export default SocialLinks;
