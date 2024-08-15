/** @jsxImportSource @emotion/react */
import React from 'react';
import dayjs from 'dayjs';
import { t } from 'i18next';
import { DiaryItemWrapper, ImgSection, CreatedDate, Content } from './DiaryItem.styles';
import getEmotionImage from '../../util/get-emotion-img';

function DiaryItem({ emotion, content, date, onClick }) {
  const DiaryDate = date ? dayjs(date) : null;

  const formattedDate = DiaryDate ? DiaryDate.format(t('YYYY년 MM월 DD일')) : null;

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
