/**
 * Storybook Component Preview Section Configuration
 */
import { withMuiTheme } from './decorators/with-mui-theme.decorator.js';

// Load Roboto fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Load Noto Sans JP fonts
import '@fontsource/noto-sans-jp/300.css';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/700.css';

import '@fontsource/material-icons';
import { withRHF } from './decorators/RHF.decorator.js';
import { withNexti18next } from './decorators/nexti18next.decorator.js';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Showcase', 'Components'],
    },
  },
  backgrounds: { disable: true },

  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: 'default', left: '🏳️', title: 'Default' },
        { value: 'light', left: '☀️', title: 'Light' },
        { value: 'dark', left: '🌙', title: 'Dark' },
        { value: 'crimson', left: '🔴', title: 'Crimson' },
        { value: 'blueMobile', left: '📱', title: 'Blue Mobile' },
        { value: 'apple', left: '', title: 'Apple' },
      ],
    },
    previewTabs: {
      viewMode: 'docs',
      previewTabs: {
        canvas: { hidden: false },
      },
    },
  },
};

export const decorators = [withRHF, withMuiTheme, withNexti18next];
