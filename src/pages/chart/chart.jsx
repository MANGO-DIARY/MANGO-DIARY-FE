import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { Box, Button, Stack, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Chart from '../../components/chart/chart';
import { AiComment, Header, NavBar } from '../../components';
import { Images } from '../../styles/images';
import { Colors } from '../../styles/colors';
import { useChart } from '../../api/queries/chart/chart';
import { useUserInfo } from '../../api/queries/user/useUserInfo';
import Spiner from '../../components/Spiner/Spiner.jsx';

const today = dayjs(new Date());

export default function ChartPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(today); // dayjs 객체!!
  const { data: chartData, isLoading: isChartLoading, refetch } = useChart({ yearMonth: selectedDate.format('YYYY-MM') });
  const { data: userInfo, isLoading: isUserLoading } = useUserInfo(); // 데이터, 로딩 상태, 에러 상태

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDate) {
      refetch();
    }
  }, [refetch, selectedDate]);

  if (isUserLoading) {
    return <Spiner />;
  }

  return (
    <div className="use-navbar">
      <Header title={t('chart.monthly-chart')} iconSrc={Images.left} onClick={() => navigate(-1)} />

      <Stack className="top" sx={{ paddingX: '30px' }}>
        <ChartDatePicker {...{ selectedDate, setSelectedDate, isOpen, setIsOpen }} />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h3">
            {userInfo?.userName}
            {t('chart.top-typo')}
            <br />
            {selectedDate.format(t('chart.top-dateformat'))}
          </Typography>
          <Button
            variant="text"
            sx={{ alignSelf: 'end', fontWeight: 'bold' }}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            {t('chart.select-date')}
          </Button>
        </Box>
        <Typography variant="body" color={Colors.Gray06}>
          {today.format(t('chart.asof-format'))}
        </Typography>
      </Stack>

      {chartData && chartData.aiComments && chartData.aiComments.length ? (
        // 차트 데이터 있을 때
        <>
          <Typography sx={{ mt: 5, mx: '30px' }} textAlign="center" color={Colors.Gray02}>
            {chartData.statisticsComment}
          </Typography>
          <Chart chartData={chartData.emotionCounts} isChartLoading={isChartLoading} />
          <Stack sx={{ paddingX: '30px', paddingY: 5 }} spacing={2}>
            <Typography variant="h6">{t('chart.comments')}</Typography>
            {chartData.aiComments && chartData.aiComments.length && chartData.aiComments.map((item) => <AiComment aiComment={item} />)}
          </Stack>
        </>
      ) : (
        // 차트데이터 없을 때
        <Typography textAlign="center" color={Colors.Gray05} sx={{ mt: '5rem' }}>
          {t('chart.no-comment-1')}
          <br />
          {t('chart.no-comment-2')}
          <br />
          {t('chart.no-comment-3')}
        </Typography>
      )}

      {/* nav바 */}
      <NavBar />
    </div>
  );
}

function ChartDatePicker({ selectedDate, setSelectedDate, isOpen, setIsOpen }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        openTo="month"
        views={['year', 'month']}
        disableFuture
        slots={{ field: () => null }}
        value={selectedDate}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        onChange={(e) => {
          setSelectedDate(e);
          setIsOpen(false);
        }}
      />
    </LocalizationProvider>
  );
}
