/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navBar/navBar';
import { SettingContainer } from './styles.js';
import UserGreeting from '../../components/userGreeting/userGreeting.jsx';
import { Images } from '../../styles/images.js';
import InputFormUI from '../../components/InputFormUI/inputForm.jsx';
import { PATH } from '../../route/path.js';

function Setting() {
  const navigate = useNavigate(); // 네비게이션 훅

  // 데이터가 있을 때의 렌더링
  return (
    <SettingContainer>
      <div className="top">설정</div>
      <UserGreeting name="김민정" />
      <div className="userInfo">
        <div className="title">정보</div>
        <div className="info">
          <div className="infoContent">Email</div>
          <InputFormUI inputValue="유저 이메일" name="userEmail" IconSrc={Images.email} disabled />
        </div>
        <div className="info">
          <div className="infoContent">Nickname</div>
          <InputFormUI inputValue="닉네임" name="userEmail" IconSrc={Images.person} disabled />
        </div>
      </div>
      <div className="more" onClick={() => navigate(PATH.NICKNAME_RESET)}>
        <div className="title">닉네임 변경</div>
        <img className="img" src={Images.arrowRight} alt="오른쪽 화살표" />
      </div>
      <div className="navBar">
        <NavBar />
      </div>
    </SettingContainer>
  );
}

export default Setting;
