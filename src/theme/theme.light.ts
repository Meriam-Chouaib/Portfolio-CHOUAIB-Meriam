import { ThemeOptions } from '@mui/material/styles'
import breakpoints from 'theme/breakpoints'
import typography from 'theme/typography'

const paletteLight: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#69d6d4',
      dark: '#36054a',
      light: '#7ED7C1',
      contrastText: '#110835',
    },
    secondary: {
      main: '#380855',
      light: '#9EE6CF',
      dark: '#4BA2AC',
      contrastText: '#461959',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
    },
    error: {
      main: '#e02f2f',
    },
    success: {
      main: '#23810a',
    },
    text: {
      primary: '#461959',
    },
  },
  typography,
  breakpoints,
}

export default paletteLight
