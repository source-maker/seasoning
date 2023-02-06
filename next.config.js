// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
