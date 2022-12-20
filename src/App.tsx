import React from 'react';

import BlogCard from './hoc/BlogCard';

import { GlobalStyle, responsiveTheme } from './global.css';

import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import Projects from 'pages/Projects/Projects';

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
          <div className='App'>
            <Projects />
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
