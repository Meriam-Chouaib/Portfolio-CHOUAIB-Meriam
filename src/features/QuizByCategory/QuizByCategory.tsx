import { GridItem, Title } from 'features/QuizByCategory/QuizByCategory.style'
import QuizItem from 'features/QuizByCategory/ResultQuizItem/QuizItem'
import { ResultQuizItemProps } from 'features/QuizByCategory/ResultQuizItem/QuizItem.constant'
import { Grid, Stack } from '@mui/material'
import imgNbQuestions from 'assets/images/notif-quiz.svg'
import imgQuiz from 'assets/images/Quiz_image.svg'
import imgTime from 'assets/images/time-quiz.svg'
import CustomButton from 'components/Buttons/CustomButton/CustomButton'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import RoundedBg from 'components/RoundedBg/RoundedBg'
import CustomImage from 'components/CustomImage/CustomImage'

function QuizByCategory({ text, img }: { text: string; img: string }) {
  const navigate = useNavigate()
  const QuizInfo: ResultQuizItemProps[] = [
    {
      txt: 'Number od questions points',
      itemNum: 10,
      img: imgTime,
      bgColor: '#86C8BC',
    },
    {
      txt: 'Response time per question',
      withSeconds: true,
      itemNum: 60,
      img: imgNbQuestions,
      bgColor: 'pink',
    },
  ]
  const { t } = useTranslation()
  const onStartQuiz = () => ({
    // navigate(RouteIdEnum.quizQuestion)
  })
  return (
    <>
      {/* <StackStyled bgImg={img} bgColor='#ffd100'></StackStyled> */}
      <Stack position={'relative'}>
        <Stack
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            bottom: '8px',
          }}
        >
          <CustomImage src={imgQuiz} width='50%' height='auto' />
        </Stack>
        <RoundedBg color='#ffd100' class='mask-type:alpha' />
      </Stack>
      <Title variant='h2'>{text}</Title>
      <Grid container gap={2} sx={{ justifyContent: 'center' }}>
        {QuizInfo.map((item: ResultQuizItemProps, index) => (
          <GridItem item sm={3} md={3} lg={2} key={`Quiz-result-item-${index}`}>
            <QuizItem
              img={item.img}
              nbrQuestions={item.nbrQuestions}
              questionIndex={item.questionIndex}
              withSeconds={item.withSeconds}
              txt={item.txt}
              fontSize={'35px'}
              bgColor={item.bgColor}
              itemNum={item.itemNum}
              key={`Quiz-result-item-${index}`}
            />
          </GridItem>
        ))}
      </Grid>
      <CustomButton
        margin='10px 0px 0px 0px'
        label={t('quiz.startGame')}
        onClick={onStartQuiz}
        width='200px'
      ></CustomButton>
    </>
  )
}

export default QuizByCategory
