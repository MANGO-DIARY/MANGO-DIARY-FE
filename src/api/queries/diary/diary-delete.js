import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '../../axios';
import { QUERY_KEY } from '../../queryKeys';
import { PATH_API } from '../../path';

// useQuery를 사용하여 일기 상세 데이터를 가져오는 훅
export const useDiaryDelelte = ({ diaryId }, options) =>
  useMutation({
    queryKey: [QUERY_KEY.DIARY_DELETE, diaryId],
    mutationFn: async (id) => {
      const response = await axiosInstance.delete(PATH_API.DIARY, { data: { diaryId } });
      return response.data;
    },
    ...options,
  });
