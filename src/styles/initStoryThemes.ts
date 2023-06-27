import { createTheme, ThemeOptions } from '@mui/material';
import ja from 'date-fns/locale/ja';
import { lightTheme } from './themes/light.theme';
import { darkTheme } from './themes/dark.theme';
import { blueMobileThemeOptions } from './themes/blueMobile.theme';
import { defaultTheme } from './themes/default.theme';
import { crimsonTheme } from './themes/crimson.theme';

/**
 * List of themes for use in storybook
 * @todo When creating a new theme, also include in "preview.js theme toolbar" until import can be done dynamically
 */
export const storyThemes = {
  default: {
    value: 'default',
    title: 'Default Theme',
    left: '🌞',
    theme: createTheme(defaultTheme as ThemeOptions, ja),
  },
  light: {
    value: 'light',
    title: 'Light Theme',
    left: '🌞',
    theme: createTheme(lightTheme as ThemeOptions, ja),
  },
  dark: {
    value: 'dark',
    title: 'Dark Theme',
    left: '🌚',
    theme: createTheme(darkTheme as ThemeOptions, ja),
  },
  crimson: {
    value: 'crimson',
    title: 'Crimson Dark Theme',
    left: '🔴',
    theme: createTheme(crimsonTheme as ThemeOptions, ja),
  },
  blueMobile: {
    value: 'blueMobile',
    title: 'Blue Mobile Theme',
    left: '📱',
    theme: createTheme(blueMobileThemeOptions as ThemeOptions, ja),
  },
};

// prepare the list of themes for use in storybook
// TODO: implement into preview.js
export const toolbarThemes = Object.values(storyThemes).map(
  ({ value, title, left }) => ({ value, title, left })
);

console.log('toolbarThemes', toolbarThemes);

// prepare theme for use in sb decorator
const storyThemesOptions = Object.keys(storyThemes).reduce(
  (acc, key) => ({
    ...acc,
    [key]: storyThemes[key].theme,
  }),
  {}
);
console.log('Themes for SB MUI decorator', storyThemesOptions);

export const themes = storyThemesOptions;
