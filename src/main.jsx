import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@styles/globalTheme';
import App from './App';
import ReactQueryProviders from './util/react-query-provider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <ReactQueryProviders>
        <App />
      </ReactQueryProviders>
    </CssBaseline>
  </ThemeProvider>
);
