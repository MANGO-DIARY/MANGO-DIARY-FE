import { useFormContext } from 'react-hook-form';
// import Skeleton from '../skeleton/index.js';
import React from 'react';
import { Images } from '../../styles/images.js';
import { InputWrap } from './styles.js';
import Button from '../button/button.jsx';
// ----------------------------------------------------------------------

export default function InputFormUI({ inputValue = '', placeholder, IconSrc, name, readonly = false, required = false, loading = false, unit, disabled = false, ...other }) {
  // input 값을 빈 문자열로 설정

  const handleClear = () => {
    // Do nothing
  };

  if (readonly) {
    return (
      <div className="RHFInput">
        <div>{inputValue}</div>
      </div>
    );
  }

  return (
    <InputWrap>
      <div className="main">
        <img src={IconSrc} className="SearchIcon" alt="SearchIcon" />
        <input placeholder={placeholder} value={inputValue} disabled={disabled} {...other} />
        {inputValue && !disabled && (
          <div onClick={handleClear} className="CloseIcon">
            <img src={Images.close} alt="CloseIcon" />
          </div>
        )}
      </div>
    </InputWrap>
  );
}
