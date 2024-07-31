import axios from 'axios';
import { ACCESS_TOKEN_KEY, API_DOMAIN, REFRESH_TOKEN_KEY } from '../../static';
import { PATH_API } from './path';

const TIMEOUT_TIME = 10_000;

export const axiosInstance = axios.create({
  baseURL: API_DOMAIN,
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
  // withCredentials:true, // 쿠키 cors 통신 설정
});

// 취소 토큰을 생성하는 함수
const cancelTokenSource = () => {
  const cancelToken = axios.CancelToken.source();
  return {
    token: cancelToken.token,
    cancel: cancelToken.cancel,
  };
};

let firstRequestCancelToken = null;
// Request interceptor for API calls

axiosInstance.interceptors.request.use(
  async (config) => {
    // const token = localStorage.getItem('capsule_token') as any;
    // config.headers.Authorization = `Bearer ${token?.access}`;

    firstRequestCancelToken = cancelTokenSource();
    config.cancelToken = firstRequestCancelToken.token;
    // eslint-disable-next-line no-param-reassign
    config.timeout = TIMEOUT_TIME;
    return config;
  },
  (error) =>
    // 요청 전 에러 처리
    // add error handling before sending the request
    // @ts-ignore
    Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // // invalid token
    // const originalRequest = error.config;
    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY!);

    //   if (refreshToken) {
    //     try {
    //       const response = await axiosInstance.post(PATH_API.TOKEN_REISSUE, {
    //         refreshToken,
    //       });
    //       const newAccessToken = response.data.accessToken;
    //       localStorage.setItem(ACCESS_TOKEN_KEY!, newAccessToken);

    //       // axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    //       originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
    //       return await axiosInstance(originalRequest);
    //     } catch {
    //       // 리프레시 토큰도 만료된 경우 로그아웃 처리
    //       alert('로그인이 만료되었습니다.');
    //       localStorage.removeItem(ACCESS_TOKEN_KEY!);
    //       localStorage.removeItem(REFRESH_TOKEN_KEY!);

    //       window.location.reload();
    //       Promise.resolve('Error! failed token refresh');
    //     }
    //   }
    // }
    // timeout
    if (axios.isCancel(error)) {
      // 취소된 요청이므로 undefined로 프로미스를 해결함으로써 표시
      return;
    }
    if (error.response && error.response.status === 401) {
      // 토큰 갱신 로직을 여기에 처리
      // 모든 비동기 작업은 try-catch로 래핑되어야 함
      try {
        // 여기에 토큰 갱신 로직을 추가하세요
      } catch (refreshError) {
        console.error('토큰 갱신 실패', refreshError);
        // 갱신 실패 로직 처리, 로그인 페이지로 리다이렉트 등
        // @ts-ignore
        return Promise.reject(new Error('인증이 필요합니다'));
      }
    }
    // 그 외의 에러는 그대로 반환
    // @ts-ignore
    return Promise.reject(new Error((error.response && error.response.data) || '문제가 발생했습니다'));
  }
);
