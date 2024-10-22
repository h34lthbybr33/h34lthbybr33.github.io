import { getBlogUrl } from '@www/_lib/util';

export type HeaderLink = {
  text: string;
  title: string;
  url: string;
};

export type HeaderLinks = HeaderLink[];

export const headerLinks: HeaderLinks = [
  {
    text: 'Home',
    title: 'Homepage',
    url: '/',
  },
  {
    text: 'Blog',
    title: 'Latest blog posts',
    url: getBlogUrl(),
  },
  {
    text: 'FAQ',
    title: 'Frequently Asked Questions',
    url: '/faq',
  },
];

export default headerLinks;
