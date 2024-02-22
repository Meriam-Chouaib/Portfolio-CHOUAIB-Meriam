import RoundedComponent from 'pages/QuizQuestion/RoundedComponent/RoundedComponent'
import imageLibrary from 'assets/images/library-books-1.jpg'
import { Grid, Stack, Typography } from '@mui/material'
import AnswerQuestion from 'pages/AboutPage/AnswerQuestion/AnswerQuestion'
import {
  ButtonNext,
  QuestionText,
  StackAnswers,
  StackTimeQuestion,
} from 'pages/QuizQuestion/QuizQuestion.style'
import IndexQuestion from 'pages/QuizQuestion/IndexQuestion/IndexQuestion'
import quizBlackIcon from 'assets/images/quiz-icon-footer.svg'
import CountTimeQuestion from 'pages/QuizQuestion/CountTimeQuestion/CountTimeQuestion'
import { GlobalFonts } from 'config/pages/fonts.config'
import { useState } from 'react'

export const answers = [
  'ipsum dolor ',
  'sit consectetur',
  'ipsum dolor',
  'ipsum sit dolor',
]
function QuizQuestion() {
  const [activeAnswer, setActiveAnswer] = useState(0)
  return (
    <Stack sx={{ position: 'relative' }}>
      <RoundedComponent bgImg={imageLibrary} bgSize='cover' />
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
          <Typography
            variant='h2'
            sx={{
              textAlign: 'center',
              fontFamily: GlobalFonts.FONT_PRIMARY,
              fontWeight: 'bold',
            }}
          >
            Quiz: Music
          </Typography>

          <QuestionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            mollitia quae pariatur ?
          </QuestionText>
          <Grid container spacing={2}>
            {answers.map((item, index) => (
              <Grid item xs={12} md={12} key={index}>
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
