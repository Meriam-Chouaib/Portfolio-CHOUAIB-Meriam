import { Button, Stack, styled } from '@mui/material'

export const ButtonStyled = styled(Button)(({ width }: { width?: string }) => ({
  width: width,
}))
export const StackButton = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
})
