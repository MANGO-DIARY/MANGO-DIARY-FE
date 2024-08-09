import { useInfiniteQuery } from '@tanstack/react-query';
import { PATH_API } from '../../path';
import { axiosInstance } from '../../axios';

export const useDiaryList = (emotion) =>
  useInfiniteQuery({
    queryKey: [PATH_API.DIARY_LIST, emotion], // 감정을 쿼리 키에 포함
    queryFn: async ({ pageParam = 0 }) => {
      // pageParam을 사용하여 페이지 번호를 지정
      const response = await axiosInstance.get(PATH_API.DIARY_LIST, {
        params: { page: pageParam, size: 4, emotion },
      });
      return response.data;
    },
    initialPageParam: 0, // 초기 페이지 번호
    getNextPageParam: (lastData) => {
      // 다음 페이지가 있는지 확인
      if (lastData.last) return undefined; // 마지막 페이지라면 undefined 반환
      return lastData.number + 1; // 다음 페이지 번호 반환
    },
  });
