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

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

const initialValue = dayjs(new Date());

function ServerDay(props) {
  const navigate = useNavigate();
  const { highlightedDays = [], day, outsideCurrentMonth, diarys = [], ...other } = props;

  const index = highlightedDays.indexOf(day.date());

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

export default function Calendar() {
  const requestAbortController = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 15]);
  const [diarys, setDiarys] = useState([
    { id: 1, emotion: '신남', date: '2024-08-01' },
    { id: 2, emotion: '기쁨', date: '2024-08-02' },
    { id: 3, emotion: '행복', date: '2024-08-03' },
  ]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <CalendarWrap>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={initialValue}
          loading={isLoading}
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
        />
      </LocalizationProvider>
    </CalendarWrap>
  );
}
