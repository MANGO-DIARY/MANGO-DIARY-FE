export const PATH_API = {
  // API_DOMAIN: 'http://43.200.195.86:8080/api/v1',
  API_DOMAIN: 'https://mangolion-server.site/api/v1',
  REDIRECT_URL: 'https://mango-diary.netlify.app/home',
  // auth
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  SIGN_OUT: '/auth/sign-out',
  KAKAO_LOGIN_URL: '/oauth/kakao/sign-in-uri',
  KAKAO_LOGIN: '/oauth/kakao/sign-in',
  PASSWORD_RESET: '/auth/reset-pw',
  NICKNAME_RESET: '/user',
  // refresh token
  TOKEN_REISSUE: '/auth/token-reissue',
  SEND_EMAIL: '/auth/mail/send',
  VERIFY_EMAIL: '/auth/mail/verify',
  DIARY_LIST: '/diary/all',
  DIARY_SEARCH: '/diary/search',
  MAIN: '/main',
  USER_INFO: '/user',
  CHART: '/statistics',
  CALENDAR: '/diary/all/month',
  EMOTION_ANALYZE: '/ai/emotion-analyze',
  COMMENT: '/ai/comment',
  DIARY: '/diary',
};

/**
- /oauth/{provider}/sign-in-uri
- /oauth/{provider}/sign-in
 */
