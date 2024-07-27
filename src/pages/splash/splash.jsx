import React from 'react';
import { SplashWrap } from './style';
import { Images } from '../../styles/images';

function Splash() {
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
    </SplashWrap>
  );
}

export default Splash;
