import { styled, Stack, Button } from '@mui/material'

export const StackAnswers = styled(Stack)(({ theme }) => ({
  width: '75%',
  backgroundColor: '#fdfbf9',
  padding: '15px',
  alignItems: 'center',
  position: 'absolute',
  borderRadius: '10px',
  top: '-50px',
  border: '1px solid #d8d8d8',

  [theme.breakpoints.down('md')]: {
    top: '-50px',
  },
  [theme.breakpoints.down('md')]: {
    top: '-60px',
  },
}))
export const StackTimeQuestion = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  position: 'absolute',
  width: '100%',
  top: '20px',
})
export const ButtonNext = styled(Button)(({ theme }) => ({
  backgroundColor: 'red',
  padding: '10px 0px',
  width: '70%',
  borderRadius: '24px',
  color: '#fff',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))
