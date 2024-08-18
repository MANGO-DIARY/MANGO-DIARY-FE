import React from 'react';
import { css } from '@emotion/react';

import { ButtonContent } from './styles';
import Loading from '../loading/Loading';

/**
 * @description 버튼
 * @param {string | undefined} className
 * @param {SerializedStyles | undefined} customStyle
 * @param {string | undefined} label
 * @param {IconDetailType | undefined} icon
 * @param {string | undefined} variant
 * @param {string | undefined} iconSize
 * @param {Boolean | undefined} loading - 로딩중이냐
 * @param {((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined} onClick
 * @returns {JSX.Element}
 */

function Button({ className = '', type, customStyle = css``, loading = false, label = '버튼', icon, prevIcon, variant = 'primary', size = 'medium', onClick = () => {} }) {
  return (
    <ButtonContent className={className} customStyle={customStyle} type={type} variant={variant} size={size} onClick={onClick} icon={icon} prevIcon={prevIcon}>
      {prevIcon && <img src={prevIcon} alt="아이콘" />}
      {loading ? <Loading /> : label}
      {icon && <img src={icon} alt="아이콘" />}
    </ButtonContent>
  );
}

export default Button;
