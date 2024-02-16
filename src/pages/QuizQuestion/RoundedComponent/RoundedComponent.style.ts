import { Stack, styled } from '@mui/material'

export const StackStyled = styled(Stack)(
  ({
    bgColor,
    bgImg,
    bgSize,
  }: {
    bgColor?: string
    bgImg?: string
    bgSize?: string
  }) => ({
    backgroundColor: bgColor,
    backgroundImage: `url(${bgImg})`,
    height: '200px',
    width: '100%',
    backgroundSize: bgSize ? bgSize : 'contain',
    backgroundRepeat: 'no-repeat',
    borderRadius: '0rem 0rem 7rem 7rem',
    backgroundPosition: 'center',
  })
)
