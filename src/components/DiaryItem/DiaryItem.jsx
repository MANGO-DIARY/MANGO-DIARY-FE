/** @jsxImportSource @emotion/react */
import React from 'react';
import { DiaryItemWrapper, ImgSection, CreatedDate, Content } from './DiaryItem.styles';
import getEmotionImage from '../../util/get-emotion-img';

function DiaryItem({ emotion, content, date, onClick }) {
  const DiaryDate = date ? new Date(date) : null;

  const formattedDate = DiaryDate ? `${DiaryDate.getFullYear().toString().slice(2)}년 ${DiaryDate.getMonth() + 1}월 ${DiaryDate.getDate()}일` : null;

  return (
    <DiaryItemWrapper onClick={onClick}>
      <ImgSection className={`img_section_${emotion}`}>
        {formattedDate && <CreatedDate>{formattedDate}</CreatedDate>}
        <img src={getEmotionImage(emotion)} alt="emotion" />
      </ImgSection>
      <Content>{content}</Content>
    </DiaryItemWrapper>
  );
}

export default DiaryItem;
