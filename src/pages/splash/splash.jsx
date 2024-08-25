import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { SplashWrap } from './styles';
import { Images } from '../../styles/images';
import Button from '../../components/button/button';
import { axiosInstance } from '../../api/axios.js';
import { PATH } from '../../route/path.js';
import { PATH_API } from '../../api/path.js';

function Splash() {
  const navigate = useNavigate();
  const redirectUri = encodeURIComponent(PATH_API.REDIRECT_URL);

  const handleKakaoLogin = async () => {
    try {
      const response = await axiosInstance.get(`${PATH_API.KAKAO_LOGIN_URL}?redirect-uri=${redirectUri}`);
      console.log(response);
      window.location.href = response.data.signInUri;
    } catch (error) {
      console.error('Error fetching Kakao login URL:', error);
    }
  };
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (token) {
      navigate(PATH.HOME);
    }
  }, [navigate, token]);

  return (
    <SplashWrap>
      <img src={Images.splash} alt="splash" />
      <div className="top">
        <div className="title">
          <div className="item">
            <div className="highlight"></div>
            {t('splash.title1')}
          </div>
          <div className="item">
            <div className="highlight"></div>
            {t('splash.title2')}
          </div>
        </div>
        <div className="subtitle"> {t('splash.subtitle')}</div>
      </div>
      <div className="bottom">
        <Button label={t('splash.with-kakao')} variant="kakao" size="kakao" prevIcon={Images.kakao} onClick={handleKakaoLogin} />
        <a href={PATH.LOGIN} className="email">
          {t('splash.with-email')}
        </a>
      </div>
    </SplashWrap>
  );
}

export default Splash;
