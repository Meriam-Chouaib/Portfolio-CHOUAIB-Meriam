import { StackStyled } from 'pages/QuizQuestion/RoundedComponent/RoundedComponent.style'

function RoundedComponent({
  bgColor,
  bgImg,
  bgSize,
}: {
  bgColor?: string
  bgImg?: string
  bgSize?: string
}) {
  return (
    <StackStyled bgColor={bgColor} bgImg={bgImg} bgSize={bgSize}></StackStyled>
  )
}

export default RoundedComponent
