import CustomImage from 'components/CustomImage/CustomImage'
import { StylesConstants } from 'config/constant/styles.constants'
import {
  BoxIndexQuestion,
  QuestionIndexImageStyle,
} from 'pages/QuizQuestion/IndexQuestion/IndexQuestion.style'
import { IndexQuestionProps } from 'pages/QuizQuestion/IndexQuestion/IndexQuestion.type'

function IndexQuestion({
  quizBlackIcon,
  questionIndex,
  nbrQuestions,
}: IndexQuestionProps) {
  return (
    <BoxIndexQuestion>
      <QuestionIndexImageStyle>
        <CustomImage src={quizBlackIcon} alt='question index' />
      </QuestionIndexImageStyle>
      <>
        <span style={{ color: StylesConstants.green }}>
          {questionIndex < nbrQuestions ? questionIndex + 1 : nbrQuestions}
        </span>
        <span>/{nbrQuestions}</span>
      </>
    </BoxIndexQuestion>
  )
}

export default IndexQuestion
