import React from 'react';

import { SpinerWrap } from './styles';
import { CircularProgress } from '@mui/material';

function Spiner() {
  return (
    <SpinerWrap>
      <CircularProgress className="progress" color="inherit" />
    </SpinerWrap>
  );
}

export default Spiner;
