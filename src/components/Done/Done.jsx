import React from 'react';
import { t } from 'i18next';
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
              {t('done.password.typo1')}
            </div>
            <div className="item">
              <div className="highlight"> </div>
              {t('done.password.typo2')}
            </div>
          </div>
          <div className="comment">{t('done.password.typo3')}</div>
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
              {t('done.signup.typo1')}
            </div>
          </div>
          <div className="comment">
            {t('done.signup.typo2')}
            <br />
            {t('done.signup.typo3')}
            <br />
            {t('done.signup.typo4')}
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
              {t('done.nickname.typo1')}
            </div>
          </div>
          <div className="comment">
            {t('done.nickname.typo2')} <br />
            {t('done.nickname.typo3')}
          </div>
        </div>
      );
    }
  };

  return <DoneContain>{rendering()}</DoneContain>;
}

export default DoneComponent;
