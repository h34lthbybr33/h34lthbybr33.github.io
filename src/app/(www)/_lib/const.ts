import path from 'node:path';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PROJECT_DIR = path.join(__dirname, '../../../../../');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PUBLIC_DIR = path.join(PROJECT_DIR, 'public');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BASE_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_BASE_URL;
