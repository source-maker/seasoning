import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

// TODO: remove this pageMeta and NextPageWithLayout to use getStaticProps for layouts?
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

export type UserType = 'user' | 'admin';

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
