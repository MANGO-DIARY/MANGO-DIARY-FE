/** @jsxImportSource @emotion/react */
import React from 'react';
import { EmotionButtonBase, emotionButtonStyles } from './EmotionButton.styles';
import getEmotionImage from '../../util/get-emotion-img';

function EmotionButton({ emotionId, emotionName, onClick }) {
  return (
    <EmotionButtonBase onClick={onClick} css={emotionButtonStyles[emotionName]}>
      <img className="emotion_img" src={getEmotionImage(emotionName)} alt="emotion" />
      <div className="emotion_name">{emotionName}</div>
    </EmotionButtonBase>
  );
}

export default EmotionButton;
