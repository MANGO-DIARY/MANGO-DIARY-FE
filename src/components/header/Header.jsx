/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

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

const Button = styled.button`
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

function Header({ title, iconSrc, onClick }) {
  return (
    <HeaderContainer>
      <Button>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <img src={iconSrc} alt="Icon" onClick={onClick} />
      </Button>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}

export default Header;
