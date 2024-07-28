/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  width: 100%;
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
  left: 0%;
  cursor: pointer;
  border: none;
  background: none;
`;

const Title = styled.div`
  font-size: 27px;
  color: #333d4b;
`;

function Header({ title, iconSrc }) {
  return (
    <HeaderContainer>
      <Button>
        <img src={iconSrc} alt="Icon" />
      </Button>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}

export default Header;
