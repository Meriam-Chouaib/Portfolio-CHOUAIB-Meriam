import { StackStyled } from 'pages/QuizQuestion/RoundedComponent/RoundedComponent.style'

function RoundedComponent({
  bgColor,
  bgImg,
}: {
  bgColor?: string
  bgImg?: string
}) {
  return <StackStyled bgColor={bgColor} bgImg={bgImg}></StackStyled>
}

export default RoundedComponent
