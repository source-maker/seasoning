import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { swaggerClient } from '@/lib/swaggerClient';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    error: '/login',
  },
  providers: [
    // fields for signin form
    CredentialsProvider({
      id: 'django-credentials',
      name: 'Django Credentials',
      type: 'credentials',
      credentials: {
        username: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const success = await swaggerClient.login.loginCreate({
          username: credentials?.username || '',
          password: credentials?.password || '',
        });

        return success
          ? {
              id: success.id.toString(),
              accessToken: success.access,
              refreshToken: success.refresh,
            }
          : null;
      },
    }),
  ],
  /**
   * jwt callback is called when a JWT is received from the provider.
   * This modifies the JWT by providing the accessToken to session, which then can be used in the session callback
   */
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.accessToken,
        };
      }

      return token;
    },

    async session({ session, token }) {
      if (!session.user) return session;

      // get token from jwt callback
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
});
