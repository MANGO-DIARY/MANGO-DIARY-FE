import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts';
import { ChartContainer } from './style';
import getEmotionImage from '../../util/get-emotion-img';
import getEmotionColor from '../../util/getEmotionColor';

const example = {
  joy: 0,
  excitement: 0,
  happiness: 0,
  calm: 0,
  sadness: 0,
  anger: 0,
  anxiety: 0,
  depression: 0,
};

function CustomAxisLabel(props) {
  const { text, chartData } = props;
  return (
    <>
      {/* <defs>
        <style type="text/css">{`@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');`}</style>
      </defs> */}
      <image transform="translate(5,5)" href={getEmotionImage(text)} width="30px" height="30px" />
      <text
        transform="translate(18.5, 52)"
        fontSize="20"
        // fontFamily="'Jua', sans-sarif" // 폰트 변경
        fill={getEmotionColor(text)}
        textAnchor="middle"
      >
        {chartData[text]}
      </text>
    </>
  );
}
export default function Chart({ chartData, isChartLoading, chartProps }) {
  const namesArray = Object.keys(chartData);
  const valuesArray = Object.values(chartData);

  const barColors = namesArray.map((name) => getEmotionColor(name));

  useEffect(() => {
    // 차트 모양 둥글게 해주기 (for safari)
    const rects = document.querySelectorAll('.MuiBarElement-root');
    rects.forEach((rect) => {
      rect.setAttribute('rx', '10'); // 원하는 rx 값을 설정
    });
  }, []);

  return (
    <ChartContainer>
      <BarChart
        sx={{ pb: 2 }}
        height={300}
        xAxis={[
          {
            data: namesArray,
            scaleType: 'band',
            colorMap: {
              type: 'ordinal',
              values: namesArray,
              colors: barColors,
            },
          },
        ]}
        series={[{ data: valuesArray, type: 'bar' }]}
        loading={isChartLoading}
        slots={{
          axisTickLabel: (props) => CustomAxisLabel({ ...props, chartData }),
        }}
        {...chartProps}
      />
    </ChartContainer>
  );
}
