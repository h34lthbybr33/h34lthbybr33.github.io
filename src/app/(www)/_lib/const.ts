// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  'http://healthbybree.com/'
).replace(/(\/)$/, '');
