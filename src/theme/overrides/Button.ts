import { Theme } from '@mui/material'
import { GlobalFonts } from 'config/pages/fonts.config'

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          transition: '0s',
          backgroundColor: 'red',
          borderRadius: '65px',
          padding: '10px 10px',
          height: '40px',
          color: '#fff',
          fontFamily: GlobalFonts.FONT_PRIMARY,
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#f40909b5',
          },
        },
        sizeLarge: {
          height: 50,
        },
        contained: {
          padding: '13.5px 24px',
          borderRadius: '65px',
          background: theme.palette.grey[200],
          color: theme.palette.grey[800],
          fill: theme.palette.primary.main,
          '&:hover': {
            boxShadow: 'none',
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
            color: theme.palette.common.white,
            fill: theme.palette.common.white,
          },
          '&.Mui-disabled': {
            opacity: 1,
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.grey[500],
            fill: theme.palette.grey[500],
          },
        },
      },
    },
  }
}
