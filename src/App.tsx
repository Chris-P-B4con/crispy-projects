import React from 'react';

import BlogCard from './components/blog-card/BlogCard';

import { GlobalStyle, responsiveTheme } from './global.css';

import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(responsiveTheme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />
          <BlogCard />
        </ThemeProvider>
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
