import { GridItem, Title } from 'features/QuizByCategory/QuizByCategory.style'
import { StackStyled } from 'pages/QuizQuestion/RoundedComponent/RoundedComponent.style'
import QuizItem from 'features/QuizByCategory/ResultQuizItem/QuizItem'
import { ResultQuizItemProps } from 'features/QuizByCategory/ResultQuizItem/QuizItem.constant'
import { Grid, Stack } from '@mui/material'
import imgNbQuestions from 'assets/images/notification-bell.svg'
import imgTime from 'assets/images/montre.svg'
import AddButton from 'components/Buttons/AddButton/AddButton'
import CustomButton from 'components/Buttons/CustomButton/CustomButton'
import { useTranslation } from 'react-i18next'

function QuizByCategory({ text, img }: { text: string; img: string }) {
  const QuizInfo: ResultQuizItemProps[] = [
    {
      txt: 'Number od questions points',
      itemNum: 10,
      img: imgTime,
      bgColor: 'green',
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
  return (
    <>
      <StackStyled bgImg={img} bgColor='#ffd100'></StackStyled>
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
        label={t('quiz.startGame')}
        onClick={() => ({})}
        width='200px'
      ></CustomButton>
    </>
  )
}

export default QuizByCategory
