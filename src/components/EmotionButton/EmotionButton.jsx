/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmotionButtonBase, emotionButtonStyles } from './EmotionButton.styles';
import getEmotionImage from '../../util/get-emotion-img';

function EmotionButton({ num, ko, en, onClick }) {
  const { i18n } = useTranslation();
  return (
    <EmotionButtonBase onClick={onClick} css={emotionButtonStyles[num]}>
      <img className="emotion_img" src={getEmotionImage(num)} alt="emotion" />
      <div className="emotion_name">
        {i18n.languages[0] === 'ko' ? ko : en}
        {/* {t(`emotion.${num}`)} */}
      </div>
    </EmotionButtonBase>
  );
}

export default EmotionButton;
