// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    accessToken?: Role;
  }

  interface Session {
    user: User;
  }
  // interface Session extends DefaultSession {
  //   user?: User;
  // }
}

// declare module 'next-auth/jwt' {
//   interface JWT {
//     role?: Role;
//     subscribed: boolean;
//   }
// }
