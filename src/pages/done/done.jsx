import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { t } from 'i18next';
import { DonePage } from './styles';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/button.jsx';
import DoneComponent from '../../components/Done/Done.jsx';
import { PATH } from '../../route/path.js';

/**
 * @discription DonePage
 *  - 쿼리 파라미터로 받은 type에 따라 다른 메시지를 보여주는 페이지
 *   - type='password' => 비밀번호 변경 완료 메세지
 *   - type='signup' => 회원가입 완료 메세지
 *   - type='Nickname' => 닉네임 변경 완료 메세지
 * @returns {Element}
 * @constructor
 */

function Done() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'signup';

  return (
    <DonePage>
      <Header title="" iconSrc={Images.left} />
      <DoneComponent type={type} />
      <div className="bottom">
        <Button
          type="submit"
          label={t('done.go-to-home')}
          variant="BlackFull"
          size="medium"
          onClick={() => {
            window.location.href = PATH.HOME;
          }}
        />
      </div>
    </DonePage>
  );
}

export default Done;
