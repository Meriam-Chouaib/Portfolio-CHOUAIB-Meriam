import CustomImage from 'components/CustomImage/CustomImage'
import { StylesConstants } from 'config/constant/styles.constants'
import {
  BoxIndexQuestion,
  ItemNumStyled,
  QuestionIndexImageStyle,
} from 'pages/QuizQuestion/IndexQuestion/IndexQuestion.style'
import { IndexQuestionProps } from 'pages/QuizQuestion/IndexQuestion/IndexQuestion.type'

function IndexQuestion({
  questionIndex,
  nbrQuestions,
  fontSize,
  itemNum,
  quizBlackIcon,
}: IndexQuestionProps) {
  return (
    <BoxIndexQuestion>
      {itemNum && <ItemNumStyled fontSize={fontSize}>{itemNum}</ItemNumStyled>}
      {questionIndex && nbrQuestions && (
        <>
          <ItemNumStyled fontSize={fontSize}>
            {questionIndex < nbrQuestions ? questionIndex + 1 : nbrQuestions}
          </ItemNumStyled>
          <ItemNumStyled fontSize={fontSize}>/{nbrQuestions}</ItemNumStyled>
        </>
      )}
      {quizBlackIcon && (
        <QuestionIndexImageStyle>
          <CustomImage
            src={quizBlackIcon}
            alt='question index'
            margin='0px 0px  0px 10px'
            height='20px'
          />
        </QuestionIndexImageStyle>
      )}
    </BoxIndexQuestion>
  )
}

export default IndexQuestion
