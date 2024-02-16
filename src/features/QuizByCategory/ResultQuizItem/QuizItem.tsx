import { Box, Stack, Typography } from '@mui/material'

import IndexQuestion from 'pages/QuizQuestion/IndexQuestion/IndexQuestion'
import {
  ImgItem,
  ItemResult,
  Seconds,
  StackImg,
  StackItem,
} from 'features/QuizByCategory/ResultQuizItem/QuizItem.style'
import { useTranslation } from 'react-i18next'
import { ResultQuizItemProps } from 'features/QuizByCategory/ResultQuizItem/QuizItem.constant'
function QuizItem({
  questionIndex,
  nbrQuestions,
  withSeconds,
  txt,
  fontSize,
  itemNum,
  bgColor,
  img,
}: ResultQuizItemProps) {
  const { t } = useTranslation()

  return (
    <ItemResult>
      <StackImg bgcolor={bgColor}>
        {img && <ImgItem img={img}></ImgItem>}
      </StackImg>
      <StackItem>
        <Typography>{txt}</Typography>

        <IndexQuestion
          questionIndex={questionIndex}
          nbrQuestions={nbrQuestions}
          fontSize={fontSize}
          itemNum={itemNum}
        />

        {
          <Stack>
            {withSeconds && <Seconds>{t('common.secondes')}</Seconds>}
          </Stack>
        }
      </StackItem>
    </ItemResult>
  )
}

export default QuizItem
