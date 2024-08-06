import React from 'react';
import { DoneContain } from './styles';
import { Images } from '../../styles/images.js';

function DoneComponent({ type }) {
  const rendering = () => {
    if (type === 'password') {
      return (
        <div className="top">
          <img src={Images.happy} alt="기쁨이 이미지" />
          <div className="title">
            <div className="item">
              <div className="highlight"> </div>
              비밀번호가
            </div>
            <div className="item">
              <div className="highlight"> </div>
              변경되었습니다
            </div>
          </div>
          <div className="comment">다시 로그인 페이지로 가볼까요?</div>
        </div>
      );
    }
    if (type === 'signup') {
      return (
        <div className="top">
          <img src={Images.happy} alt="기쁨이 이미지" />
          <div className="title">
            <div className="item">
              <div className="highlight"></div>
              반가워요!
            </div>
          </div>
          <div className="comment">
            회원가입이 완료되었습니다.
            <br /> 이제 오늘을 기록하고, <br />
            ai가 분석해주는 감정을 확인해보세요!
          </div>
        </div>
      );
    }
    if (type === 'nickname') {
      return (
        <div className="top">
          <img src={Images.happy} alt="기쁨이 이미지" />
          <div className="title">
            <div className="item">
              <div className="highlight"></div>
              닉네임이 변경되었습니다.
            </div>
          </div>
          <div className="comment">
            이제 새로운 닉네임으로 <br />
            일기를 작성해볼까요?
          </div>
        </div>
      );
    }
  };

  return <DoneContain>{rendering()}</DoneContain>;
}

export default DoneComponent;
