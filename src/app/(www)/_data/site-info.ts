export type SiteInfo = {
  title: string;
  description: string;
  keywords: string[];
};

export const siteInfo: SiteInfo = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || 'Health by Bree',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Making affordable health coverage a breeze',
  keywords: [
    'insurance',
    'health insurance',
    'health insurance agent',
    'aca',
    'ppo',
    'hmo',
  ],
};

export default siteInfo;
