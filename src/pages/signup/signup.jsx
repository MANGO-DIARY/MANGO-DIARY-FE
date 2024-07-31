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
import { useSignup } from '../../api/queries/auth/sign-up.js';

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
  // const signInMutation = useSignIn();
  const navigate = useNavigate();
  const [showVerificationInput, setShowVerificationInput] = useState(false);

  const handleSendVerification = () => {
    console.log('인증번호 발송 버튼 클릭');
    setShowVerificationInput(true); // 인증번호 입력 필드를 표시합니다.
  };
  // const { endAt, isAuthenticated, setEndAt, setIsAuthenticated } =
  //   useEmailAuthStore((state) => state);

  const { mutate, isLoading, valueOf } = useSignup();

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
    // const { userName, userEmail, password } = data;
    // signUpMutation.mutate(
    //   {
    //     userName,
    //     userEmail,
    //     password: sha256(password),
    //   },
    //   {
    //     onSuccess: () => setIsAuthenticated(false),
    //   }
    // );
  };

  // const sendEmailMutation = useSendEmail();

  const sendEmail = () => {
    // if (endAt && new Date() < new Date(endAt)) {
    //   setIsOtpModalOpen(true);
    //   return;
    // }
    //
    // sendEmailMutation.mutate(
    //   {
    //     userEmail: watch('userEmail'),
    //     purpose: EmailVerifyPurpose.SIGN_UP,
    //   },
    //   {
    //     onSuccess: () => {//
    //       setEndAt(Date.now() + 1000 * 60 * 3);
    //     },
    //   }
    // );
  };

  return (
    <LoginWrap>
      <Header title="회원가입" iconSrc={Images.left} />
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
            purpose={{
              isUsed: true,
              label: '인증번호 발송',
              onClick: () => {
                handleSendVerification();
              },
            }}
          />
          {showVerificationInput && (
            <InputForm
              name="verificationCode"
              IconSrc={Images.verify}
              placeholder="인증번호를 입력해주세요."
              purpose={{
                isUsed: true,
                label: '확인',
                onClick: () => console.log('확인 버튼 클릭'),
              }}
            />
          )}
          <InputForm name="password" IconSrc={Images.passward} placeholder="비밀번호를 입력해주세요." />
          <Button label="로그인 하러가기" variant="OutlineBlack" size="small" disabled={!isValid} onClick={() => navigate('/login')} />
        </div>
        <div className="bottom">
          <Button type="submit" label="다음" variant="BlackFull" size="medium" disabled={!isValid} />
        </div>
      </FormProvider>
    </LoginWrap>
  );
}

export default Signup;
