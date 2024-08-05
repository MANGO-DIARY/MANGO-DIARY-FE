import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Chart from '../../components/chart/chart';
import { AiComment, Header, NavBar } from '../../components';
import { Images } from '../../styles/images';
import { Colors } from '../../styles/colors';

const example = {
  yearMonth: {
    year: 0,
    month: 'JANUARY',
    monthValue: 0,
    leapYear: true,
  },
  emotionCounts: {
    기쁨: 2,
    신남: 5,
    행복: 2,
    평온: 3,
    슬픔: 1,
    분노: 2,
    불안: 1,
    우울: 0,
  },
  monthlyComments: [{ aiComment: 'comment' }, { aiComment: 'comment' }, { aiComment: 'comment' }],
  statisticsComment: 'statisticsComment',
};

export default function ChartPage() {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    setChartData(example);
  }, []);

  return (
    <>
      <Header title="월간통계" iconSrc={Images.left} onClick={() => navigate(-1)} />
      <Stack sx={{ paddingX: '30px' }}>
        <Typography variant="h3">
          망고럭키님의 <br />
          7월 리포트
        </Typography>
        <Typography variant="body" color={Colors.Gray06}>
          yyyy년 MM월 DD일 기준
        </Typography>

        <Typography sx={{ mt: 5 }} textAlign="center" color={Colors.Gray02}>
          {chartData.statisticsComment}
        </Typography>
      </Stack>
      <Chart chartData={chartData.emotionCounts} />
      <Stack sx={{ paddingX: '30px', paddingY: 5 }} spacing={2}>
          {chartData.monthlyComments && chartData.monthlyComments.length ? (
            <>
              <Typography variant="h6">코멘트 모아보기</Typography>
              {example.monthlyComments.map((item) => (
                <AiComment aiComment={item.aiComment} />
              ))}
            </>
        ) : (
          <Typography textAlign="center" color={Colors.Gray05}>
            이번달에 아직 일기를 작성하지 않았어요. <br />
            일기를 작성하고 ai의 코멘트를 받아보세요!
          </Typography>
        )}
      </Stack>
      <NavBar />
    </>
  );
}
