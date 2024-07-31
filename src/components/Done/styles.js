import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles.js';
import { Colors } from '../../styles/colors.js';

export const DoneContain = styled.main`
  & > .top {
    height: calc(100vh - 170px);
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 9vh 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
    & > img {
      height: 104px;
    }
    & > .title {
      ${fontGenerator('40px', 'Regular', '110%', '4%')}
    }
    & > .comment {
      ${fontGenerator('22px', 'Regular', '120%', '4%')}
    }
  }
`;
