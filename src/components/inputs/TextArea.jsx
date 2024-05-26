import styled from "styled-components";
import { useController } from "react-hook-form";

const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.inputBorder};
  background-color: ${props => props.theme.inputBackground};
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`

const TextArea = ({ name, control, defaultValue ='', ...props }) => {
  const { 
    field: { value, onChange }
   } = useController ({ name, control, defaultValue })
  return(
    <StyledTextArea {...props} value={value} onChange={onChange} />
  )
}

export default TextArea