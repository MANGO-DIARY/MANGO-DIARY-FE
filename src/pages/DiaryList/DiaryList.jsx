/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryListWrapper, EmotionListWrapper } from './DiaryList.styles';
import Header from '../../components/header/Header';
import EmotionButton from '../../components/EmotionButton/EmotionButton';
import emotionList from '../../util/constants';
import DiaryItem from '../../components/DiaryItem/DiaryItem';
import { Images } from '../../styles/images';

function DiaryList({ data }) {
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
