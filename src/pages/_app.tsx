import '@/styles/tailwind-init.css';
import '@/styles/globals.css';

import Head from 'next/head';
import { SWRConfig } from 'swr';
import { AuthProvider } from '@/providers/AuthProvider';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { DrawerProvider } from '@/providers/DrawerProvider';
import { AppPropsWithLayout } from '@/types/types';
import { DefaultLayout } from '@/layouts/default/DefaultLayout';
import { SwaggerProvider } from '@/providers/SwaggerProvider';
import { SnackbarProvider } from '@/providers/SnackbarProvider';
import { appWithTranslation, i18n } from 'next-i18next';
import { MuiProvider } from '@/providers/MuiProvider';
import i18next from 'i18next';
import { i18n as i18nConfig } from '../../next-i18next.config';

function MyApp(props: AppPropsWithLayout) {
  const { Component } = props;
  const [loading] = useState(false);
  const router = useRouter();
  const defaultLocale = i18nConfig.defaultLocale;

  // Change language if userLang is set
  useEffect(() => {
    // get selected lang from local storage or browser
    const selectedLang =
      localStorage.getItem('userLang') || window.navigator.language;

    // normalize the user's chosen locale (eg. en-US => en)
    const normalizedLang = selectedLang.split('-')[0];

    if (i18next.language !== normalizedLang) {
      i18n?.changeLanguage(normalizedLang);
    }

    // If the router locale mismatches the user's chosen locale, fix route path
    if (defaultLocale === normalizedLang && router.locale !== normalizedLang)
      router.push(router.asPath, undefined, { locale: normalizedLang });
  }, [router, defaultLocale]);

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
      <MuiProvider>
        <SWRConfig
          value={{
            dedupingInterval: 100,
            refreshInterval: 100,
            fallback: { a: 1, b: 1 },
            revalidateOnReconnect: true,
          }}
        >
          <SessionProvider session={props.session}>
            <SwaggerProvider>
              <AuthProvider>
                <>
                  <Backdrop
                    sx={{
                      color: '#fff',
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={loading}
                  >
                    <CircularProgress color="primary" />
                  </Backdrop>
                  <SnackbarProvider>
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
                  </SnackbarProvider>
                </>
              </AuthProvider>
            </SwaggerProvider>
          </SessionProvider>
        </SWRConfig>
      </MuiProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
