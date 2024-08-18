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
import { useSignup } from '../../api/queries/auth/sign-up.js';
import useEmailAuthStore from '../../store/auth/emailAuthStore';
import { useSendEmail } from '../../api/queries/auth/send-email.js';
import { useVerifyEmail } from '../../api/queries/auth/verify-email.js';
import { PATH } from '../../route/path.js';

const signUpSchema = Yup.object().shape({
  userName: Yup.string().required('이름을 입력해주세요.').max(12, '이름은 12자 이하여야 합니다.'),
  userEmail: Yup.string()
    .required('이메일을 입력해주세요.')
    .matches(/^[a-zA-Z0-9+-_.]+@[a-z]+\.[a-z]{2,3}/i, '이메일 형식이 아닙니다.'),
  password: Yup.string()
    .required('비밀번호를 입력해주세요.')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{8,}$/, '비밀번호는 특수문자, 숫자를 포함하여 8자리 이상이어야 합니다.'),
  passwordConfirm: Yup.string()
    .required('비밀번호 확인을 입력해주세요.')
    .oneOf([Yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.'),
});

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
    <LoginWrap>
      <Header title="회원가입" iconSrc={Images.left} onClick={() => navigate(PATH.LOGIN)} />
      <div className="top">
        <img src={Images.joy} alt="기쁨이 이미지" />
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <InputForm name="userName" IconSrc={Images.person} placeholder="닉네임을 입력해주세요." />
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
          <InputForm type="password" name="password" IconSrc={Images.passward} placeholder="비밀번호를 입력해주세요." />
        </div>
        <div className="bottom">
          <Button type="submit" label="다음" variant="BlackFull" size="medium" disabled={!isValid} onClick={onSubmit} />
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
