import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles.js';
import { Colors } from '../../styles/colors.js';

export const InputWrap = styled.main`
  width: 100%;
  transition: 1s;
  background-color: ${({ disabled }) => (disabled ? 'rgba(128, 128, 128, 0.2)' : '')};

  & > .main {
    height: 32px;
    display: flex;
    width: 100%;
    gap: 10px;
    padding: 0 6px;
    align-items: center;

    border-bottom: 1px solid ${Colors.Gray03};
    & > .SearchIcon {
      width: 20px;
      height: 20px;
    }
    & > input {
      border: none;
      background-color: unset;
      font-family: 'Ownglyph_ryurue-Rg', sans-serif !important;
      ${fontGenerator('19px', 'Regular', '100%', '4%')};
      width: 100%;
      color: ${({ disabled }) => (disabled ? '#959595' : '#000000')};
      cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
      background-color: unset;
    }
    & > input:focus {
      outline: none;
    }
    & > .CloseIcon {
      cursor: pointer;
    }
  }
  & > .RHFHelperText {
    display: block;
    color: ${Colors.Error};
  }
`;
