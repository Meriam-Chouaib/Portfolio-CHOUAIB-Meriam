import CustomImage from 'components/CustomImage/CustomImage'
import { StylesConstants } from 'config/constant/styles.constants'
import {
  BoxIndexQuestion,
  ItemNumStyled,
  QuestionIndexImageStyle,
} from 'pages/QuizQuestion/IndexQuestion/IndexQuestion.style'
import { IndexQuestionProps } from 'pages/QuizQuestion/IndexQuestion/IndexQuestion.type'

function IndexQuestion({
  img,
  questionIndex,
  nbrQuestions,
  fontSize,
  itemNum,
}: IndexQuestionProps) {
  return (
    <BoxIndexQuestion>
      {img && (
        <QuestionIndexImageStyle>
          <CustomImage src={img} alt='question index' />
        </QuestionIndexImageStyle>
      )}
      {itemNum && <ItemNumStyled fontSize={fontSize}>{itemNum}</ItemNumStyled>}
      {questionIndex && nbrQuestions && (
        <>
          <ItemNumStyled fontSize={fontSize}>
            {questionIndex < nbrQuestions ? questionIndex + 1 : nbrQuestions}
          </ItemNumStyled>
          <ItemNumStyled fontSize={fontSize}>/{nbrQuestions}</ItemNumStyled>
        </>
      )}
    </BoxIndexQuestion>
  )
}

export default IndexQuestion
