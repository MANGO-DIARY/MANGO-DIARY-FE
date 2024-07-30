/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Switch, Button, DiaryBtn, CalendarBtn } from './ToggleButton.styles';
import { Images } from '../../styles/images';

function ToggleButton() {
  const [value, setValue] = useState('Diary');

  const onChangeMode = (type) => {
    if (type === 'Diary') {
      setValue('Diary');
    } else if (type === 'Calendar') {
      setValue('Calendar');
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
