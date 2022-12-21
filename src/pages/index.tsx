import React from 'react'

import { GlobalStyle, responsiveTheme } from 'global.css'

import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from 'styled-components'

import Projects from './projects'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function HomePage() {
  const [mode, setMode] = React.useState<PaletteMode>('dark')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        )
      },
    }),
    [],
  )
  const theme = React.useMemo(() => createTheme(responsiveTheme(mode)), [mode])

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
  )
}
