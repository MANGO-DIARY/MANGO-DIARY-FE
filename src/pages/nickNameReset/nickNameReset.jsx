import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { NickNameResetWrap } from './styles';
import InputForm from '../../components/InputForm/inputForm';
import FormProvider from '../../components/formProvider/FormProvider';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/button.jsx';
import { useNickNameReset } from '../../api/queries/auth/nickname-reset.js';

const defaultValues = {
  password: '',
  passwordConfirm: '',
};

function NickNameReset() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const nicknameResetMutation = useNickNameReset();

  const methods = useForm({
    defaultValues,
    mode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isValid, errors },
  } = methods;

  const onSubmit = (data) => {
    const { userName } = data;

    nicknameResetMutation.mutate(
      {
        userName,
      },
      {
        onSuccess: () => {
          setSuccessMessage('이메일 인증이 완료되었습니다.');
          setErrorMessage('');
        },
        onError: (error) => {
          setErrorMessage(error.message ? error.message : '알 수 없는 오류가 발생했습니다.');
          setSuccessMessage('');
        },
      }
    );
  };

  return (
    <NickNameResetWrap>
      <Header title="닉네임 재설정" iconSrc={Images.left} />
      <div className="top">
        <img src={Images.joy} alt="기쁨이 이미지" />
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <InputForm name="userName" IconSrc={Images.person} placeholder="새 닉네임을 입력해주세요." />
        </div>
        <div className="bottom">
          <Button type="submit" label="닉네임 재설정하기" variant="BlackFull" size="medium" disabled={!isValid} />
        </div>
      </FormProvider>
      {successMessage && (
        <Alert
          severity="success"
          onClose={() => {
            setSuccessMessage('');
          }}
          sx={{ margin: '10px 30px' }}
        >
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert
          severity="error"
          onClose={() => {
            setErrorMessage('');
          }}
          sx={{ margin: '10px 30px' }}
        >
          {errorMessage}
        </Alert>
      )}
    </NickNameResetWrap>
  );
}

export default NickNameReset;
