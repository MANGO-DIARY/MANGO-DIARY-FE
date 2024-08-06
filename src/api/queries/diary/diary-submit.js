import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../axios';

import { PATH_API } from '../../path';
import { PATH } from '../../../route/path.js';

export const useDiarySubmit = (options) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload) => {
      const response = await axiosInstance.post(PATH_API.DIARY, payload);
      return response.data;
    },
    onSuccess: (data) => {
      navigate(PATH.DIARYDETAIL_ENDPOINT + data.diaryId);
    },
    onError: (error) => {},
    ...options,
  });
};
