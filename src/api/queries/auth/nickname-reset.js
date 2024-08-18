import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../axios';

import { PATH_API } from '../../path';
import { PATH } from '../../../route/path.js';

export const useNickNameReset = (options) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload) => {
      const response = await axiosInstance.patch(PATH_API.NICKNAME_RESET, payload);
      return response.data;
    },
    onSuccess: () => {
      navigate(`${PATH.DONE}?type=nickname`);
    },
    onError: (error) => {},
    ...options,
  });
};
