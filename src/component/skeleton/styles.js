import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles';
import { Colors } from '../../styles/colors';

export const SkeletonWrap = styled.main`
  .skeleton {
    -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
    border: none !important;
  }

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
      color: rgba(165, 165, 165, 0);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
      color: rgba(165, 165, 165, 0);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
      color: rgba(165, 165, 165, 0);
    }
  }
`;
