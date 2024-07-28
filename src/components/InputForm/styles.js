import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles.js';
import { Colors } from '../../styles/colors.js';

export const InputWrap = styled.main`
  width: 100%;
  & > .main {
    height: 32px;
    display: flex;
    width: 100%;
    gap: 10px;
    padding: 6px;
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
