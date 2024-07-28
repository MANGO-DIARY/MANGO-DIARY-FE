import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles';
import { Colors } from '../../styles/colors';

export const SplashWrap = styled.main`
  width: 100%;
  & > img {
    width: 100%;
  }

  .highlight {
    padding: 0 7px;
    display: inline;
    box-shadow: inset 0 -20px 0px rgba(238, 201, 72, 0.2);

    //background: linear-gradient(to top, rgba(238, 201, 72, 0.2) 40%, transparent 40%);
    background-clip: padding-box;
    //border-radius: 20px;
  }

  & > .top {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 50px;
    margin-top: -50px;
    & > .title {
      width: 120px;
      ${fontGenerator('45px', 'Regular', '45px')}
    }
    & > .subtitle {
      ${fontGenerator('23px', 'Regular', '30px', '6%')}
      color : ${Colors.Gray05};
    }
  }
  & > .bottom {
    position: absolute;
    bottom: 40px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    display: flex;
    gap: 10px;
    flex-direction: column;
    & > .email {
      ${fontGenerator('19px', 'Regular', '30px')}
      text-align: center;
      color: ${Colors.Gray01};
    }
  }
`;
