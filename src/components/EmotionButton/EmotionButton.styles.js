/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const EmotionButtonBase = styled.button`
  width: 60px;
  height: 40px;
  border: none;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4px;

  .emotion_name {
    font-size: 10px;
  }

  .emotion_img {
    width: 20px;
    height: 25px;
  }
`;

const emotionButtonStyles = {
  1: css`
    background-color: rgba(216, 8, 8, 0.4);
    color: #f21717;
    padding-bottom: 2px;

    .emotion_img {
      width: 20px;
      height: 25px;
    }
  `,
  2: css`
    background-color: rgba(205, 82, 248, 0.4);
    color: #c525fe;
  `,
  3: css`
    background-color: rgba(143, 136, 145, 0.4);
    color: #918e92;
  `,
  4: css`
    background-color: rgba(255, 144, 13, 0.4);
    color: #ed9c24;
  `,
  5: css`
    background-color: rgba(241, 103, 203, 0.4);
    color: #fa57f4;
  `,
  6: css`
    background-color: rgba(255, 230, 3, 0.4);
    color: #f5c829;
    padding-bottom: 2px;

    .emotion_img {
      width: 12px;
      height: 25px;
    }
  `,
  7: css`
    background-color: rgba(13, 168, 255, 0.4);
    color: #0eb6ec;

    .emotion_img {
      width: 25px;
      height: 25px;
    }
  `,
  8: css`
    background-color: rgba(15, 107, 214, 0.4);
    color: #1b89c6;
  `,
};

export { EmotionButtonBase, emotionButtonStyles };
