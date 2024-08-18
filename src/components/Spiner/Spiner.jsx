import React from 'react';

import { CircularProgress } from '@mui/material';
import { SpinerWrap } from './styles';

function Spiner() {
  return (
    <SpinerWrap>
      <CircularProgress className="progress" color="inherit" />
    </SpinerWrap>
  );
}

export default Spiner;
