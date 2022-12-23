import React from 'react'

// Styling
import { createTheme } from '@mui/material/styles'
import { GlobalStyle, responsiveTheme } from 'global.css'
import { PaletteMode } from '@mui/material'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { ThemeProvider } from 'styled-components'

// Components and Pages
import Projects from './projects'
import NavBar from 'components/NavBar'

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
            <NavBar />
            <Projects />
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  )
}
