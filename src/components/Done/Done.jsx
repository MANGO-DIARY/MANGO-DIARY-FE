import { DoneContain } from './styles';
import { Images } from '../../styles/images.js';
import React from 'react';

function DoneComponent({ type }) {
  // eslint-disable-next-line consistent-return
  const rendering = () => {
    if (type === 'password') {
      return (
        <div className="top">
          <img src={Images.happy} alt="기쁨이 이미지" />
          <div className="title">
            비밀번호가 <br />
            변경되었습니다
          </div>
          <div className="comment">
            회원가입이 완료되었습니다.
            <br /> 이제 오늘을 기록하고, <br />
            ai가 분석해주는 감정을 확인해보세요!
          </div>
        </div>
      );
    } else if (type === 'signup') {
      return (
        <div className="top">
          <img src={Images.happy} alt="기쁨이 이미지" />
          <div className="title">반가워요!</div>
          <div className="comment">
            회원가입이 완료되었습니다.
            <br /> 이제 오늘을 기록하고, <br />
            ai가 분석해주는 감정을 확인해보세요!
          </div>
        </div>
      );
    }
  };

  return (
    <DoneContain>
      <div className="top">
        <img src={Images.happy} alt="기쁨이 이미지" />
        <div className="title">
          비밀번호가 <br />
          변경되었습니다
        </div>
        <div className="comment">다시 로그인 페이지로 가볼까요?</div>
      </div>
    </DoneContain>
  );
}

export default DoneComponent;
