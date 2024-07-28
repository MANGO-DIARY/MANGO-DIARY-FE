import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { LoginWrap } from './styles';
import InputForm from '../../components/InputForm/inputForm';
import FormProvider from '../../components/formProvider/FormProvider';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/button.jsx';

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
  // const signInMutation = useSignIn();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(signupSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (data) => {
    // const { userEmail, password } = data;
    // signInMutation.mutate({
    //   userEmail,
    //   password: sha256(password),
    // });
  };

  const onInvalid = (error) => {
    if (error.userEmail) {
      console.log('error');
    }
    if (error.password) {
      console.log('error');
    }
  };

  return (
    <LoginWrap>
      <Header title="이메일로 로그인" iconSrc={Images.left} />
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
          <InputForm name="email" IconSrc={Images.email} placeholder="이메일을 입력해주세요." />
          <InputForm name="password" IconSrc={Images.passward} placeholder="비밀번호를 입력해주세요." />
          <Button label="회원가입 하러가기" variant="OutlineBlack" size="xsmall" disabled={!isValid} onClick={navigate('/signup')} />
        </div>
        <div className="bottom">
          <Button type="submit" label="다음" variant="BlackFull" size="medium" disabled={!isValid} />
        </div>
      </FormProvider>
    </LoginWrap>
  );
}

export default Login;
