/**
 * Storybook Server Configuration
 */
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
const path = require('path');

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@a110/storybook-expand-all',
    '@tomfreudenberg/next-auth-mock/storybook',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      },
    },
  ],
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require('@babel/preset-typescript').default,
              [
                require('@babel/preset-react').default,
                { runtime: 'automatic' },
              ],
              require('@babel/preset-env').default,
            ],
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    config.resolve.extensions.push('.mjs');

    config.resolve.alias = {
      ...config.resolve.alias,
      'next-i18next': 'react-i18next',
    };

    // Exclude next-i18next from being processed by webpack
    // config.module.rules.push({
    //   test: /next-i18next/,
    //   use: 'null-loader',
    // });

    // const nullLoaderRule = {
    //   test: /next-i18next/,
    //   use: 'null-loader',
    // };

    // Add null-loader rule if it doesn't exist already
    // if (
    //   !config.module.rules.some(
    //     (rule) => rule.test && rule.test.toString() === '/next-i18next/'
    //   )
    // ) {
    //   config.module.rules.push(nullLoaderRule);
    // }

    return config;
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
  },
  docsPage: {
    docs: 'automatic',
  },
};
