import { useFormContext } from 'react-hook-form';
// import Skeleton from '../skeleton/index.js';
import React from 'react';
import { Images } from '../../styles/images.js';
import { AlertWrap } from './styles.js';
import Button from '../button/button.jsx';
// ----------------------------------------------------------------------

export default function Alert({ errorMessages, successMessages, OnClose }) {
  return (
    <AlertWrap>
      {errorMessages && (
        <Alert
          severity="error"
          sx={{ width: '80%' }}
          onClose={() => {
            OnClose();
          }}
        >
          {errorMessages}
        </Alert>
      )}
      {successMessages && (
        <Alert
          severity="success"
          onClose={() => {
            OnClose();
          }}
        >
          {successMessages}
        </Alert>
      )}
    </AlertWrap>
  );
}
