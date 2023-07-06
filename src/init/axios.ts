import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
  withCredentials: true,
});

export { instance as axios };

// set token for axios instance
export const setToken = async (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return token;
};
