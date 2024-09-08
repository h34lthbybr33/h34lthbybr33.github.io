/**
 * @param {string} phase
 * @param {object} opts
 * @param {import('next').NextConfig} opts.defaultConfig
 * @returns {import('next').NextConfig}
 */
export default async (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const sharedConfig = {
  };

  // Run as a server while on vercel
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return {
      ...sharedConfig,
      pageExtensions: [
        ...defaultConfig.pageExtensions.map(x => `svr.${x}`),
        ...defaultConfig.pageExtensions,
      ],
    };
  }

  // Otherwise, default behavior is static website
  return {
    ...sharedConfig,
    output: 'export',
    images: {
      unoptimized: true,
    },
  };
};
