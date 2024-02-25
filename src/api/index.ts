import axios from 'axios';
import { AUTH_TOKEN_SET } from './constants';
import { AuthTokenSet } from './types';
import { getCookie } from '@/utils/cookie';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const cookieAuthTokenSet = getCookie(AUTH_TOKEN_SET);
  const { idToken } = JSON.parse(cookieAuthTokenSet as string) as AuthTokenSet;
  config.headers.Authorization = `Bearer ${idToken}`;

  return config;
});

export default axiosInstance;
