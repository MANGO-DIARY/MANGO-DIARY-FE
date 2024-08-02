import React from 'react';
import { SplashWrap } from './styles';
import { Images } from '../../styles/images';
import Button from '../../components/button/button';

function Splash() {
  const handleKakaoLogin = () => {
    console.log('kakao login');
  };
  return (
    <SplashWrap>
      <img src={Images.splash} alt="splash" />
      <div className="top">
        <div className="title">
          <div className="item">
            <div className="highlight"></div>
            아프지
          </div>
          <div className="item">
            <div className="highlight"></div>망고
          </div>
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
