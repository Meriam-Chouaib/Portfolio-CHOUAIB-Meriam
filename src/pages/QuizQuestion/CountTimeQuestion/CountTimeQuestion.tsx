import { BoxCountDownQuestion } from 'pages/QuizQuestion/CountTimeQuestion/CountTimeQuestion.style'
import { CountTimeQuestionProps } from 'pages/QuizQuestion/CountTimeQuestion/CountTimeQuestion.type'
import CountDownQuestion from 'pages/QuizQuestion/CountTimeQuestion/Countdown/CountDownQuiz'

function CountTimeQuestion({
  timer,
  handleNext,
  setTimeQuestionTaken,
  questionIndex,
}: CountTimeQuestionProps) {
  return (
    <BoxCountDownQuestion>
      <CountDownQuestion
        countdownTime={timer}
        timeOver={handleNext}
        setTimeTaken={setTimeQuestionTaken}
        questionIndex={questionIndex}
        light={true}
      />
    </BoxCountDownQuestion>
  )
}

export default CountTimeQuestion
