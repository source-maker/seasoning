import React, { createContext, ReactNode, useRef } from 'react';
import { LoginPost } from '@/schemas/LoginSchema';
import { setToken } from '@/init/axios';

import { UserType } from '@/types/types';
import { signIn, signOut, useSession } from 'next-auth/react';

interface AuthProps {
  // auth status
  isAdmin: () => boolean;
  isLogin: () => boolean;

  // auth actions
  login: (user: LoginPost, isAdmin?: boolean) => Promise<void>;
  logout: (callbackUrl?: string) => void;
}

const initContext = {
  isLogin: () => false,
  isAdmin: () => false,
  logout: () => {},
  login: () => new Promise<void>(() => {}),
};

export const AuthContext = createContext<AuthProps>(initContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { status, data: session } = useSession();

  const userType = useRef<UserType>('user');

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

  if (status === 'authenticated') {
    setToken(session?.user.accessToken);
  }

  const value = {
    isAdmin,
    isLogin,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
