import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { PasswordResetWrap } from './styles';
import InputForm from '../../components/InputForm/inputForm';
import FormProvider from '../../components/formProvider/FormProvider';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/button.jsx';

const signUpSchema = Yup.object().shape({
  password: Yup.string()
    .required('비밀번호를 입력해주세요.')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{8,}$/, '비밀번호는 특수문자, 숫자를 포함하여 8자리 이상이어야 합니다.'),
  passwordConfirm: Yup.string()
    .required('비밀번호 확인을 입력해주세요.')
    .oneOf([Yup.ref('password'), ''], '비밀번호를 다시 입력해주세요.'),
});

const defaultValues = {
  password: '',
  passwordConfirm: '',
};

function NickNameReset() {
  // 설정 -> 비밀번호 재설정 이니까 기존 유저 정보가 있어야함.
  // const { userEmail } = useEmailAuthStore((state) => state);
  const navigate = useNavigate();

  // 만약에 없다면
  // useEffect(() => {
  //   if (!userEmail) {
  //   }
  // }, [userEmail, navigate]);

  // const resetPwMutation = usePasswordInit();

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(signUpSchema),
    mode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isValid, errors },
  } = methods;

  const onSubmit = (data) => {
    // const { password } = data;
    //
    // resetPwMutation.mutate({
    //   userEmail,
    //   password: sha256(password),
    // });
  };

  return (
    <PasswordResetWrap>
      <Header title="비밀번호 재설정" iconSrc={Images.left} />
      <div className="top">
        <img src={Images.joy} alt="기쁨이 이미지" />
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <InputForm name="passwordOld" IconSrc={Images.passKey} placeholder="기존 비밀번호를 입력해주세요." />
          <InputForm name="password" IconSrc={Images.passward} placeholder="새 비밀번호를 입력해주세요." />
          <InputForm name="passwordConfirm" IconSrc={Images.passwardReset} placeholder="비밀번호를 재입력해주세요." />
        </div>
        <div className="bottom">
          <Button type="submit" label="비밀번호 재설정하기" variant="BlackFull" size="medium" disabled={!isValid} />
        </div>
      </FormProvider>
    </PasswordResetWrap>
  );
}

export default NickNameReset;
