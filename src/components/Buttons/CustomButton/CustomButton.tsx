import {
  ButtonStyled,
  StackButton,
} from 'components/Buttons/CustomButton/CustomButton.style'

function CustomButton({
  label,
  onClick,
  width,
}: {
  label: string
  onClick: () => void
  width?: string
}) {
  return (
    <StackButton>
      <ButtonStyled width={width} onClick={onClick}>
        {label}
      </ButtonStyled>
    </StackButton>
  )
}

export default CustomButton
