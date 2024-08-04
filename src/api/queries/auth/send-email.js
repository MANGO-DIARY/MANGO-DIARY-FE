import { useMutation } from '@tanstack/react-query';
import { closeSnackbar, useSnackbar } from 'notistack';
import { Alert } from '@mui/material';
import { PATH_API } from '../../path';
import { axiosInstance } from '../../axios';

export const useSendEmail = (options) => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: async (payload) => {
      const response = await axiosInstance.post(PATH_API.SEND_EMAIL, payload);
      return response.data;
    },
    onError: (error) => error,
    ...options,
  });
};
