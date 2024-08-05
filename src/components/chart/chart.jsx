import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts';
import { ChartContainer } from './style';
import getEmotionImage from '../../util/get-emotion-img';
import getEmotionColor from '../../util/getEmotionColor';

const example = {
  신남: 10,
  기쁨: 11,
  행복: 13,
  평온: 12,
  분노: 9,
  슬픔: 10,
  불안: 2,
  우울: 8,
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
export default function Chart({ chartData = example, chartProps }) {
  const [isLoading, setisLoading] = useState(true);

  const namesArray = Object.keys(chartData);
  const valuesArray = Object.values(chartData);

  const barColors = namesArray.map((name) => getEmotionColor(name));

  useEffect(() => {
    setisLoading(false);
  }, []);

  return (
    <ChartContainer>
      <BarChart
        sx={{ pb: 2 }}
        height={330}
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
        slots={{
          axisTickLabel: (props) => CustomAxisLabel({ ...props, chartData }),
        }}
        {...chartProps}
      />
    </ChartContainer>
  );
}
