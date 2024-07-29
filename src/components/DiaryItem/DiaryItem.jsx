/** @jsxImportSource @emotion/react */
import React from 'react';
import { DiaryItemWrapper, ImgSection, CreatedDate, Content } from './DiaryItem.styles';
import getEmotionImage from '../../util/get-emotion-img';

function DiaryItem({ content, emotionId, createdDate }) {
  const date = new Date(createdDate);

  const year = date.getFullYear().toString().slice(2);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}년 ${month}월 ${day}일`;

  return (
    <DiaryItemWrapper>
      <ImgSection className={`img_section_${emotionId}`}>
        <CreatedDate>{formattedDate}</CreatedDate>
        <img src={getEmotionImage(emotionId)} alt="emotion" />
      </ImgSection>
      <Content>{content}</Content>
    </DiaryItemWrapper>
  );
}

export default DiaryItem;
