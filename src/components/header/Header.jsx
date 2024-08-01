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
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ButtonLeft = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 15px;
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
  position: absolute;
  right: 15px;
  cursor: pointer;
  border: none;
  background: none;
`;

function Header({ title, iconSrc, onClick, showButtonRight, onRightClick }) {
  return (
    <HeaderContainer>
      <ButtonLeft>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <img src={iconSrc} alt="Icon" onClick={onClick} />
      </ButtonLeft>
      <Title>{title}</Title>
      {showButtonRight && (
        <ButtonRight onClick={onRightClick}>
          <img src={Images.headerSearch} alt="icon" />
        </ButtonRight>
      )}
    </HeaderContainer>
  );
}

export default Header;
