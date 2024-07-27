import React from 'react';
import { css } from '@emotion/react';

import { ButtonContent } from './styles';

/**
 * @description 버튼
 * @param {string | undefined} className
 * @param {SerializedStyles | undefined} customStyle
 * @param {string | undefined} label
 * @param {IconDetailType | undefined} icon
 * @param {string | undefined} variant
 * @param {string | undefined} iconSize
 * @param {((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined} onClick
 * @returns {JSX.Element}
 */

function Button({ className = '', customStyle = css``, label = '버튼', icon, prevIcon, variant = 'primary', size = 'medium', onClick = () => {} }) {
  return (
    <ButtonContent className={className} customStyle={customStyle} variant={variant} size={size} onClick={onClick} icon={icon} prevIcon={prevIcon}>
      {prevIcon && <img src={prevIcon} alt="아이콘" />}
      {label}
      {icon && <img src={icon} alt="아이콘" />}
    </ButtonContent>
  );
}

export default Button;
