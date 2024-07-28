import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginWrap } from './styles';
import InputForm from '../../components/InputForm/inputForm';
import FormProvider from '../../components/formProvider/FormProvider';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';

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
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <InputForm name="email" IconSrc={Images.email} placeholder="이메일을 입력해주세요." />
      </FormProvider>
    </LoginWrap>
  );
}

export default Login;
