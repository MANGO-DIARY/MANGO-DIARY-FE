import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import Calendar from '../../components/calendar/calendar';
import Header from '../../components/header/Header';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import { Images } from '../../styles/images';
import { NavBar } from '../../components';

export default function CalendarPage() {
  const navigate = useNavigate();

  return (
    <div className="use-navbar">
      <Header iconSrc={Images.left} onClick={() => navigate(-1)} />
      <Stack alignItems="center">
        <ToggleButton />
        <Calendar />
      </Stack>
      <NavBar />
    </div>
  );
}
