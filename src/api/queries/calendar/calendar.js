import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../axios';
import { QUERY_KEY } from '../../queryKeys';
import { PATH_API } from '../../path';

// useQuery를 사용하여 캘린더 데이터를 가져오는 훅
export const useCalendar = ({ yearMonth }) =>
  useQuery({
    queryKey: [QUERY_KEY.CALENDAR, yearMonth],
    queryFn: async () => {
      const response = await axiosInstance.get(PATH_API.CALENDAR, { params: { yearMonth } });
      return response.data;
    },
  });
