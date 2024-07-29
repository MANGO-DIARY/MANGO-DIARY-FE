/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const EmotionButtonBase = styled.button`
  min-width: 84px;
  height: 58px;
  border: none;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;

  .emotion_name {
    font-size: 15px;
  }

  .emotion_img {
    width: 70%;
    height: 70%;
  }
`;

const emotionButtonStyles = {
  1: css`
    background-color: rgba(216, 8, 8, 0.4);
    color: #f21717;
    padding-bottom: 2px;

    .emotion_img {
      // width: 20px;
      // height: 25px;
    }
    :hover {
      border: 2px solid #f21717;
    }
  `,
  2: css`
    background-color: rgba(205, 82, 248, 0.4);
    color: #c525fe;

    :hover {
      border: 2px solid #c525fe;
    }
  `,
  3: css`
    background-color: rgba(143, 136, 145, 0.4);
    color: #918e92;

    :hover {
      border: 2px solid #918e92;
    }
  `,
  4: css`
    background-color: rgba(255, 144, 13, 0.4);
    color: #ed9c24;

    :hover {
      border: 2px solid #ed9c24;
    }
  `,
  5: css`
    background-color: rgba(241, 103, 203, 0.4);
    color: #fa57f4;

    :hover {
      border: 2px solid #fa57f4;
    }
  `,
  6: css`
    background-color: rgba(255, 230, 3, 0.4);
    color: #f5c829;
    padding-bottom: 2px;

    :hover {
      border: 2px solid #f5c829;
    }
  `,
  7: css`
    background-color: rgba(13, 168, 255, 0.4);
    color: #0eb6ec;

    :hover {
      border: 2px solid #0eb6ec;
    }
  `,
  8: css`
    background-color: rgba(15, 107, 214, 0.4);
    color: #1b89c6;

    :hover {
      border: 2px solid #1b89c6;
    }
  `,
};

export { EmotionButtonBase, emotionButtonStyles };
