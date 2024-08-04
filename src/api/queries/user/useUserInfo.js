import { useQuery } from '@tanstack/react-query';
import { PATH_API } from '../../path';
import { axiosInstance } from '../../axios';

// useQuery를 사용하여 메인 데이터를 가져오는 훅
export const useUserInfo = () =>
  useQuery({
    queryKey: [PATH_API.USER_INFO],
    queryFn: async () => {
      const response = await axiosInstance.get(PATH_API.USER_INFO);
      return response.data;
    },
  });
