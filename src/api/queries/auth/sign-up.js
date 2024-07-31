import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { PATH_API } from '../../path';
import { axiosInstance } from '../../axios';
import { QUERY_KEY } from '../../queryKeys';
import { setSession } from '../../api_utils';

// 카카오 간편인증 1차
export const useSignup = (options) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [QUERY_KEY.SIGN_UP],
    mutationFn: async (payload) => {
      const response = await axiosInstance.post(PATH_API.SIGN_UP, payload);
      return response.data;
    },
    onSuccess: (data) => {
      // @ts-ignore
      setSession(data);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SIGN_UP] });
    },
    onError: (error) => {},
    ...options,
  });
};
