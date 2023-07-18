import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

/**
 * Configuration
 * The following object is used to configure the middleware.
 */
export const config = {
  // filter for page routes, excluding /api, /static, /_next
  matcher: ['/((?!api|static|.*\\..*|_next).*)', '/'],
};

/**
 * Whitelist Configuration
 * The following array of strings are used to whitelist public pages that don't require authentication to access.
 */
const whiteListConfig = [
  '/',
  '/login',
  '/login/*',
  '/signup',
  '/signup/*',
  // match with localized paths (if applicable)
  '/en/',
  '/en/login',
  '/en/login/*',
  '/en/signup',
  '/en/signup/*',
];

/**
 * checkIsWhitelisted
 * The following function checks if the current url is whitelisted.
 * @param url
 * @param urlArray
 * @returns boolean
 */
function checkIsWhitelisted(url, urlArray): boolean {
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

const secret = process.env.SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });

  // get the current url path
  const path = req.nextUrl.pathname;

  // get the intended url to redirect user after login and authenticated
  const intendedUrl = req.nextUrl.pathname;

  // check if the current path is whitelisted, if so it will skip authentication
  const pathIsWhitelisted = checkIsWhitelisted(path, whiteListConfig);
  if (pathIsWhitelisted || (token && token.accessToken)) {
    return NextResponse.next();
  }

  // if the user is not authenticated, redirect to the login page, passing the intended url as a query param
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/login?returnUrl=${intendedUrl}`
  );
}
