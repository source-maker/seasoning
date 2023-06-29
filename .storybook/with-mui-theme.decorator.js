import * as React from 'react';
import { CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { themes } from './initMuiThemes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ja from 'date-fns/locale/ja';
import { SessionProvider } from 'next-auth/react';

export const withMuiTheme = (Story, context, session) => {
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
        <SessionProvider session={session}>
          <Story />
        </SessionProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
