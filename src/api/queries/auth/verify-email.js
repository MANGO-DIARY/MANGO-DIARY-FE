import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { PATH_API } from '../../path';
import { axiosInstance } from '../../axios';

export const useVerifyEmail = (options) => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: async (payload) => {
      const response = await axiosInstance.post(PATH_API.VERIFY_EMAIL, payload);
      return response.data;
    },
    onError: (error) => {
      enqueueSnackbar(error?.message, { variant: 'error' });
    },
    ...options,
  });
};
