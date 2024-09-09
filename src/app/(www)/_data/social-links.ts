export type FacebookAccount = {
  type: 'Facebook';
  name: string;
  url: string;
};
export type InstagramAccount = {
  type: 'Instagram';
  name: string;
  url: string;
};
export type LinkedInAccount = {
  type: 'LinkedIn';
  name: string;
  url: string;
};
export type SocialMediaAccount = FacebookAccount | InstagramAccount | LinkedInAccount;
export type SocialMediaAccounts = SocialMediaAccount[];

export const socialMedia: SocialMediaAccounts = [
  {
    type: 'Facebook',
    name: 'healthbybree',
    url: 'https://www.facebook.com/healthbybree',
  } satisfies FacebookAccount,
  {
    type: 'Instagram',
    name: 'healthbybree',
    url: 'https://www.instagram.com/healthbybree/',
  } satisfies InstagramAccount,
  {
    type: 'LinkedIn',
    name: 'healthbybree',
    url: 'https://www.linkedin.com/in/healthbybree',
  } satisfies LinkedInAccount,
];

export default socialMedia;
