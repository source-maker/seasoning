import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../styles/initAppTheme';
import { createEmotionCache } from '@/lib/emotion';
import { SWRConfig } from 'swr';
import { fetcher, axios } from '../lib/axios';
import { AuthProvider } from '@/providers/AuthProvider';
import { RouteGuardProvider } from '@/providers/RouteGuardProvider';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { SessionProvider } from 'next-auth/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import { Session } from 'next-auth';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Layout from '@/features/layout/public/PublicLayout';

// if localizing date-fns, import the locale here, example given below:
// import ja from 'date-fns/locale/ja';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface PageMeta {
  title?: string;
  useBackButton?: boolean;
  rightNavMenu?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  pageMeta?: PageMeta;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  title: string;
  session?: Session;
  requiredProp: boolean;
  emotionCache?: EmotionCache;
};

// eslint-disable-next-line import/no-default-export
export default function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache } = props;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // HACK pageProps.titleがundefined
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  axios.interceptors.request.use(
    function (config) {
      if (config.url == '/api/me/') {
        return config;
      }
      setLoading(true);
      return config;
    },
    function (error) {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      setLoading(false);
      return response;
    },
    function (error) {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  // Google Tag Manager start
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || '';
    if (gtmId !== '') {
      TagManager.initialize({
        gtmId: gtmId,
      });
    }
  }, []);

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);
  // Google Tag Manager end

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
                    {getLayout(<Component {...props.pageProps} />)}
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
