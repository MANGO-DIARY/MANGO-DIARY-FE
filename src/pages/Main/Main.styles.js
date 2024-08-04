/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Images } from '../../styles/images';

// Main container styles
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

// Main_top styles
export const MainTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;
  border: none;
  font-size: 19px;
`;

// Main_middle styles
export const MainMiddle = styled.div`
  margin-top: 12px;
  margin: 0 10px;
  padding: 10px 0;
`;

// frame_header styles
export const FrameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  font-size: 25px;
`;

// button styles inside frame_header
export const HeaderButton = styled.button`
  padding-right: 10px;
  border: none;
  background: none;
`;

// Main_bottom styles
export const MainBottom = styled.div`
  margin-top: 12px;
  margin: 0 10px;
  padding: 10px 0;
  position: relative;
`;

// rank styles
export const Rank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

// emotion_rank styles
export const EmotionRank = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

// individual rank items
export const First = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0; /* podium의 1번 위에 배치 */
`;

export const Second = styled.div`
  position: absolute;
  left: 25%;
  transform: translateX(-20%);
  bottom: -20px; /* podium의 2번 위에 배치 */
`;

export const Third = styled.div`
  position: absolute;
  left: 75%;
  transform: translateX(-90%);
  bottom: -35px; /* podium의 3번 위에 배치 */
`;

// phase styles
export const Phase = styled.div`
  img {
    width: 100%; /* podium 이미지 크기 조절 */
  }
`;
