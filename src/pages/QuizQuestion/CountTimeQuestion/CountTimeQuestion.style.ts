import { Box, styled } from '@mui/material'
import { StylesConstants } from 'config/constant/styles.constants'

export const BoxCountDownQuestion = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  boxShadow: StylesConstants.MainBoxShadow,
  borderRadius: '6px 0px 0px 6px',
  padding: '2px 6px',
  lineHeight: 0,
  height: '27px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'max-width',
  img: {
    height: '27px',
    marginRight: '5px',
    [theme.breakpoints.down('sm')]: {
      height: '20px',
    },
  },
}))
