import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../axios';
import { QUERY_KEY } from '../../queryKeys';
import { PATH_API } from '../../path';

// useQuery를 사용하여 일기 상세 데이터를 가져오는 훅
export const useDiaryDetail = ({ diaryId }) =>
  useQuery({
    queryKey: [QUERY_KEY.DIARY_DETAIL, diaryId],
    queryFn: async () => {
      const response = await axiosInstance.get(PATH_API.DIARY, { params: { diaryId } });
      return response.data;
    },
  });
