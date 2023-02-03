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
  async redirects() {
    return [
      {
        source: '/terms/privacy',
        destination: 'https://l.kipwise.com/QIoWmhE',
        permanent: false,
      },
    ];
  },
  httpAgentOptions: {
    // Disable keep-alive globally to fix vercel+nextjs environment issue
    // OPTION: re-enable keep-alive globally and remove for specific api calls that cause issue to improve performance
    // https://nextjs.org/docs/api-reference/next.config.js/disabling-http-keep-alive
    // https://www.imperva.com/learn/performance/http-keep-alive/#:~:text=The%20HTTP%20keep%2Dalive%20header,round%20trip%20time%20(RTT).
    keepAlive: false,
  },
  // OPTION: uncomment to enable sentry
  // sentry: {
  //   hideSourceMaps: true, // Uploads source maps as artifacts
  // },
};

// OPTION: uncomment to enable sentry
// const sentryWebpackPluginOptions = {
//   // Additional config options for the Sentry Webpack plugin. Keep in mind that
//   // the following options are set automatically, and overriding them is not
//   // recommended:
//   //   release, url, org, project, authToken, configFile, stripPrefix,
//   //   urlPrefix, include, ignore

//   silent: true, // Suppresses all logs
//   // For all available options, see:
//   // https://github.com/getsentry/sentry-webpack-plugin#options.
// };

// OPTION: switch module exports to enable sentry
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { withSentryConfig } = require('@sentry/nextjs');

// module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
module.exports = nextConfig;
