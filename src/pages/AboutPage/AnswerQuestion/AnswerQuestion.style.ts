import { Grid, Stack, styled } from '@mui/material'

export const Answer = styled(Grid)(({ theme }) => ({
  border: '1.6px solid #000',
  padding: '12px 11px',
  textAlign: 'center',
  borderRadius: '24px',
  fontWeight: '600',
  fontFamily: 'Inter, sans-serif',
  ':active ,:hover': {
    backgroundColor: ' #000',
    color: 'white',
  },
  ':after': {
    backgroundColor: ' #ffbf00',
  },
}))
