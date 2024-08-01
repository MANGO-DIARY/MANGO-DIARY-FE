import { PATH_API } from './path.js';

export const QUERY_KEY = {
  // auth
  SIGN_IN: PATH_API.SIGN_IN,
  SIGN_UP: PATH_API.SIGN_UP,
  SIGN_OUT: PATH_API.SIGN_OUT,
  PASSWORD_RESET: PATH_API.PASSWORD_RESET,
  // refresh token
  TOKEN_REISSUE: PATH_API.TOKEN_REISSUE,
  SEND_EMAIL: PATH_API.SEND_EMAIL,
  VERIFY_EMAIL: PATH_API.VERIFY_EMAIL,
};
