import { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';

/**
 * `useAuth` is a React hook to access user authentication status and perform related actions.
 * It functions around Session from NextAuth.
 *
 * @returns {object} An object containing:
 * - isAdmin: A function that checks whether the current user is an admin
 * - isLogin: A function that checks whether a user is currently logged in
 * - login: A function that logs in an existing user
 * - logout: A function that logs out the current user
 *
 * @example
 * ```
 * const { isAdmin, isLogin, login, logout } = useAuth();
 * ```
 *
 * @throws {Error} Will throw an error if used outside of an AuthProvider.
 */
export const useAuth = () => {
  return useContext(AuthContext);
};
