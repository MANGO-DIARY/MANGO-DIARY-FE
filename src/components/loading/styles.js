import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles.js';
import { Colors } from '../../styles/colors.js';

export const LoadingContain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: px(6);

  & > div {
    width: px(8);
    height: px(8);
    border-radius: 50%;
    background-color: $gray-100;
    animation: loading 1s linear infinite;

    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }

  @keyframes loading {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;
