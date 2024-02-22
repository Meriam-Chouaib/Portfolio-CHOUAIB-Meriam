import { Container, styled } from '@mui/material'

export const CustomContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}))
