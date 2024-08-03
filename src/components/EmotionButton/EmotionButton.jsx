/** @jsxImportSource @emotion/react */
import React from 'react';
import { EmotionButtonBase, emotionButtonStyles } from './EmotionButton.styles';
import getEmotionImage from '../../util/get-emotion-img';

function EmotionButton({ emotionId, emotion, onClick }) {
  return (
    <EmotionButtonBase onClick={onClick} css={emotionButtonStyles[emotion]}>
      <img className="emotion_img" src={getEmotionImage(emotion)} alt="emotion" />
      <div className="emotion_name">{emotion}</div>
    </EmotionButtonBase>
  );
}

export default EmotionButton;
