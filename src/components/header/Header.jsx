/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { Images } from '../../styles/images';

const HeaderContainer = styled.div`
  width: 100%;
  height: 54px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ButtonLeft = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: none;
  background: none;
`;

const Title = styled.div`
  font-size: 27px;
  color: #333d4b;
`;

const ButtonRight = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
`;

function Header({ title, iconSrc, onClick, showButtonRight, onRightClick, rightIconSrc }) {
  return (
    <HeaderContainer>
      <ButtonLeft>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <img src={iconSrc} alt="leftIcon" onClick={onClick} />
      </ButtonLeft>
      <Title>{title}</Title>
      <ButtonRight onClick={onRightClick} style={{ visibility: showButtonRight ? 'visible' : 'hidden' }}>
        <img src={rightIconSrc} alt="rightIcon" />
      </ButtonRight>
    </HeaderContainer>
  );
}

export default Header;
