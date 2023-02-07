import React, { createContext, ReactNode, useRef } from 'react';
import { LoginPost } from '../schemas/LoginSchema';
import useSWR from 'swr';
import { fetcher, setToken } from '@/lib/axios';
import { User } from 'lib/swagger';
import { swaggerClient } from 'lib/swaggerClient';
import { UserType } from '../types/types';
import { signIn, signOut, useSession } from 'next-auth/react';

interface AuthProps {
  // auth status
  currentUser: User | null;
  isAdmin: () => boolean;
  isLogin: () => boolean;

  // auth actions
  signUp: (user: User) => Promise<void>;
  login: (user: LoginPost, isAdmin?: boolean) => Promise<void>;
  logout: (callbackUrl?: string) => void;
}

const initContext = {
  currentUser: {} as User,
  isLogin: () => false,
  isAdmin: () => false,
  logout: () => {},
  signUp: () => new Promise<void>(() => {}),
  login: () => new Promise<void>(() => {}),
};

export const AuthContext = createContext<AuthProps>(initContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { status, data: session } = useSession();
  const fetchUrl = '/api/me/';
  const { data } = useSWR<User>(fetchUrl, fetcher, {
    errorRetryInterval: 3000,
    errorRetryCount: 5,
  });
  const userType = useRef<UserType>('user');

  const signUp = async (user: User) => {
    await swaggerClient.signup.signupCreate(user);
  };

  const login = async (user: LoginPost) => {
    signIn('django-credentials', {
      username: user.username,
      password: user.password,
    });
  };

  const logout = async (callbackUrl = '/') => {
    try {
      signOut({
        callbackUrl: callbackUrl,
      });
    } catch {
      console.log('logout error');
    }
  };

  const isLogin = () => status === 'authenticated';

  const isAdmin = () => userType.current === 'admin';

  const currentUser = data ?? null;

  if (status === 'authenticated') {
    setToken(session?.user.accessToken);
  }

  const value = {
    currentUser,
    isAdmin,
    isLogin,
    signUp,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
