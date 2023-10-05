import { createTheme, ThemeOptions } from '@mui/material';
import ja from 'date-fns/locale/ja';
import { theme as lightTheme } from '../designsystems/mui/themes/light.theme';
import { theme as darkTheme } from '../designsystems/mui/themes/dark.theme';
import { theme as blueMobileThemeOptions } from '../designsystems/mui/themes/blueMobile.theme';
import { theme as defaultTheme } from '../designsystems/mui/themes/default.theme';
import { theme as crimsonTheme } from '../designsystems/mui/themes/crimson.theme';
import { theme as appleTheme } from '../designsystems/mui/themes/apple.theme';

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
  apple: {
    value: 'apple',
    title: 'Apple Theme',
    left: '📱',
    theme: createTheme(appleTheme as ThemeOptions, ja),
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
