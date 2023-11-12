const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/guides',
        destination: '/categories/guides',
        permanent: true,
      },
      {
        source: '/comparatifs',
        destination: '/categories/comparatifs',
        permanent: true,
      },
      {
        source: '/switches',
        destination: '/categories/switches',
        permanent: true,
      },
      {
        source: '/touches',
        destination: '/categories/touches',
        permanent: true,
      },
    ];
  },
};

module.exports = withVanillaExtract(nextConfig);
