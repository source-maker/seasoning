import { SwaggerClient } from './swagger/SwaggerClient';
import { getSession } from 'next-auth/react';

export const swaggerClient = new SwaggerClient({
  BASE: process.env.NEXT_PUBLIC_BACKEND_DOMAIN?.slice(0, -1),
  TOKEN: async () => {
    // TODO: find alternative way to get token from nextAuth
    const session = await getSession();
    return session ? session.user.accessToken : null;
  },
});
