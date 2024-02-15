import { Grid, Stack, styled } from '@mui/material'

export const Answer = styled(Grid)(({ theme }) => ({
  border: '2px solid #000',
  padding: '9px 8px',

  borderRadius: '24px',
  fontWeight: '600',
  fontFamily: 'Inter, sans-serif',
  [theme.breakpoints.down('sm')]: {},
}))
