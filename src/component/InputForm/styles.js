import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles';
import { Colors } from '../../styles/colors';

export const InputWrap = styled.main`
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
  }
  & > .CloseIcon {
    position: absolute;
    right: 10px;
    top: 8px;
    cursor: pointer;
  }
`;
