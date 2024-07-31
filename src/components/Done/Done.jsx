import { DoneContain } from './styles';
import { Images } from '../../styles/images.js';
import React from 'react';

function DoneComponent() {
  return (
    <DoneContain>
      <div className="top">
        <img src={Images.happy} alt="기쁨이 이미지" />
        <div className="title">반가워요!</div>
        <div className="comment">
          회원가입이 완료되었습니다.
          <br /> 이제 오늘을 기록하고, <br />
          ai가 분석해주는 감정을 확인해보세요!
        </div>
      </div>
    </DoneContain>
  );
}

export default DoneComponent;
