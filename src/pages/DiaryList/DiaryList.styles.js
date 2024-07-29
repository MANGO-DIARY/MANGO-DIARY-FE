/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DiaryListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const EmotionListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 21px;
  margin-left: 9px;
  gap: 12px;

  &::-webkit-scrollbar {
    height: 0;
  }
`;
