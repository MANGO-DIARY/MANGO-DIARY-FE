import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts';
import { ChartContainer } from './style';

const example = {
  1: { emotion: '신남', value: 10 },
  2: { emotion: '기쁨', value: 11 },
  3: { emotion: '행복', value: 13 },
  4: { emotion: '평온', value: 12 },
  5: { emotion: '분노', value: 9 },
  6: { emotion: '슬픔', value: 10 },
  7: { emotion: '불안', value: 10 },
  8: { emotion: '우울', value: 10 },
};

export default function Chart({ chartData = example }) {
  const [isLoading, setisLoading] = useState(true);

  const namesArray = Object.values(chartData).map((item) => item.emotion);
  const valuesArray = Object.values(chartData).map((item) => item.value);

  // TODO: 컬러 값 수정하기
  // const barColors = namesArray.map((name) => {
  //   return getEmotionColor(name);
  // });
  const barColors = ['#fbff', '#bbffd0', '#ffd3bb', '#fff6bb', '#bbc4ff', '#bbfaff', '#ffbbbb'];

  useEffect(() => {
    setisLoading(false);
  }, []);

  return (
    <ChartContainer>
      <BarChart
        height={350}
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
        loading={isLoading}
      />
    </ChartContainer>
  );
}
