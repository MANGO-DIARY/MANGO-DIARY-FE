import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles.js';
import { Colors } from '../../styles/colors.js';

export const UserGreetingWrap = styled.main`
  border-radius: 15px;
  display: flex;
  gap: 20px;
  overflow: hidden;
  color: rgba(3, 3, 3, 1);
  align-items: center;
  padding: 20px 10px 20px 20px;
  border: var(--extra_small, 2px) solid var(--Gray-10, #e0e0e0);

  & > .greetingStyle {
    color: #030303;

    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
  }
`;
