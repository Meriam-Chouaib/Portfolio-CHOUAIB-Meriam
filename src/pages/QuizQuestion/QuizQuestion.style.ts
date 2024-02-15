import { styled, Stack, Button } from '@mui/material'

export const StackAnswers = styled(Stack)({
  width: '75%',
  backgroundColor: '#fffaf2',
  padding: '15px',
  alignItems: 'center',
  position: 'absolute',
  top: '-80px',
})
export const StackTimeQuestion = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  position: 'absolute',
  width: '100%',
  top: '20px',
})
export const ButtonNext = styled(Button)({
  backgroundColor: 'red',
  padding: '10px 0px',
  width: '72%',
  borderRadius: '24px',
  color: '#fff',
  fontWeight: 'bold',
})
