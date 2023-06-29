import '@/styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '@/init/mui/loadMuiTheme';
import { createEmotionCache } from '@/init/mui/emotion';
import { SWRConfig } from 'swr';
import { fetcher } from '@/init/axios';
import { AuthProvider } from '@/providers/AuthProvider';
import { RouteGuardProvider } from '@/providers/RouteGuardProvider';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { SessionProvider } from 'next-auth/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AnimatePresence, motion } from 'framer-motion';
import { DrawerProvider } from '@/providers/DrawerProvider';
// import ja from 'date-fns/locale/ja'; // if localizing date-fns, import the locale here, example given below:
import { AppPropsWithLayout } from '@/types/next-page';
import { DefaultLayout } from '@/components/layouts/default/DefaultLayout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache } = props;
  const [loading] = useState(false);
  const router = useRouter();

  // Render default layout if no layout is provided
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>
          {router.pathname.replace('/', '').charAt(0).toUpperCase() +
            router.pathname.slice(2)}
        </title>
      </Head>
      <CacheProvider value={emotionCache}>
        <SWRConfig
          value={{
            fetcher: fetcher,
            revalidateOnReconnect: true,
          }}
        >
          <ThemeProvider theme={theme}>
            <LocalizationProvider
              // To localize MUI, you can provide the locale and override text, see below for an example.
              dateAdapter={AdapterDateFns}
              // adapterLocale={ja}
              // localeText={{
              //   cancelButtonLabel: 'キャンセル',
              //   okButtonLabel: '確認',
              //   clearButtonLabel: 'クリア',
              // }}
            >
              <CssBaseline />

              <SessionProvider session={props.session}>
                <AuthProvider>
                  <Backdrop
                    sx={{
                      color: '#fff',
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={loading}
                  >
                    <CircularProgress color="primary" />
                  </Backdrop>
                  <RouteGuardProvider>
                    <DrawerProvider>
                      <AnimatePresence>
                        <motion.div
                          initial="pageInitial"
                          animate="pageAnimate"
                          variants={{
                            pageInitial: {
                              opacity: 0,
                            },
                            pageAnimate: {
                              opacity: 1,
                            },
                            pageExit: {
                              backgroundColor: 'white',
                              filter: `invert()`,
                              opacity: 0,
                            },
                          }}
                        >
                          {getLayout(<Component {...props.pageProps} />)}
                        </motion.div>
                      </AnimatePresence>
                    </DrawerProvider>
                  </RouteGuardProvider>
                </AuthProvider>
              </SessionProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </SWRConfig>
      </CacheProvider>
    </>
  );
}
