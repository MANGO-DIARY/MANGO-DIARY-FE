import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { PATH_API } from '../../path';
import { axiosInstance } from '../../axios';
import { QUERY_KEY } from '../../queryKeys';
import { removeSession } from '../../api_utils.js';
import { PATH } from '../../../route/path.js';

export const useSignOut = (options) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEY.SIGN_IN],
    mutationFn: async () => {
      const response = await axiosInstance.delete(PATH_API.SIGN_OUT);
      return response.data;
    },
    onSuccess: () => {
      removeSession();
      // 모든 캐시 제거
      queryClient.clear();
      navigate(PATH.root);
    },
    onError: (error) => {},
    ...options,
  });
};
