/**
 * Client Side Route Guard (note: preferably should do server side route guarding)
 * Courtesy of https://jasonwatmore.com/post/2021/08/30/next-js-redirect-to-login-page-if-unauthenticated#:~:text=The%20route%20guard%20component%20contains,and%20on%20each%20route%20change.
 */

import { useEffect, ReactNode, createContext } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const defaultProps = {};
const RouteGuardContext = createContext(defaultProps);

// eslint-disable-next-line import/no-default-export
export function RouteGuardProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { status } = useSession();

  const value = {};

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function checkIsWhitelisted(url, urlArray) {
    // loop through the array of url strings
    for (let i = 0; i < urlArray.length; i++) {
      // check if the current url string has a wildcard
      if (urlArray[i].includes('*')) {
        // create a regex pattern to match any characters after the wildcard
        const pattern = new RegExp(urlArray[i].replace('*', '.*'));
        // check if the url matches the pattern
        if (pattern.test(url)) {
          return true;
        }
      } else {
        // check if the url is an exact match
        if (url === urlArray[i]) {
          return true;
        }
      }
    }
    // if no match is found, return false
    return false;
  }

  function authCheck(url: string) {
    if (status === 'authenticated' || status === 'loading') return;

    // whitelist public pages that don't require authentication
    // note: use a wilcard character to denote all sub-paths to be public
    const whitelistPaths = [
      '/',
      '/login',
      '/login/*',
      '/signup',
      '/signup/*',
      '/showcase/*',
      '/contact',
      '/biz/login',
    ];

    const path = url.length > 0 ? url.split('?')[0] : '/';

    const pathIsWhitelisted = checkIsWhitelisted(path, whitelistPaths);
    if (pathIsWhitelisted) return;

    router.push({
      pathname: '/login',
      query: { returnUrl: router.asPath },
    });
  }

  return (
    <RouteGuardContext.Provider value={value}>
      {children}
    </RouteGuardContext.Provider>
  );
}
