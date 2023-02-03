import * as React from 'react';
import { CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { themes } from '../styles/initStoryThemes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ja from 'date-fns/locale/ja';

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = React.useMemo(
    () => themes[themeKey] || themes['default'],
    [themeKey]
  );

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={ja}
        localeText={{
          cancelButtonLabel: 'キャンセル',
          okButtonLabel: '確認',
          clearButtonLabel: 'クリア',
        }}
      >
        <CssBaseline />
        <Story />
      </LocalizationProvider>
    </ThemeProvider>
  );
};
