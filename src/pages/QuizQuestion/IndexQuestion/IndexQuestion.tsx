import CustomImage from 'components/CustomImage/CustomImage'
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
        <span className='question-index-strong'>
          {questionIndex < nbrQuestions ? questionIndex + 1 : nbrQuestions}
        </span>
        <span className='question-index-sm'>/{nbrQuestions}</span>
      </>
    </BoxIndexQuestion>
  )
}

export default IndexQuestion
