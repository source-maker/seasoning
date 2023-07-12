// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

const TerserPlugin = require('terser-webpack-plugin'); // eslint-disable-line
const { i18n } = require('./next-i18next.config'); // eslint-disable-line
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  webpack: (config) => {
    config.optimization.minimize = isProd;
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: isProd,
          },
        },
        extractComments: 'all',
      }),
    ];
    return config;
  },
  images: {
    //  OPTION: implement when using next future image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakeimg.pl',
        pathname: '/**',
      },
    ],
    domains: ['fakeimg.pl'],
  },
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
