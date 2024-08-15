import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

import { Alert } from '@mui/material';
import { LoginWrap } from './styles';
import InputForm from '../../components/InputForm/inputForm';
import FormProvider from '../../components/formProvider/FormProvider';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/button.jsx';
import { PATH } from '../../route/path.js';
import { useLoginIn } from '../../api/queries/auth/log-in.js';

const defaultValues = {
  userEmail: '',
  password: '',
};

function Login() {
  const loginInMutation = useLoginIn();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const signupSchema = Yup.object().shape({
    userEmail: Yup.string()
      .required(t('yup.email-required-error'))
      .matches(/^[a-zA-Z0-9+-_.]+@[a-z]+\.[a-z]{2,3}/i, t('yup.email-format-error')),
    password: Yup.string()
      .required(t('yup.password-required-error'))
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{8,}$/, t('yup.password-format-error')),
  });

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(signupSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
    watch,
  } = methods;

  const onSubmit = (data) => {
    const { userEmail, password } = data;
    loginInMutation.mutate(
      {
        userEmail: userEmail,
        password: password,
      },
      {
        onSuccess: () => {
          navigate(PATH.HOME);
        },
        onError: (error) => {
          console.log(error.message);
          setErrorMessage(error.message);
        },
      }
    );
  };

  const onInvalid = (error) => {
    if (error.userEmail) {
      console.log('error');
    } else if (error.password) {
      console.log('error');
    }
  };

  return (
    <LoginWrap>
      <Header title={t('login.header-title')} iconSrc={Images.left} onClick={() => navigate(PATH.root)} />
      <div className="top">
        <img src={Images.joy} alt="기쁨이 이미지" />
        <div className="comment">
          {t('login.top-typo1')}
          <br />
          {t('login.top-typo2')}
          <br />
          {t('login.top-typo3')}
        </div>
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div className="input">
          <InputForm name="userEmail" IconSrc={Images.email} placeholder={t('login.email-placeholder')} />
          <InputForm type="password" name="password" IconSrc={Images.passward} placeholder={t('login.password-placeholder')} />
          <Button type="button" label={t('login.go-to-signup')} variant="OutlineBlack" size="small" disabled={!isValid} onClick={() => navigate(PATH.SIGNUP)} />
          <a href={PATH.PASSWORD_RESET} className="password-reset">
            {t('login.password-reset')}
          </a>
        </div>
        <div className="bottom">
          <Button type="submit" label={t('login.next')} variant="BlackFull" size="medium" disabled={!isValid} />
        </div>
      </FormProvider>
      {errorMessage && (
        <Alert
          severity="error"
          onClose={() => {
            setErrorMessage('');
          }}
          sx={{ margin: '0 30px' }}
        >
          {errorMessage}
        </Alert>
      )}
    </LoginWrap>
  );
}

export default Login;
