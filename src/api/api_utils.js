// routes
import { handleAlert } from 'react-handle-alert';
import { axiosInstance } from './axios';
import { PATH_API } from './path';

// utils

// ----------------------------------------------------------------------

function jwtDecode(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
}

// ----------------------------------------------------------------------

export const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

// ----------------------------------------------------------------------

const tokenRefresh = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  if (refreshToken) {
    try {
      const response = await axiosInstance.post(PATH_API.TOKEN_REISSUE, {
        refreshToken,
      });

      const newAccessToken = response.data.accessToken;
      localStorage.setItem('accessToken', newAccessToken);

      axiosInstance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;

      const { exp } = jwtDecode(newAccessToken);
      // eslint-disable-next-line no-use-before-define
      tokenExpired(exp);

      return newAccessToken;
    } catch {
      handleAlert('로그인이 만료되었습니다.');

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      window.location.reload();
    }
  }
};

export const tokenExpired = (exp) => {
  let expiredTimer;

  const currentTime = Date.now();

  // 만료 되기 5분 전에 토큰 갱신
  // Test token expires after 10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  // 1일보다 많이 남으면 실행하지 않음
  if (timeLeft >= 86400000) {
    return;
  }

  expiredTimer = setTimeout(() => {
    tokenRefresh();
  }, timeLeft);
};

// ----------------------------------------------------------------------

export const setSession = (token) => {
  const { accessToken, refreshToken } = token;
  if (accessToken && refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    const { exp } = jwtDecode(accessToken);
    tokenExpired(exp);
  } else {
    localStorage.removeItem('accessToken');

    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

// ----------------------------------------------------------------------

export const removeSession = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

  delete axiosInstance.defaults.headers.common.Authorization;
};

// ----------------------------------------------------------------------

export const getUserId = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    return '';
  }

  const { id } = jwtDecode(accessToken);

  return id;
};
