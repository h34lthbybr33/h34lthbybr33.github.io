import createMDX from '@next/mdx';
import grayMatter from 'gray-matter';

const withMDX = createMDX({
  options: {
    remarkPlugins: [grayMatter],
  },
});

/**
 * @param {string} phase
 * @param {object} opts
 * @param {import('next').NextConfig} opts.defaultConfig
 * @returns {import('next').NextConfig}
 */
export default async (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const sharedConfig = {
    pageExtensions: [...defaultConfig.pageExtensions, 'md', 'mdx'],
  };

  // Run as a server while on vercel
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    console.log('Using server config');
    return withMDX({
      ...sharedConfig,
      pageExtensions: [
        ...defaultConfig.pageExtensions.map((x) => `svr.${x}`),
        ...sharedConfig.pageExtensions,
      ],
    });
  }

  // Otherwise, default behavior is static website
  console.log('Using static config');
  return withMDX({
    ...sharedConfig,
    output: 'export',
    images: {
      unoptimized: true,
    },
  });
};
