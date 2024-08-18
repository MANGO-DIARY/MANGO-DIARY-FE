import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { LoginWrap } from './styles';
import InputForm from '../../components/InputForm/inputForm';
import FormProvider from '../../components/formProvider/FormProvider';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/button.jsx';
import { PATH } from '../../route/path.js';
import { useLoginIn } from '../../api/queries/auth/log-in.js';

const signupSchema = Yup.object().shape({
  userEmail: Yup.string()
    .required('이메일을 입력해주세요.')
    .matches(/^[a-zA-Z0-9+-_.]+@[a-z]+\.[a-z]{2,3}/i, '이메일 형식이 아닙니다.'),
  password: Yup.string()
    .required('비밀번호를 입력해주세요.')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{8,}$/, '비밀번호는 특수문자, 숫자를 포함하여 8자리 이상이어야 합니다.'),
});

const defaultValues = {
  userEmail: '',
  password: '',
};

function Login() {
  const loginInMutation = useLoginIn();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

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
      <Header title="이메일로 로그인" iconSrc={Images.left} onClick={() => navigate(PATH.root)} />
      <div className="top">
        <img src={Images.joy} alt="기쁨이 이미지" />
        <div className="comment">
          오늘 하루를 들려주세요.
          <br />
          AI 로 감정을 분석해줄게요.
          <br /> 최근 내 기분이 어땠는지 확인해보세요!
        </div>
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div className="input">
          <InputForm name="userEmail" IconSrc={Images.email} placeholder="이메일을 입력해주세요." />
          <InputForm type="password" name="password" IconSrc={Images.passward} placeholder="비밀번호를 입력해주세요." />
          <Button type="button" label="회원가입 하러가기" variant="OutlineBlack" size="small" disabled={!isValid} onClick={() => navigate(PATH.SIGNUP)} />
          <a href={PATH.PASSWORD_RESET} className="password-reset">
            비밀번호 재설정{' '}
          </a>
        </div>
        <div className="bottom">
          <Button type="submit" label="다음" variant="BlackFull" size="medium" disabled={!isValid} />
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
