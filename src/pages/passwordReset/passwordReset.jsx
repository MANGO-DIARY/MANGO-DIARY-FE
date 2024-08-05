import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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

const signUpSchema = Yup.object().shape({
  userEmail: Yup.string()
    .required('이메일을 입력해주세요.')
    .matches(/^[a-zA-Z0-9+-_.]+@[a-z]+\.[a-z]{2,3}/i, '이메일 형식이 아닙니다.'),
  password: Yup.string()
    .required('비밀번호를 입력해주세요.')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{8,}$/, '비밀번호는 특수문자, 숫자를 포함하여 8자리 이상이어야 합니다.'),
  passwordConfirm: Yup.string()
    .required('비밀번호 확인을 입력해주세요.')
    .oneOf([Yup.ref('password'), ''], '비밀번호를 다시 입력해주세요.'),
});

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
          setSuccessMessage('이메일 인증이 완료되었습니다.');
          setErrorMessage('');
          setVerificationDisabled(true);
        },
        onError: (error) => {
          console.log(error.message);
          setErrorMessage('이메일 인증을 실패하였습니다. 새로고침으로 다시 진행해주세요.');
          setSuccessMessage('');
        },
      }
    );
  };

  return (
    <PasswordResetWrap>
      <Header title="비밀번호 재설정" iconSrc={Images.left} />
      <div className="top">
        <img src={Images.joy} alt="기쁨이 이미지" />
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <InputForm
            name="userEmail"
            IconSrc={Images.email}
            placeholder="이메일을 입력해주세요."
            disabled={emailDisabled}
            purpose={{
              isUsed: true,
              label: '인증번호 발송',
              isPending: emailPending,
              onClick: () => sendEmail(),
            }}
          />
          {showVerificationInput && (
            <InputForm
              name="verificationCode"
              IconSrc={Images.verify}
              placeholder="인증번호를 입력해주세요."
              disabled={verificationDisabled}
              purpose={{
                isUsed: true,
                label: '확인',
                isPending: verifyPending,
                onClick: () => verifyEmail(),
              }}
            />
          )}
          <InputForm name="password" IconSrc={Images.passward} placeholder="새 비밀번호를 입력해주세요." />
          <InputForm name="passwordConfirm" IconSrc={Images.passwardReset} placeholder="비밀번호를 재입력해주세요." />
        </div>
        <div className="bottom">
          <Button type="submit" label="비밀번호 재설정하기" variant="BlackFull" size="medium" disabled={!isValid} />
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
