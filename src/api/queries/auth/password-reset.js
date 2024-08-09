import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../axios';

import { PATH_API } from '../../path';
import { PATH } from '../../../route/path.js';

export const usePasswordReset = (options) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload) => {
      const response = await axiosInstance.post(PATH_API.PASSWORD_RESET, payload);
      return response.data;
    },
    onSuccess: () => {
      navigate(`${PATH.DONE}?type=password`);
    },
    onError: (error) => {},
    ...options,
  });
};
