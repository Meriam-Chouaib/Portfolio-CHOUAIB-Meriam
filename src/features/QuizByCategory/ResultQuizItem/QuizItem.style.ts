import { styled, Stack, Typography } from '@mui/material'

export const ItemResult = styled(Stack)(({ theme }) => ({
  paddingBottom: '10px',
  border: '1px solid #d8d8d8',
  borderRadius: '0 0 10px 10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px',
  [theme.breakpoints.down(830)]: {
    width: '160px',
  },
}))
export const ImgItem = styled(Stack)(({ img }: { img?: string }) => ({
  width: '100%',
  height: '160px',
  borderRadius: '10px 10px 0px 0px',
  backgroundImage: `url(${img})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}))

export const StackItem = styled(Stack)({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
export const StackImg = styled(Stack)({
  height: '108px',
  width: '100%',
})
export const Seconds = styled(Typography)({
  fontSize: '10px',
  marginTop: '-12px',
})
