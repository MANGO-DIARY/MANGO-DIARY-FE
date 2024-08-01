/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchWrapper, SearchBar, SearchInputWrapper, SearchInput, InputCancel, CancelButton } from './Search.styles';
import DiaryItem from '../../components/DiaryItem/DiaryItem';
import { Images } from '../../styles/images';

const mockData = [
  {
    id: 1,
    createdDate: new Date('2024-07-19').getTime(),
    emotionId: 1,
    content: '안녕하세요 오늘 너무 즐거웠어요호호 . . .',
  },
  {
    id: 2,
    createdDate: new Date('2024-07-18').getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
  {
    id: 3,
    createdDate: new Date('2024-07-28').getTime(),
    emotionId: 3,
    content: '3번 일기 내용',
  },
  {
    id: 4,
    createdDate: new Date('2024-07-29').getTime(),
    emotionId: 1,
    content: '4번 일기 내용',
  },
];

function Search() {
  const [searchItem, setSearchItem] = useState(null);
  const nav = useNavigate();

  const filteredData = searchItem ? mockData.filter((item) => item.content.toLowerCase().includes(searchItem.toLowerCase())) : [];
  return (
    <SearchWrapper>
      <SearchBar>
        <SearchInputWrapper>
          <img src={Images.search} alt="icon" />
          <SearchInput type="text" placeholder="검색어를 입력해주세요." value={searchItem || ''} onChange={(e) => setSearchItem(e.target.value)} />
          <InputCancel onClick={() => setSearchItem('')}>
            <img src={Images.cancel} alt="icon" />
          </InputCancel>
        </SearchInputWrapper>
        <CancelButton onClick={() => nav('/diaryList')}>취소</CancelButton>
      </SearchBar>
      {filteredData.map((item) => (
        <DiaryItem key={item.id} {...item} />
      ))}
    </SearchWrapper>
  );
}

export default Search;
