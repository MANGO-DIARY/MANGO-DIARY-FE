/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { SearchWrapper, SearchBar, SearchInputWrapper, SearchInput, InputCancel, CancelButton, NavBarWrapper } from './Search.styles';
import DiaryItem from '../../components/DiaryItem/DiaryItem';
import { Images } from '../../styles/images';
import { useDiarySearch } from '../../api/queries/diary/diary-search';
import NavBar from '../../components/navBar/navBar';
import { DiaryContent } from '../DiaryList/DiaryList.styles';

function Search() {
  const [keyword, setKeyword] = useState('');
  const { ref, inView } = useInView();
  const nav = useNavigate();

  const { data, isLoading, isError, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useDiarySearch(keyword);

  useEffect(() => {
    if (keyword.trim() === '') {
      // 키워드가 빈 문자열일 경우, refetch하지 않고 데이터 초기화
      // 데이터 초기화를 위해 상태를 빈 배열로 설정하거나 리덕스 등을 사용할 수 있음
    } else {
      refetch();
    }
  }, [keyword, refetch]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.target.blur();
    }
  };

  // 콘솔 로그로 데이터 구조 확인
  console.log('Data:', data);

  // 데이터가 없는 경우를 판별
  const isNotData = !isLoading && data && data.pages && data.pages.flatMap((page) => page.content).length === 0;

  return (
    <SearchWrapper>
      <SearchBar>
        <SearchInputWrapper>
          <img src={Images.search} alt="icon" />
          <SearchInput type="text" placeholder="검색어를 입력해주세요." value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={handleKeyDown} />
          <InputCancel onClick={() => setKeyword('')}>
            <img src={Images.cancel} alt="icon" />
          </InputCancel>
        </SearchInputWrapper>
        <CancelButton onClick={() => nav('/diary-list')}>취소</CancelButton>
      </SearchBar>
      <DiaryContent>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong...</p>}
        {isNotData && <p>No results found.</p>}

        {/* 데이터 렌더링 */}
        {data && data.pages && data.pages.map((page) => page.content.map((item) => <DiaryItem key={item.id} {...item} />))}
        <div ref={ref} style={{ height: 20, visibility: 'hidden' }} />
        {isFetchingNextPage && <p>Loading more...</p>}
      </DiaryContent>
      <NavBarWrapper>
        <NavBar />
      </NavBarWrapper>
    </SearchWrapper>
  );
}

export default Search;
