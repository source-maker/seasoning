import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Session } from 'next-auth';
import { EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';

export interface PageOptions {
  title?: string;
  useBackButton?: boolean;
  rightNavMenu?: ReactNode;
}

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
  pageOptions?: PageOptions;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  session?: Session;
  requiredProp: boolean;
  emotionCache?: EmotionCache;
};
