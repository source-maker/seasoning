/**
 * Storybook Main UI Configuration
 */
import { addons } from '@storybook/addons';
import theme from './theme';
import favicon from '../public/favicon.ico';

// add favicon to storybook
const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

addons.setConfig({
  theme: theme, // add theme to storybook
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: true },
  },
});
