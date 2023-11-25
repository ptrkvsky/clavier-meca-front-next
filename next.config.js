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
      {
        source: '/comment-faire-clavier-custom',
        destination: '/article/comment-faire-clavier-custom',
        permanent: true,
      },
      {
        source: '/cherry-mx-red-vs-cherry-mx-speed-silver',
        destination: '/article/cherry-mx-red-vs-cherry-mx-speed-silver',
        permanent: true,
      },

      {
        source: '/meilleur-clavier-developpeur',
        destination: '/article/meilleur-clavier-developpeur',
        permanent: true,
      },
      {
        source: '/comparatif-des-meilleurs-claviers',
        destination: '/article/comparatif-des-meilleurs-claviers',
        permanent: true,
      },
    ];
  },
};

module.exports = withVanillaExtract(nextConfig);
