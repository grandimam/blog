import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react'

const theme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#121212',
        paper: '#1b1b1b',
      },
      text: {
        secondary: '#b85a5e',
      },
      primary: {
        main: '#9e2a2f',
      },
      secondary: {
        main: '#388e3c',
      },
      action: {
        active: '#ffffff',
        hover: '#333333',
        selected: '#9e2a2f',
      },
    },
    typography: {
      fontFamily: '"Amiri", "serif"',
    },
  });



const ThemeProviderWrapper = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeProviderWrapper;