/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DiaryListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmotionListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 21px;
  /* margin-left: 9px; */
  gap: 12px;
  padding: 0 8px 0 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NoneData = styled.div`
  width: 100%;
  margin-top: 200px;
  text-align: center;
`;

export const EmotionAll = styled.button`
  min-width: 84px;
  height: 58px;
  font-size: 15px;
  color: black;
  border: none;
  border-radius: 30px;
  background-color: rgba(182, 177, 181, 0.2);
  cursor: pointer;
  font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;

  :hover {
    border: 2px solid #d9d9d9;
    color: black;
  }
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  margin-bottom: 13px;
`;

export function ScrollableEmotionList({ children }) {
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrameId = useRef(null);

  const handleMouseDown = (e) => {
    isDown.current = true;
    scrollRef.current.classList.add('grabbing');
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    scrollRef.current.classList.remove('grabbing');
    cancelAnimationFrame(animationFrameId.current);
  };

  const handleMouseUp = () => {
    isDown.current = false;
    scrollRef.current.classList.remove('grabbing');
    cancelAnimationFrame(animationFrameId.current);
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 0.5;

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    });
  };

  return React.createElement(
    EmotionListWrapper,
    {
      ref: scrollRef,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
    },
    children
  );
}
