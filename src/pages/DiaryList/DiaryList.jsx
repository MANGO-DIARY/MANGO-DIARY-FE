/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryListWrapper, EmotionListWrapper, EmotionAll, Toggle, ScrollableEmotionList } from './DiaryList.styles';
import Header from '../../components/header/Header';
import EmotionButton from '../../components/EmotionButton/EmotionButton';
import emotionList from '../../util/constants';
import DiaryItem from '../../components/DiaryItem/DiaryItem';
import { Images } from '../../styles/images';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import { Button } from '../../components/ToggleButton/ToggleButton.styles';

const mocData = [
  {
    id: 1,
    createdDate: new Date('2024-07-19').getTime(),
    emotionName: '신남',
    content: '안녀하세요 오늘 너무 즐거웠어요호호 . . .',
  },
  {
    id: 2,
    createdDate: new Date('2024-07-18').getTime(),
    emotionName: '기쁨',
    content: '2번 일기 내용',
  },
  {
    id: 3,
    createdDate: new Date('2024-07-28').getTime(),
    emotionName: '행복',
    content: '3번 일기 내용',
  },
  {
    id: 4,
    createdDate: new Date('2024-07-29').getTime(),
    emotionName: '신남',
    content: '4번 일기 내용',
  },
];

function DiaryList() {
  const data = mocData;

  const nav = useNavigate();
  const [selectedEmotionName, setSelectedEmotionName] = useState(null);

  const handleEmotionClick = (emotionName) => {
    setSelectedEmotionName(emotionName);
  };

  const handleShowAllClick = () => {
    setSelectedEmotionName(null);
  };

  const filteredData = selectedEmotionName !== null ? data.filter((item) => item.emotionName === selectedEmotionName) : data;

  return (
    <DiaryListWrapper>
      <Header title="일기장" iconSrc={Images.left} onClick={() => nav(-1)} showButtonRight onRightClick={() => nav('/search')} />
      <Toggle>
        <ToggleButton />
      </Toggle>
      <ScrollableEmotionList>
        <EmotionAll onClick={handleShowAllClick}> 전체일기</EmotionAll>
        {emotionList.map((item) => (
          <EmotionButton onClick={() => handleEmotionClick(item.emotionName)} key={item.emotionName} {...item} />
        ))}
      </ScrollableEmotionList>
      <DiaryListWrapper>
        {filteredData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </DiaryListWrapper>
    </DiaryListWrapper>
  );
}

export default DiaryList;
