/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryListWrapper, EmotionListWrapper } from './DiaryList.styles';
import Header from '../../components/header/Header';
import EmotionButton from '../../components/EmotionButton/EmotionButton';
import emotionList from '../../util/constants';
import DiaryItem from '../../components/DiaryItem/DiaryItem';
import { Images } from '../../styles/images';

const mocData = [
  {
    id: 1,
    createdDate: new Date('2024-07-19').getTime(),
    emotionId: 1,
    content: '안녀하세요 오늘 너무 즐거웠어요호호 . . .',
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

function DiaryList() {
  const data = mocData;

  const nav = useNavigate();
  const [selectedEmotionId, setSelectedEmotionId] = useState(1);

  const handleEmotionClick = (emotionId) => {
    setSelectedEmotionId(emotionId);
  };

  const filteredData = selectedEmotionId ? data.filter((item) => item.emotionId === selectedEmotionId) : data;

  return (
    <DiaryListWrapper>
      <Header title="일기장" iconSrc={Images.left} onClick={() => nav(-1)} />
      <EmotionListWrapper>
        {emotionList.map((item) => (
          <EmotionButton onClick={() => handleEmotionClick(item.emotionId)} key={item.emotionId} {...item} />
        ))}
      </EmotionListWrapper>
      <DiaryListWrapper>
        {filteredData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </DiaryListWrapper>
    </DiaryListWrapper>
  );
}

export default DiaryList;
