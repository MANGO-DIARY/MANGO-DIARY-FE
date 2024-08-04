/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Switch, Button, DiaryBtn, CalendarBtn } from './ToggleButton.styles';
import { Images } from '../../styles/images';
import { PATH } from '../../route/path';

function ToggleButton() {
  const nav = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState('Calendar');

  useEffect(() => {
    if (location.pathname === PATH.DIARYLIST) {
      setValue('Diary');
    } else if (location.pathname === PATH.CALENDAR) {
      setValue('Calendar');
    }
  }, [location.pathname]);

  const onChangeMode = (type) => {
    if (type === 'Diary') {
      setValue('Diary');
      nav(PATH.DIARYLIST);
    } else if (type === 'Calendar') {
      setValue('Calendar');
      nav(PATH.CALENDAR);
    }
  };

  return (
    <Switch value={value}>
      <span value={value} />
      <DiaryBtn value={value} onClick={() => onChangeMode('Diary')}>
        {value === 'Diary' && <img src={Images.list} alt="icon" />}
        Diary List
      </DiaryBtn>
      <CalendarBtn value={value} onClick={() => onChangeMode('Calendar')}>
        {value === 'Calendar' && <img src={Images.calendarWhite} alt="icon" />}
        Calender
      </CalendarBtn>
    </Switch>
  );
}

export default ToggleButton;
