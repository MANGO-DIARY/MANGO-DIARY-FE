import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DonePage } from './styles';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/button.jsx';

function Done() {
  const navigate = useNavigate();

  return (
    <DonePage>
      <Header title="이메일로 로그인" iconSrc={Images.left} />
      <div className="top">
        <img src={Images.happy} alt="기쁨이 이미지" />
        <div className="title">반가워요!</div>
        <div className="comment">
          회원가입이 완료되었습니다.
          <br /> 이제 오늘을 기록하고, <br />
          ai가 분석해주는 감정을 확인해보세요!
        </div>
      </div>

      <div className="bottom">
        <Button type="submit" label="시작하기" variant="BlackFull" size="medium" />
      </div>
    </DonePage>
  );
}

export default Done;
