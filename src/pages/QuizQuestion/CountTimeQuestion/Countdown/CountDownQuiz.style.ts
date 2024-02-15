import { Box, Typography, styled } from '@mui/material'
import { GlobalFonts } from 'config/pages/fonts.config'

export const BoxCountWatch = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
export const BoxTimer = styled(Box)({
  marginLeft: '10px',
})
export const TextTimer = styled(Typography)(({ theme }) => ({
  fontFamily: GlobalFonts.FONT_PRIMARY_BOLD,
  fontSize: '25px',
  color: 'red',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
  sup: {
    fontSize: '10px',
    color: theme.palette.text.primary,
    marginLeft: '2px',
  },
}))
