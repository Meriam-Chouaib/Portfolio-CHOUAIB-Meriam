import {
  ButtonStyled,
  StackButton,
} from 'components/Buttons/CustomButton/CustomButton.style'

function CustomButton({
  label,
  onClick,
  width,
  margin,
}: {
  label: string
  onClick: () => void
  width?: string
  margin?: string
}) {
  return (
    <StackButton>
      <ButtonStyled width={width} onClick={onClick} margin={margin}>
        {label}
      </ButtonStyled>
    </StackButton>
  )
}

export default CustomButton
