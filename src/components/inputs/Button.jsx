import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  padding: 15px 20px;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.white};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    background-color: ${props => props.theme.primaryHover};
    color: ${props => props.theme.white}
  }

  :disabled {
    background-color: ${props => props.theme.disabled};
    cursor: default;
  }
`
export default Button