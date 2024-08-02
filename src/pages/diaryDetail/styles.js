import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles';
import { Colors } from '../../styles/colors';
import getEmotionColor from '../../util/getEmotionColor';
import getEmotionImage from '../../util/get-emotion-img';

export const DiaryDetailWrap = styled.main`
  width: 100%;
  height: 100vh;

  .top {
    display: flex;
    flex-direction: column;
    padding: 5vh 30px;
    text-align: center;
    & > img {
      height: 104px;
      content: url(${(props) => getEmotionImage(props.emotion)});
    }
    & > #emotion-name {
      font-family: 'Jua', sans-serif;
      font-weight: 400;
      font-style: normal;

      color: ${(props) => getEmotionColor(props.emotion)};
      margin: 0;
    }
  }

  article {
    padding: 0 30px 20px 30px;
  }

  .ai-wrap {
    padding: 0 30px;
    display: flex;
    direction: row;

    & > img {
      width: 33px;
      height: auto;
      align-self: baseline;
      margin-right: 1rem;
    }
    & > .ai-comment {
      font-family: 'Jua', sans-serif !important;
    }
  }

  .bottom {
    margin-top: auto;
    padding: 0 30px;
    display: flex;
    justify-content: end;
  }
`;
