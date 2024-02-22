import { Theme } from '@mui/material'

export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverride: {
        maxWidthMd: {
          maxWidth: 400,
        },
        maxWidthLg: {
          maxWidth: 500,
        },
      },
    },
  }
}
