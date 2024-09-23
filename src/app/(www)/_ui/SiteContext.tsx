'use client';

import React from 'react';
import { SocialMediaAccount } from '../_data/social-links';

interface ISiteContext {
  contactEmail: string;
  contactName: string;
  contactTelephone: string;
  siteTitle: string;
  siteDescription: string;
  socialMedias: SocialMediaAccount[];
}

const SiteContext = React.createContext<ISiteContext | undefined>(undefined);

interface SiteContextProviderProps {
  children?: React.ReactNode;
  value: ISiteContext;
}

const SiteContextProvider: React.FC<SiteContextProviderProps> = ({
  children,
  value,
}): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [siteContext, setSiteContext] = React.useState<ISiteContext>(value);

  return <SiteContext.Provider value={siteContext}>{children}</SiteContext.Provider>;
};

const useSiteContext = (): ISiteContext => {
  const context = React.useContext(SiteContext);
  if (typeof context === 'undefined') {
    throw new Error('SiteContext does not exist.');
  }
  return context;
};

export { type ISiteContext, useSiteContext };
export default SiteContextProvider;
