import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles';
import { Colors } from '../../styles/colors';

export const LoginWrap = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  & > .top {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 9vh 30px;
    text-align: center;
    & > img {
      height: 104px;
    }
    & > .comment {
      ${fontGenerator('19px', 'Regular', '130%', '4%')}
    }
  }

  .input {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    .password-reset {
      margin-top: -10px;
      color: ${Colors.Black};
    }
  }
  .bottom {
    padding: 0 30px;
    position: absolute;
    width: 100%;
    bottom: 52px;
  }
`;
