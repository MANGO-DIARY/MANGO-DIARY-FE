/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navBar/navBar';
import { SettingContainer } from './styles.js';
import UserGreeting from '../../components/userGreeting/userGreeting.jsx';
import { Images } from '../../styles/images.js';
import InputFormUI from '../../components/InputFormUI/inputForm.jsx';
import { PATH } from '../../route/path.js';
import { useUserInfo } from '../../api/queries/user/useUserInfo.js';
import { useSignOut } from '../../api/queries/auth/sign-out.js';

function Setting() {
  const navigate = useNavigate(); // 네비게이션 훅
  const { data: userInfo, isLoading: isUserLoading } = useUserInfo();
  const { mutate } = useSignOut();

  const handleLogout = async () => {
    mutate();
  };

  // 데이터가 있을 때의 렌더링
  return (
    <SettingContainer className="use-navbar">
      <div className="top">설정</div>
      <UserGreeting name={userInfo?.userName} />
      <div className="userInfo">
        <div className="title">정보</div>
        <div className="info">
          <div className="infoContent">Email</div>
          <InputFormUI inputValue={userInfo?.userEmail} name="userEmail" IconSrc={Images.email} disabled />
        </div>
        <div className="info">
          <div className="infoContent">Nickname</div>
          <InputFormUI inputValue={userInfo?.userName} name="userEmail" IconSrc={Images.person} disabled />
        </div>
      </div>
      <div className="moreWrap">
        <div className="more" onClick={() => navigate(PATH.NICKNAME_RESET)}>
          <div className="title">닉네임 변경</div>
          <img className="img" src={Images.arrowRight} alt="오른쪽 화살표" />
        </div>
        <div className="more" onClick={handleLogout}>
          <div className="title">로그아웃</div>
          <img className="img" src={Images.arrowRight} alt="오른쪽 화살표" />
        </div>
      </div>
      <div className="navBar">
        <NavBar />
      </div>
    </SettingContainer>
  );
}

export default Setting;
