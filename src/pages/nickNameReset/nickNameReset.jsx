import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

import { Alert } from '@mui/material';
import { NickNameResetWrap } from './styles';
import InputForm from '../../components/InputForm/inputForm';
import FormProvider from '../../components/formProvider/FormProvider';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/button.jsx';
import { useNickNameReset } from '../../api/queries/auth/nickname-reset.js';
import { PATH } from '../../route/path.js';

const defaultValues = {
  password: '',
  passwordConfirm: '',
};

function NickNameReset() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const nicknameResetMutation = useNickNameReset();

  const signUpSchema = Yup.object().shape({
    userName: Yup.string().required(t('yup.name-required-error')).max(12, t('yup.name-format-error')),
  });

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
    const { userName } = data;

    nicknameResetMutation.mutate(
      {
        userName,
      },
      {
        onSuccess: () => {
          setSuccessMessage(t('nickname-reset.success-message'));
          setErrorMessage('');
        },
        onError: (error) => {
          setErrorMessage(error.message ? error.message : t('nickname-reset.success-message'));
          setSuccessMessage('');
        },
      }
    );
  };

  return (
    <NickNameResetWrap>
      <Header title={t('nickname-reset.header-title')} iconSrc={Images.left} onClick={() => navigate(PATH.SETTING)} />
      <div className="top">
        <img src={Images.joy} alt="기쁨이 이미지" />
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <InputForm name="userName" IconSrc={Images.person} placeholder={t('nickname-reset.nickname-placeholder')} />
        </div>
        <div className="bottom">
          <Button type="submit" label={t('nickname-reset.submit')} variant="BlackFull" size="medium" disabled={!isValid} />
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
