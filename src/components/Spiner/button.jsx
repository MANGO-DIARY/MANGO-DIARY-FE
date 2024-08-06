import React from 'react';
import { css } from '@emotion/react';

import { SpinerWrap } from './styles';
import Loading from '../loading/Loading';
import { CircularProgress } from '@mui/material';

function Spiner() {
  return (
    <SpinerWrap>
      <CircularProgress className="progress" color="inherit" />
    </SpinerWrap>
  );
}

export default Spiner;
