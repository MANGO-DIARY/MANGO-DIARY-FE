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
        <div className="comment">
          오늘 하루를 들려주세요.
          <br />
          AI 로 감정을 분석해줄게요.
          <br /> 최근 내 기분이 어땠는지 확인해보세요!
        </div>
      </div>

      <div className="bottom">
        <Button type="submit" label="다음" variant="BlackFull" size="medium" />
      </div>
    </DonePage>
  );
}

export default Done;
