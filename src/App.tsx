import React from 'react';

import BlogCard from './hoc/BlogCard';

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
          <div className='App'>
            <BlogCard
              image={{
                url:
                  'data:image/jpeg;base64,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',
                alt: 'chameleon',
                description:
                  'Chameleon jwoiefjowf oeiwfj eiowfjweofi jwefi wejfowei fwoe fiew ofijwe fwoij wefj woweifj weiwfj oweifj weif oifj.',
                title: 'Chameleon'
              }}
              title='Example Title'
              subTitle='Example Sub Title'
              avatar={{alt: 'Christian Schlaiss', src: 'Broken URL'}}
            />
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
