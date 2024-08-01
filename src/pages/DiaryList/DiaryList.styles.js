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

export const EmotionAll = styled.button`
  min-width: 84px;
  height: 58px;
  font-size: 17px;
  border: none;
  border-radius: 30px;
  background-color: rgba(182, 177, 181, 0.2);
  cursor: pointer;
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;

  :hover {
    border: 2px solid #d9d9d9;
  }
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  margin-bottom: 13px;
`;
