import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Session } from 'next-auth';
import { EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';

// For Adding Layout Support to Next Page
export type NextPageWithLayout<
  P = Record<string, unknown>, // Page Props
  IP = P, // Initial Prop
  PO = Record<string, unknown> // Page Options
> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  pageOptions?: PO;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  session?: Session;
  requiredProp: boolean;
  emotionCache?: EmotionCache;
};
