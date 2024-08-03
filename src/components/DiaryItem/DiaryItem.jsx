/** @jsxImportSource @emotion/react */
import React from 'react';
import { DiaryItemWrapper, ImgSection, CreatedDate, Content } from './DiaryItem.styles';
import getEmotionImage from '../../util/get-emotion-img';

function DiaryItem({ emotion, content, date }) {
  const DiaryDate = new Date(date);

  const year = DiaryDate.getFullYear().toString().slice(2);
  const month = DiaryDate.getMonth() + 1;
  const day = DiaryDate.getDate();

  const formattedDate = `${year}년 ${month}월 ${day}일`;

  return (
    <DiaryItemWrapper>
      <ImgSection className={`img_section_${emotion}`}>
        <CreatedDate>{formattedDate}</CreatedDate>
        <img src={getEmotionImage(emotion)} alt="emotion" />
      </ImgSection>
      <Content>{content}</Content>
    </DiaryItemWrapper>
  );
}

export default DiaryItem;
