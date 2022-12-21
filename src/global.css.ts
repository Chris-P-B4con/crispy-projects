/* eslint-disable indent */
import { createTheme } from '@mui/material'
import { createGlobalStyle } from 'styled-components'
import { COLORS } from 'lib/globalVariables'
import { PaletteMode } from '@mui/material'

export const theme = createTheme({})

export const responsiveTheme = (mode: PaletteMode) => ({
  backDrop: {
    backdropFilter: 'blur(3px)',
    backgroundColor: 'rgba(0,0,30,0.4)',
  },
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: {
            main: COLORS.dark.primary.main,
            light: COLORS.dark.primary.light,
            dark: COLORS.dark.primary.dark,
            error: COLORS.dark.error,
            buttonLabelActive: COLORS.dark.buttonLabelActive,
          },
          secondary: {
            main: COLORS.dark.secondary.main,
            light: COLORS.dark.secondary.light,
            dark: COLORS.dark.secondary.dark,
            error: COLORS.dark.error,
            buttonLabelActive: COLORS.dark.buttonLabelActive,
          },
          background: {
            default: COLORS.dark.background,
            level1: COLORS.dark.level1,
            level2: COLORS.dark.level2,
          },
          text: {
            primary: COLORS.dark.text.primary,
            secondary: COLORS.dark.text.secondary,
            disabled: COLORS.dark.text.disabled,
          },
        }
      : {
          primary: {
            main: COLORS.light.primary.main,
            light: COLORS.light.primary.light,
            dark: COLORS.light.primary.dark,
            error: COLORS.light.error,
            buttonLabelActive: COLORS.light.buttonLabelActive,
          },
          secondary: {
            main: COLORS.light.secondary.main,
            light: COLORS.light.secondary.light,
            dark: COLORS.light.secondary.dark,
            error: COLORS.light.error,
            buttonLabelActive: COLORS.light.buttonLabelActive,
          },
          background: {
            default: COLORS.light.background,
            level1: COLORS.light.level1,
            level2: COLORS.light.level2,
          },
          text: {
            primary: COLORS.light.text.primary,
            secondary: COLORS.light.text.secondary,
            disabled: COLORS.light.text.disabled,
          },
        }),
  },
})

export const GlobalStyle = createGlobalStyle`
  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    --border-radius: 6px;
    --shadow-color: 0deg 0% 26%;
    --shadow-elevation-low:
    0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.56),
    0.4px 0.7px 0.7px -2.1px hsl(var(--shadow-color) / 0.42),
    1px 2px 2px -4.1px hsl(var(--shadow-color) / 0.27);
    --shadow-elevation-medium:
      0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.59),
      0.6px 1.1px 1.1px -1.4px hsl(var(--shadow-color) / 0.48),
      1.8px 3.6px 3.5px -2.8px hsl(var(--shadow-color) / 0.36),
      5px 10px 9.8px -4.1px hsl(var(--shadow-color) / 0.24);
    --shadow-elevation-high:
      0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.55),
      0.7px 1.4px 1.4px -0.6px hsl(var(--shadow-color) / 0.5),
      1.5px 2.9px 2.9px -1.2px hsl(var(--shadow-color) / 0.44),
      2.9px 5.9px 5.8px -1.8px hsl(var(--shadow-color) / 0.39),
      5.6px 11.2px 11px -2.4px hsl(var(--shadow-color) / 0.33),
      9.8px 19.6px 19.2px -3px hsl(var(--shadow-color) / 0.28),
      16.1px 32.1px 31.5px -3.6px hsl(var(--shadow-color) / 0.22),
      24.8px 49.5px 48.6px -4.1px hsl(var(--shadow-color) / 0.17);
  }
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  body {
    background-size: cover;
    height: 100%;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  .icon{
    width: 9rem;
    align-self: flex-end;
  }
  @media only screen and (max-width: 600px) {
    .icon {width: 5rem;}
    
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`
