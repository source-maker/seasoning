import { SwaggerClient } from '@/init/swagger';
export type SwaggerClientType = InstanceType<typeof SwaggerClient>;
export type UserType = 'user' | 'admin';
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

export interface JwtToken {
  access: string;
  refresh: string;
}

export enum Gender {
  male = 0,
  female = 1,
  other = 2,
}

export enum Job {
  EMPLOEE = 1,
  EXECUTIVE = 2,
  CIVILSERVANT = 3,
  SELFEMPLYED = 4,
  HOUSEWIFE = 5,
  PARTTIMEJOB = 6,
  STUDENT = 7,
  OTHERS = 8,
}

export interface ChangePassword {
  oldPassword: string;
  newPassword: string;
}
