import { forwardRef } from "react"
import styled from "styled-components"

const InputContainer = styled.div`
  width: 100%
`

const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;

`

const getBorderColor = (props) => props.error ? props.theme.error : props.theme.inputBorder

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${props => getBorderColor(props)};
  background-color: ${props => props.theme.inputBackground};
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 10px;

  &:focus, &:active {
    border: 1px solid ${props => getBorderColor(props)};
    outline: 1px solid ${props => getBorderColor(props)};
  }
`

const ErrorLabel = styled.span`
  color: ${props => props.theme.error};
  font-weight: bold;
  font-size: 14px;
`

const errorMessage = {
  'string.empty': 'Este campo é obrigatório',
  'string.email': 'Digite um e-mail válido'
}

const Input = forwardRef(({ label, error, ...props }, ref) => {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput error={error} {...props} ref={ref} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </InputContainer>
  )
})

export default Input