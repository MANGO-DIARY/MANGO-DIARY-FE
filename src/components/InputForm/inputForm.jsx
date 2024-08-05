import { useFormContext } from 'react-hook-form';
// import Skeleton from '../skeleton/index.js';
import React from 'react';
import { Images } from '../../styles/images.js';
import { InputWrap } from './styles.js';
import Button from '../button/button.jsx';
// ----------------------------------------------------------------------

export default function InputForm({
  placeholder,
  IconSrc,
  name,
  readonly = false,
  // eslint-disable-next-line func-names
  purpose = { isUsed: false, label: '인증번호 발송', onClick: function () {} },
  required = false,
  loading = false,
  unit,
  disabled = false,
  ...other
}) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useFormContext();

  const isError = !!errors[name];

  const errorMessage = errors[name]?.message || '';

  const inputValue = watch(name);

  const handleClear = () => {
    setValue(name, '');
  };

  if (readonly) {
    return (
      <div className="RHFInput">
        <div>{watch()[name]}</div>
      </div>
    );
  }

  return (
    <InputWrap disabled={disabled}>
      <div className="main" style={isError ? { borderBottom: `1px solid rgb(255, 43, 43)` } : {}}>
        <img src={IconSrc} className="SearchIcon" alt="SearchIcon" />
        <input placeholder={placeholder} {...register(name, { required })} {...other} />
        {inputValue && !disabled && (
          <div onClick={handleClear} className="CloseIcon">
            <img src={Images.close} alt="CloseIcon" />
          </div>
        )}
        {purpose.isUsed && !disabled && (
          <Button
            loading={purpose.isPending}
            label={purpose.label}
            variant="BlackFull"
            size="xsmall"
            type="button"
            onClick={() => {
              trigger(name).then((isValid) => {
                if (isValid) purpose.onClick();
                else console.log('Invalid email');
              });
            }}
          />
        )}
      </div>

      {isError && <div className="RHFHelperText">{errorMessage}</div>}
    </InputWrap>
  );
}
