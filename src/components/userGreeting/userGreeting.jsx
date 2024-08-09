import React from 'react';
import { css } from '@emotion/react';
import { UserGreetingWrap } from './styles.js';

const containerStyle = css`
  align-items: flex-start;
  border-radius: 15px;
  display: flex;
  gap: 20px;
  overflow: hidden;
  color: rgba(3, 3, 3, 1);
  justify-content: flex-start;
  padding: 20px 10px 20px 20px;
  font:
    700 22px/20px Pretendard,
    sans-serif;
`;

const avatarStyle = css`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 70px;
  border-radius: 45px;
`;

const greetingStyle = css`
  width: 243px;
  font-family: 'Ownglyph ryurue', sans-serif;
  font-weight: 400;
  color: rgba(3, 3, 3, 1);
`;

const questionMarkStyle = css`
  letter-spacing: 2px;
`;

function UserGreeting({ name }) {
  return (
    <UserGreetingWrap>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0057a916b79329c3e7f2eacc0c84139f28b1e2d363d01f4ef2764710b444ea9e?apiKey=2f1c3d702854430c9d5f68ac3d9e3238&&apiKey=2f1c3d702854430c9d5f68ac3d9e3238"
        className="img"
      />
      <div className="greetingStyle">
        <span>{name} </span>
        <span>님, </span>
        <br />
        <span>오늘 하루는 어떠셨나요?</span>
      </div>
    </UserGreetingWrap>
  );
}

export default UserGreeting;
