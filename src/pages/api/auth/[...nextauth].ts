import { swaggerClient } from '@/init/swaggerClient';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    error: '/login',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
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
          username: credentials?.username ?? '',
          password: credentials?.password ?? '',
        });

        const { access, refresh } = success as unknown as {
          access: string;
          refresh: string;
        };

        // if no username, stop auth
        if (credentials?.username === undefined) return null;

        return success
          ? {
              id: credentials.username,
              accessToken: access,
              refreshToken: refresh,
            }
          : null;
      },
    }),
  ],
  callbacks: {
    /**
     * jwt callback is triggered whenever a JWT token is created or updated.
     * We are adding the accessToken to the JWT token so its available in the session callback
     */
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.accessToken,
        };
      }

      return token;
    },

    /**
     * session callback is triggered whenever a session is accessed.
     * Here, we are adding the accessToken (from the JWT callback) to the user object for client access
     */
    async session({ session, token }) {
      if (!session.user) return session;

      // get token from jwt callback
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
});
