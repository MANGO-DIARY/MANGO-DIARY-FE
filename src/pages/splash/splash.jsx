import React from 'react';
import { SplashWrap } from './style';
import { Images } from '../../styles/images';
import Button from '../../component/button/button';

function Splash() {
  const handleKakaoLogin = () => {
    console.log('kakao login');
  };
  return (
    <SplashWrap>
      <img src={Images.splash} alt="splash" />
      <div className="top">
        <div className="title">
          <span className="highlight margin">아프지</span>
          <br />
          <span className="highlight">망고</span>
        </div>
        <div className="subtitle">ai가 분석해주는 감정 일기</div>
      </div>
      <div className="bottom">
        <Button label="카카오로 계속하기" variant="kakao" size="kakao" prevIcon={Images.kakao} onClick={handleKakaoLogin} />
        <a href="/login" className="email">
          이메일로 로그인
        </a>
      </div>
    </SplashWrap>
  );
}

export default Splash;
