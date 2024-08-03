export const PATH_API = {
  API_DOMAIN: 'http://43.200.195.86:8080/api/v1',
  // auth
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  SIGN_OUT: '/auth/sign-out',
  PASSWORD_RESET: '/auth/reset-pw',
  // refresh token
  TOKEN_REISSUE: '/auth/token-reissue',
  SEND_EMAIL: '/auth/mail/send',
  VERIFY_EMAIL: '/auth/mail/verify',
  DIARY_LIST: '/diary/all',
  DIARY_SEARCH: '/diary/search',
  MAIN: '/main',
  USER_INFO: '/user',
};

/**
- /oauth/{provider}/sign-in-uri
- /oauth/{provider}/sign-in
 */
