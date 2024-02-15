import { Typography } from '@mui/material'
import CustomImage from 'components/CustomImage/CustomImage'
import CustomStopWatchSvg from 'components/CustomStopWatchSvg/CustomStopWatchSvg'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CountdownQuizProps } from './CountDownQuiz.type'
import imgWatch from 'assets/images/img-card-two.png'
import {
  BoxCountWatch,
  BoxTimer,
  TextTimer,
} from 'pages/QuizQuestion/CountTimeQuestion/Countdown/CountDownQuiz.style'

const CountDownQuestion = ({
  countdownTime,
  questionIndex,
  timeOver,
  setTimeTaken,
  light,
}: CountdownQuizProps) => {
  const { t } = useTranslation()
  const [timerTime, setTimerTime] = useState(countdownTime)
  const [isTimeOver, setIsTimeOver] = useState(false)

  useEffect(() => {
    if (isTimeOver) {
      timeOver()
    }
  }, [isTimeOver])

  let newTime = countdownTime
  useEffect(() => {
    setIsTimeOver(false)
    const timer = setInterval(() => {
      if (newTime - 1 >= 0) {
        newTime--
        setTimerTime(newTime)
      } else {
        clearInterval(timer)
        setIsTimeOver(true)
      }
    }, 1000)

    return () => {
      clearInterval(timer)
      setTimeTaken(countdownTime - newTime)
    }
  }, [questionIndex])

  useEffect(() => {
    setTimerTime(countdownTime)
  }, [questionIndex])

  return (
    <BoxCountWatch>
      {light ? <CustomImage src={imgWatch} /> : <CustomStopWatchSvg />}
      <BoxTimer>
        <TextTimer>
          {timerTime}
          <sup style={{ verticalAlign: 'baseline' }}>{t('common.seconde')}</sup>
        </TextTimer>
      </BoxTimer>
    </BoxCountWatch>
  )
}

export default CountDownQuestion
