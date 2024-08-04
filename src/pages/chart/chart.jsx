import React from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from '../../components/chart/chart';
import { Header, NavBar } from '../../components';
import { Images } from '../../styles/images';

export default function ChartPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header title="월간통계" iconSrc={Images.left} onClick={() => navigate(-1)} />
      <Chart />
      <NavBar />
    </>
  );
}
