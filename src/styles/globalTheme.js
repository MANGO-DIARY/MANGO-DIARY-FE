import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: `'Ownglyph_ryurue-Rg', sans-serif !important;`,
    },
    palette: {
      primary: {
        main: '#FDD441',
      },
      secondary: {
        main: '#FF5761',
      },
    },
  })
);

export default theme;
