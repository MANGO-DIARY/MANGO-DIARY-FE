import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles';
import { Colors } from '../../styles/colors';

export const DonePage = styled.main`
  width: 100%;

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

  .bottom {
    padding: 0 30px;
    position: absolute;
    width: 100%;
    bottom: 52px;
  }
`;
