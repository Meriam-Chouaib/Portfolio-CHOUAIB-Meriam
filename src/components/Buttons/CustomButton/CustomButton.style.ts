import { Button, Stack, styled } from '@mui/material'

export const ButtonStyled = styled(Button)(
  ({ width, margin }: { width?: string; margin?: string }) => ({
    width: width,
    margin: margin,
  })
)
export const StackButton = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
})
