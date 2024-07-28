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

  // const resetPwMutation = usePasswordInit();
  // const sendEmailMutation = useSendEmail();

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

  const sendEmail = () => {
    // if (endAt && new Date() < new Date(endAt)) {
    //   setIsOtpModalOpen(true);
    //   return;
    // }
    //
    // sendEmailMutation.mutate(
    //   {
    //     userEmail: watch('userEmail'),
    //     purpose: EmailVerifyPurpose.RESET_PASSWORD,
    //   },
    //   {
    //     onSuccess: () => {//
    //       setEndAt(Date.now() + 1000 * 60 * 3);
    //     },
    //   }
    // );
  };

  const handleSendVerification = () => {
    console.log('인증번호 발송 버튼 클릭');
    setShowVerificationInput(true); // 인증번호 입력 필드를 표시합니다.
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

export default PasswordReset;
