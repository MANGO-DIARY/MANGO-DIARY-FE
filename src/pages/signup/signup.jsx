import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { t } from 'i18next';
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
import { useSignup } from '../../api/queries/auth/sign-up.js';
import useEmailAuthStore from '../../store/auth/emailAuthStore';
import { useSendEmail } from '../../api/queries/auth/send-email.js';
import { useVerifyEmail } from '../../api/queries/auth/verify-email.js';
import { PATH } from '../../route/path.js';

const defaultValues = {
  name: '',
  userEmail: '',
  password: '',
  passwordConfirm: '',
};

function Signup() {
  const navigate = useNavigate();
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [emailDisabled, setEmailDisabled] = useState(false);
  const [verificationDisabled, setVerificationDisabled] = useState(false);

  const { endAt, isAuthenticated, setEndAt, setIsAuthenticated } = useEmailAuthStore((state) => state);

  const { mutate: signupmutate, isPending: signupPending } = useSignup();
  const { mutate: emailMutate, isPending: emailPending } = useSendEmail();
  const { mutate: verifyMutate, isPending: verifyPending } = useVerifyEmail();

  const signUpSchema = Yup.object().shape({
    userName: Yup.string().required(t('yup.name-required-error')).max(12, t('yup.name-format-error')),
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
    const { userName, userEmail, password } = data;
    signupmutate(
      {
        userName: watch('userName'),
        userEmail: watch('userEmail'),
        password: watch('password'),
      },
      {
        onSuccess: () => {
          setIsAuthenticated(false);
          navigate(PATH.LOGIN);
        },
        onError: () => {
          setIsAuthenticated(false);
        },
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
        purpose: 'SIGN_UP',
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
          setSuccessMessage(t('signup.verify-email-success-message'));
          setErrorMessage('');
          setVerificationDisabled(true);
        },
        onError: (error) => {
          console.log(error.message);
          setErrorMessage(t('signup.verify-email-error-message'));
          setSuccessMessage('');
        },
      }
    );
  };

  return (
    <LoginWrap>
      <Header title={t('signup.header-title')} iconSrc={Images.left} onClick={() => navigate(PATH.LOGIN)} />
      <div className="top">
        <img src={Images.joy} alt="기쁨이 이미지" />
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <InputForm name="userName" IconSrc={Images.person} placeholder={t('signup.nickname-placeholder')} />
          <InputForm
            name="userEmail"
            IconSrc={Images.email}
            placeholder={t('signup.email-placeholder')}
            disabled={emailDisabled}
            purpose={{
              isUsed: true,
              label: t('signup.send-email-verifying-code'),
              isPending: emailPending,
              onClick: () => sendEmail(),
            }}
          />
          {showVerificationInput && (
            <InputForm
              name="verificationCode"
              IconSrc={Images.verify}
              placeholder={t('signup.email-verifying-code-placeholder')}
              disabled={verificationDisabled}
              purpose={{
                isUsed: true,
                label: t('signup.submit-email-verifying-code'),
                isPending: verifyPending,
                onClick: () => verifyEmail(),
              }}
            />
          )}
          <InputForm type="password" name="password" IconSrc={Images.passward} placeholder={t('signup.password-placeholder')} />
        </div>
        <div className="bottom">
          <Button type="submit" label={t('signup.next')} variant="BlackFull" size="medium" disabled={!isValid} onClick={onSubmit} />
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
    </LoginWrap>
  );
}

export default Signup;
