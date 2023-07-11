import { ReactNode } from 'react';
import theme from '@/init/mui/loadMuiTheme';
import config from '../../app.config.json';
import createEmotionCache from '@emotion/cache';

// Conditionally import MUI
const enableMui = config.enableMui;

let CacheProvider,
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
  ThemeProvider,
  CssBaseline,
  LocalizationProvider,
  AdapterDateFns,
  clientSideEmotionCache;
// ja;

if (enableMui) {
  CacheProvider = require('@emotion/react').CacheProvider; // eslint-disable-line
  createTheme = require('@mui/material').createTheme; // eslint-disable-line
  responsiveFontSizes = require('@mui/material').responsiveFontSizes; // eslint-disable-line
  ThemeOptions = require('@mui/material').ThemeOptions; // eslint-disable-line
  ThemeProvider = require('@mui/material/styles').ThemeProvider; // eslint-disable-line
  CssBaseline = require('@mui/material/CssBaseline').default; // eslint-disable-line
  LocalizationProvider = require('@mui/x-date-pickers').LocalizationProvider; // eslint-disable-line
  AdapterDateFns = require('@mui/x-date-pickers/AdapterDateFns').default; // eslint-disable-line
  // ja = require('date-fns/locale/ja');
  // import ja from 'date-fns/locale/ja'; // if localizing date-fns, import the locale here, example given below:

  clientSideEmotionCache = createEmotionCache({
    key: 'css',
  });
  // theme = require('@/init/mui/loadMuiTheme');
}

type MuiProviderProps = {
  children: ReactNode;
  emotionCache?: typeof clientSideEmotionCache;
};

export const MuiProvider = ({
  children,
  emotionCache = clientSideEmotionCache,
}: MuiProviderProps) => {
  if (enableMui) {
    return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
          <CssBaseline />
          {children}
          {/* </LocalizationProvider> */}
        </ThemeProvider>
      </CacheProvider>
    );
  }

  return <>{children}</>;
};
