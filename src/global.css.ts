import { createTheme } from '@mui/material';
import { createGlobalStyle } from 'styled-components';
import { COLORS } from './lib/globalVariables';
import { PaletteMode } from '@mui/material';

export const theme = createTheme({});

export const responsiveTheme = (mode: PaletteMode) => ({
  backDrop: {
    backdropFilter: 'blur(3px)',
    backgroundColor: 'rgba(0,0,30,0.4)'
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
            buttonLabelActive: COLORS.dark.buttonLabelActive
          },
          secondary: {
            main: COLORS.dark.secondary.main,
            light: COLORS.dark.secondary.light,
            dark: COLORS.dark.secondary.dark,
            error: COLORS.dark.error,
            buttonLabelActive: COLORS.dark.buttonLabelActive
          },
          background: {
            default: COLORS.dark.background
          },
          text: {
            primary: COLORS.dark.primary.text,
            secondary: COLORS.dark.secondary.text,
          },
        }
      : {
          primary: {
            main: COLORS.light.main,
            light: COLORS.light.light,
            dark: COLORS.light.dark,
            contrastText: COLORS.light.contrastText,
            error: COLORS.light.error,
            buttonLabelActive: COLORS.light.buttonLabelActive
          },
          background: {
            default: COLORS.light.background
          },
          text: {
            primary: COLORS.light.text,
            h1: COLORS.light.h1,
            h2: COLORS.light.h2
          }
        })
  }
});

export const GlobalStyle = createGlobalStyle`
  .App {
    text-align: center;
    overflow: auto;
    height: 100vh;
  }
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  body {
    background-size: cover;
    height: 100vh;
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
}`;
