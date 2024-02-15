import RoundedComponent from 'pages/QuizQuestion/RoundedComponent/RoundedComponent'
import imageLibrary from 'assets/images/library-books-1.jpg'
import { Grid, Stack, Typography } from '@mui/material'
import AnswerQuestion from 'pages/AboutPage/AnswerQuestion/AnswerQuestion'
import {
  ButtonNext,
  StackAnswers,
  StackTimeQuestion,
} from 'pages/QuizQuestion/QuizQuestion.style'
import IndexQuestion from 'pages/QuizQuestion/IndexQuestion/IndexQuestion'
import quizBlackIcon from 'assets/images/quiz-icon-footer.svg'
import CountTimeQuestion from 'pages/QuizQuestion/CountTimeQuestion/CountTimeQuestion'

export const answers = [
  'ipsum dolor sit amet consectetur',
  'ipsum dolor sit  consectetur',
  'ipsum sit amet consectetur ipsum dolor',
  'ipsum sit amet consectetur ipsum dolor',
]
function QuizQuestion() {
  return (
    <Stack sx={{ position: 'relative' }}>
      <RoundedComponent bgColor='pink' bgImg={imageLibrary} />
      <StackTimeQuestion>
        <IndexQuestion
          quizBlackIcon={quizBlackIcon}
          questionIndex={1}
          nbrQuestions={2}
        />
        <CountTimeQuestion
          timer={60}
          handleNext={() => ({})}
          setTimeQuestionTaken={() => ({})}
          questionIndex={1}
        />
      </StackTimeQuestion>

      <Stack alignItems={'center'} position={'relative'}>
        <StackAnswers gap={2}>
          <Typography variant='h2' sx={{ textAlign: 'center' }}>
            Quiz: Music
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            mollitia quae pariatur ?
          </Typography>
          <Grid container spacing={2}>
            {answers.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <AnswerQuestion txt={item}></AnswerQuestion>
              </Grid>
            ))}
          </Grid>
          <ButtonNext>Next Question</ButtonNext>
        </StackAnswers>
      </Stack>
    </Stack>
  )
}

export default QuizQuestion
