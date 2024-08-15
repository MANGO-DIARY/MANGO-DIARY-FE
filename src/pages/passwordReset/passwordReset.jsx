import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { t } from 'i18next';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { Alert } from '@mui/material';
import { PasswordResetWrap } from './styles';
import InputForm from '../../components/InputForm/inputForm';
import FormProvider from '../../components/formProvider/FormProvider';

import { Images } from '../../styles/images';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/button.jsx';
import { useSendEmail } from '../../api/queries/auth/send-email.js';
import { useVerifyEmail } from '../../api/queries/auth/verify-email.js';
import { usePasswordReset } from '../../api/queries/auth/password-reset.js';
import useEmailAuthStore from '../../store/auth/emailAuthStore.js';

const defaultValues = {
  userEmail: '',
  password: '',
  passwordConfirm: '',
};

function PasswordReset() {
  const navigate = useNavigate();
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const { endAt, isAuthenticated, setEndAt, setIsAuthenticated } = useEmailAuthStore((state) => state);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [emailDisabled, setEmailDisabled] = useState(false);
  const [verificationDisabled, setVerificationDisabled] = useState(false);

  const { mutate: passwordResetMutate, isPending: passwordResetPending } = usePasswordReset();
  const { mutate: emailMutate, isPending: emailPending } = useSendEmail();
  const { mutate: verifyMutate, isPending: verifyPending } = useVerifyEmail();

  const signUpSchema = Yup.object().shape({
    userEmail: Yup.string()
      .required(t('yup.email-required-error'))
      .matches(/^[a-zA-Z0-9+-_.]+@[a-z]+\.[a-z]{2,3}/i, t('yup.email-format-error')),
    password: Yup.string()
      .required(t('yup.password-required-error'))
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{8,}$/, t('yup.password-format-error')),
    passwordConfirm: Yup.string()
      .required(t('yup.password2-required-error'))
      .oneOf([Yup.ref('password'), ''], t('yup.password2-confirm-error')),
  });

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(signUpSchema),
    mode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isValid, errors },
    watch,
  } = methods;

  const onSubmit = (data) => {
    const { userEmail, password } = data;
    passwordResetMutate(
      {
        userEmail: userEmail,
        password: password,
      },
      {
        onSuccess: () => {},
        onError: () => {},
      }
    );
  };
  const sendEmail = () => {
    setShowVerificationInput(true);
    if (endAt && new Date() < new Date(endAt)) {
      return;
    }
    emailMutate(
      {
        userEmail: watch('userEmail'),
        purpose: 'RESET_PASSWORD',
      },
      {
        onSuccess: (data) => {
          setEndAt(Date.now() + 1000 * 60 * 3);
          setSuccessMessage(data);
          setEmailDisabled(true);
        },
        onError: (error) => {
          if (error.response?.status === 409) {
            // DO
          } else {
            setErrorMessage(error?.message);
          }
        },
      }
    );
  };

  const verifyEmail = () => {
    verifyMutate(
      {
        userEmail: watch('userEmail'),
        code: watch('verificationCode'),
      },
      {
        onSuccess: () => {
          setEndAt(null);
          setIsAuthenticated(true);
          setSuccessMessage(t('password-reset.verify-email-success-message'));
          setErrorMessage('');
          setVerificationDisabled(true);
        },
        onError: (error) => {
          console.log(error.message);
          setErrorMessage(t('password-reset.verify-email-error-message'));
          setSuccessMessage('');
        },
      }
    );
  };

  return (
    <PasswordResetWrap>
      <Header title={t('password-reset.header-title')} iconSrc={Images.left} />
      <div className="top">
        <img src={Images.joy} alt="기쁨이 이미지" />
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <InputForm
            name="userEmail"
            IconSrc={Images.email}
            placeholder={t('password-reset.email-placeholder')}
            disabled={emailDisabled}
            purpose={{
              isUsed: true,
              label: t('password-reset.send-email-verifying-code'),
              isPending: emailPending,
              onClick: () => sendEmail(),
            }}
          />
          {showVerificationInput && (
            <InputForm
              name="verificationCode"
              IconSrc={Images.verify}
              placeholder={t('password-reset.email-verifying-code-placeholder')}
              disabled={verificationDisabled}
              purpose={{
                isUsed: true,
                label: t('password-reset.submit-email-verifying-code'),
                isPending: verifyPending,
                onClick: () => verifyEmail(),
              }}
            />
          )}
          <InputForm name="password" IconSrc={Images.passward} placeholder={t('password-reset.new-password-placeholder')} />
          <InputForm name="passwordConfirm" IconSrc={Images.passwardReset} placeholder={t('password-reset.new-password2-placeholder')} />
        </div>
        <div className="bottom">
          <Button type="submit" label={t('password-reset.submit')} variant="BlackFull" size="medium" disabled={!isValid} />
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
    </PasswordResetWrap>
  );
}

export default PasswordReset;
