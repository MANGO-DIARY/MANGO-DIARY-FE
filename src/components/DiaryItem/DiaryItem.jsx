/** @jsxImportSource @emotion/react */
import React from 'react';
import { DiaryItemWrapper, ImgSection, CreatedDate, Content } from './DiaryItem.styles';
// import { getEmotionImage } from '../../util/get-emotion-img';

function DiaryItem() {
  const emotionId = 8;

  const date = new Date();

  const year = date.getFullYear().toString().slice(2);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}년 ${month}월 ${day}일`;

  return (
    <DiaryItemWrapper>
      <ImgSection className={`img_section_${emotionId}`}>
        <CreatedDate>{formattedDate}</CreatedDate>
        {/* <img src={getEmotionImage(emotionId)} alt="emotion" /> */}
      </ImgSection>
      <Content>안녕하세요 오늘 넘 즐거웠어요sssssssssssssssssssssssswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssssssssssssssssssssss 너무행복해</Content>
    </DiaryItemWrapper>
  );
}

export default DiaryItem;
