import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { Avatar } from '@mui/material';
import getEmotionImage from '../../util/get-emotion-img';
import { CalendarWrap } from './style';
import { PATH } from '../../route/path';
import { useCalendar } from '../../api/queries/calendar/calendar.js';
import Spiner from '../Spiner/Spiner.jsx';

function ServerDay(props) {
  const navigate = useNavigate();
  const { highlightedDays = [], day, outsideCurrentMonth, diarys = [], ...other } = props;

  const index = highlightedDays.indexOf(day.format('YYYY-MM-DD'));

  const isSelected = !outsideCurrentMonth && index >= 0;

  return isSelected ? (
    <Avatar
      key={day.toString()}
      sx={{ objectFit: 'cover', background: 'transparent', width: 36, height: 36, cursor: 'pointer' }}
      onClick={() => {
        navigate(PATH.DIARYDETAIL_ENDPOINT + diarys[index].id);
      }}
    >
      <img alt={diarys[index].emotion} src={getEmotionImage(diarys[index].emotion)} height="36px" />
    </Avatar>
  ) : (
    <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} disabled />
  );
}

const initialValue = dayjs(new Date());

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(initialValue);
  const [highlightedDays, setHighlightedDays] = useState([]);
  const { data: diarys, isLoading: isCalendarLoading, refetch } = useCalendar({ yearMonth: selectedDate.format('YYYY-MM') });

  const handleMonthChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    if (selectedDate) {
      refetch();
    }
  }, [refetch, selectedDate]);

  useEffect(() => {
    setHighlightedDays(diarys?.map((item) => item.date));
  }, [diarys]);

  if (isCalendarLoading) {
    return <Spiner />;
  }

  return (
    <CalendarWrap>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={initialValue}
          value={selectedDate}
          loading={isCalendarLoading}
          onMonthChange={handleMonthChange}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{
            day: (props) => ServerDay(props),
          }}
          slotProps={{
            day: {
              highlightedDays,
              diarys,
            },
          }}
          disableFuture
        />
      </LocalizationProvider>
    </CalendarWrap>
  );
}
