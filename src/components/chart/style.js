import styled from '@emotion/styled';
import { fontGenerator } from '../../styles/styles.js';
import { Colors } from '../../styles/colors.js';

export const ChartContainer = styled.div`
  // overflow-x, y축 선 삭제
  .MuiChartsAxis-directionY,
  .MuiChartsAxis-left,
  .MuiChartsAxis-line,
  .MuiChartsAxis-tick {
    display: none;
  }
  .MuiChartsAxis-directionX,
  .MuiChartsAxis-label {
    transform: translateY(277px) !important; // label 짤림 해결
  }

  // 차트 바(<rect>) 커스텀
  [class*='MuiBarElement-series-auto-generated'] {
    rx: 10; // 모서리 둥글게
    width: 15px !important;
    x: 9px; // 바 가운데로 오도록 수정
  }
`;
