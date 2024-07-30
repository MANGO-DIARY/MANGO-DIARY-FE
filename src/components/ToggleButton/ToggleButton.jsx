/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Switch, Button, DiaryBtn, CalendarBtn } from './ToggleButton.styles';
import { Images } from '../../styles/images';

function ToggleButton() {
  const nav = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState('Diary');

  useEffect(() => {
    if (location.pathname === '/diaryList') {
      setValue('Diary');
    } else if (location.pathname === '/*') {
      // calendar 페이지 주소 들어가야함
      setValue('Calendar');
    }
  }, [location.pathname]);

  const onChangeMode = (type) => {
    if (type === 'Diary') {
      setValue('Diary');
      nav('/diaryList');
    } else if (type === 'Calendar') {
      setValue('Calendar');
      nav('/*');
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
        {value === 'Calendar' && <img src={Images.calendar} alt="icon" />}
        Calender
      </CalendarBtn>
    </Switch>
  );
}

export default ToggleButton;
