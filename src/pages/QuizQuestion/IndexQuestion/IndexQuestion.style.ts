import { Box } from '@mui/material'
import { styled } from '@mui/system'
export const QuestionIndexImageStyle = styled(Box)(({ theme }) => ({
  marginRight: '5px',
  lineHeight: 0,
  img: {
    height: '27px',
    [theme.breakpoints.down('sm')]: {
      height: '20px',
    },
  },
}))
export const BoxIndexQuestion = styled(Box)({
  width: 'max-content',
  backgroundColor: 'white',
  borderRadius: '0px 6px 6px 0px',
  padding: '5px',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
})
