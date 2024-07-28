import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles';
import { Colors } from '../../styles/colors';

export const LoginWrap = styled.main`
  width: 100%;

  & > .top {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 5rem 35px;
    text-align: center;
    & > img {
      height: 104px;
    }
    & > .comment {
      ${fontGenerator('19px', 'Regular', '130%', '4%')}
    }
  }

  .input {
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding:;
  }
`;
