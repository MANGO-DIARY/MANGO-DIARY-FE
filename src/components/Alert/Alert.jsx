import React from 'react';
import { AlertWrap } from './styles.js';
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
