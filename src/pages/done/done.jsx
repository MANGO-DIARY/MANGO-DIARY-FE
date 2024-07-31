import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DonePage } from './styles';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/button.jsx';
import DoneComponent from '../../components/Done/Done.jsx';

function Done() {
  const navigate = useNavigate();

  return (
    <DonePage>
      <Header title="이메일로 로그인" iconSrc={Images.left} />
      <DoneComponent />
      <div className="bottom">
        <Button type="submit" label="시작하기" variant="BlackFull" size="medium" />
      </div>
    </DonePage>
  );
}

export default Done;
