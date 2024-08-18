import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { PATH_API } from '../../path';
import { axiosInstance } from '../../axios';
import { setSession } from '../../api_utils.js';

export const useKakaoLogin = (options) =>
  useMutation({
    mutationFn: async (payload) => {
      const response = await axiosInstance.post(PATH_API.KAKAO_LOGIN, payload);
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
      setSession(data);
    },
    onError: (error) => {
      console.error(error); // 에러를 콘솔에 출력해서 확인
    },
    ...options,
  });
