export const Facebook = 'Facebook';
export type FacebookAccount = {
  type: typeof Facebook;
  name: string;
  url: string;
};
export const Instagram = 'Instagram';
export type InstagramAccount = {
  type: typeof Instagram;
  name: string;
  url: string;
};
export const LinkedIn = 'LinkedIn';
export type LinkedInAccount = {
  type: typeof LinkedIn;
  name: string;
  url: string;
};
export const TikTok = 'TikTok';
export type TikTokAccount = {
  type: typeof TikTok;
  name: string;
  url: string;
};
export const Twitter = 'Twitter';
export type TwitterAccount = {
  type: typeof Twitter;
  name: string;
  url: string;
};
export const YouTube = 'YouTube';
export type YouTubeAccount = {
  type: typeof YouTube;
  name: string;
  url: string;
};
export type SocialMediaAccount =
  | FacebookAccount
  | InstagramAccount
  | LinkedInAccount
  | TikTokAccount
  | TwitterAccount
  | YouTubeAccount;
export type SocialMediaAccounts = SocialMediaAccount[];

export const isFacebook = (acct: SocialMediaAccount): acct is FacebookAccount =>
  acct.type === 'Facebook';
export const isInstagram = (acct: SocialMediaAccount): acct is InstagramAccount =>
  acct.type === 'Instagram';
export const isLinkedIn = (acct: SocialMediaAccount): acct is LinkedInAccount =>
  acct.type == 'LinkedIn';
export const isTikTok = (acct: SocialMediaAccount): acct is TikTokAccount =>
  acct.type == 'TikTok';
export const isTwitter = (acct: SocialMediaAccount): acct is TwitterAccount =>
  acct.type == 'Twitter';
export const isYouTube = (acct: SocialMediaAccount): acct is YouTubeAccount =>
  acct.type == 'YouTube';

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
