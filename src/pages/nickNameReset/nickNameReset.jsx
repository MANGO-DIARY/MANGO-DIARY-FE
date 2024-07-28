import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { NickNameResetWrap } from './styles';
import InputForm from '../../components/InputForm/inputForm';
import FormProvider from '../../components/formProvider/FormProvider';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/button.jsx';

const defaultValues = {
  password: '',
  passwordConfirm: '',
};

function NickNameReset() {
  const navigate = useNavigate();

  // const resetNNMutation = useNickNameReset();

  const methods = useForm({
    defaultValues,
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
    //   nickname,
    // });
  };

  return (
    <NickNameResetWrap>
      <Header title="닉네임 재설정" iconSrc={Images.left} />
      <div className="top">
        <img src={Images.joy} alt="기쁨이 이미지" />
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <InputForm name="nickname" IconSrc={Images.person} placeholder="새 닉네임을 입력해주세요." />
        </div>
        <div className="bottom">
          <Button type="submit" label="닉네임 재설정하기" variant="BlackFull" size="medium" disabled={!isValid} />
        </div>
      </FormProvider>
    </NickNameResetWrap>
  );
}

export default NickNameReset;
