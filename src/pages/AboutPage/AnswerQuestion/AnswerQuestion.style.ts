import { Grid, Stack, styled } from '@mui/material'

export const Answer = styled(Grid)(({ theme }) => ({
  border: '2px solid #000',
  padding: '9px 8px',
  // width: '70%',
  borderRadius: '15px',
  fontWeight: '600',
  fontFamily: 'Inter, sans-serif',
  [theme.breakpoints.down('sm')]: {
    // width: '100%',
  },
}))
