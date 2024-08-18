import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors } from '../../styles/colors.js';
import { fontGenerator } from '../../styles/styles.js';

export const ButtonStyles = {
  default: css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    background-color: ${Colors.Primary};
    color: ${Colors.White};
    font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;
  `,
  Primary: css`
    background-color: ${Colors.Primary};
    color: ${Colors.White};
    &:hover {
      background-color: ${Colors.PrimaryDark};
    }
  `,
  Secondary: css`
    border: none;
    background-color: ${Colors.PrimaryLight};
    color: ${Colors.Primary};
    ${fontGenerator('1rem', '600', '1rem', '-0.3px')};
    &:hover {
      background-color: ${Colors.PrimaryDark};
    }
  `,
  OutlineBlack: css`
    border: 1px solid ${Colors.Gray01};
    background-color: ${Colors.White};
    color: ${Colors.Black};
    border-radius: unset;
    &:hover {
      background-color: ${Colors.Gray10};
    }
    transition: 0.5s;
    ${fontGenerator('16px', 'Regular', '140%', '4%')};
  `,
  Disabled: css`
    background-color: ${Colors.Gray01};
    color: ${Colors.Gray05};
  `,
  kakao: css`
    background-color: ${Colors.Kakao};
    color: ${Colors.Black};
    &:hover {
      background-color: ${Colors.KakaoDark};
    }
    gap: 0.9rem;
  `,
  BlackFull: css`
    background-color: ${Colors.Gray01};
    color: ${Colors.White};
    border-radius: unset;
    &:hover {
      background-color: ${Colors.Black};
    }
    ${fontGenerator('20px', 'Regular', '110%', '4%')};
  `,
};

export const ButtonSizes = {
  default: css`
    ${fontGenerator('1rem', '600', '1rem', '-0.3px')}
    padding: 0 1.2rem;
    width: 100%;
    max-width: 30rem;
    height: 56px;
  `,
  large: css`
    padding: 0 1.2rem;
    width: 100%;
    height: 56px;
  `,
  medium: css`
    padding: 0 1rem;
    width: 100%;
    height: 43px;
  `,
  small: css`
    width: fit-content;
  `,
  xsmall: css`
    width: 150px;
    padding: 0;
    margin: -2px;
    font-size: 18px;
  `,
  kakao: css`
    ${fontGenerator('22px', '500', '16px', '-0.3px')}
    padding: 15px 10px;
    width: 100%;
  `,
  refresh: css`
    padding: 8px 16px;
  `,
  half: css``,
};

export const ButtonContent = styled.button`
  ${ButtonStyles.default}
  ${(props) => props.variant && ButtonStyles[props.variant]}
  ${(props) => props.size && ButtonSizes[props.size]}

  ${(props) =>
    props.icon &&
    css`
      padding: 2rem;
    `} ${(props) =>
    props.prevIcon &&
    css`
      padding-left: 1.2rem;
    `}
  ${(props) => props.customStyle}
`;
