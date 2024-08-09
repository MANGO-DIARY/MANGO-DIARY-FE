import { useInfiniteQuery } from '@tanstack/react-query';
import { PATH_API } from '../../path';
import { axiosInstance } from '../../axios';

export const useDiarySearch = (keyword) =>
  useInfiniteQuery({
    queryKey: [PATH_API.DIARY_SEARCH, keyword],
    queryFn: async ({ pageParam = 0 }) => {
      // pageParam을 사용하여 페이지 번호를 지정
      const response = await axiosInstance.get(PATH_API.DIARY_SEARCH, {
        params: { keyword, page: pageParam, size: 4 },
      });
      console.log(keyword);
      return response.data;
    },
    initialPageParam: 0, // 초기 페이지 번호
    getNextPageParam: (lastPage) => {
      if (lastPage.last) return undefined; // 마지막 페이지라면 undefined 반환
      return lastPage.number + 1; // 다음 페이지 번호 반환
    },
    enabled: keyword.trim() !== '', // 키워드가 빈 문자열이 아니면 쿼리 활성화
  });
