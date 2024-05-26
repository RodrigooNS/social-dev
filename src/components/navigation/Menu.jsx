import { useState, useRef, useEffect } from "react"
import styled from "styled-components"

const Dots = styled.img`
  cursor: pointer;
`

const StyledMenu = styled.div`
  width: 100px;
  background-color: ${props => props.theme.white};
  box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.25);
  position: absolute;
  right: 0;
  border-radius: 3px;
  padding: 5px;

  display: ${props => props.show ? 'block' : 'none'};
`

const StyledOption = styled.div`
  padding: 12px;
  cursor: pointer;
  font-size: 15px;

  :hover {
    background-color: ${props => props.theme.inputBackground}
  }
`

const StyledMenuContainer = styled.div`
  position: relative;
`

const Menu = ({ options }) => {
  const [show, setShow] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false)
      }
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [menuRef])

  const handleClick = (onClick) => {
    setShow(false)
    onClick()
  }

  return (
    <StyledMenuContainer>
      <Dots src="/three-dots.svg" height="20px" onClick={() => setShow(!show)} />
      <StyledMenu show={show} ref={menuRef} onBlur={() => setShow(false)} >
        {
          options.map((option, pos) => 
            <StyledOption 
              key={`menu-option-${pos}`}
              onClick={() => handleClick(option.onClick)}
            > 
              {option.text} 
            </StyledOption>
          )
        }
      </StyledMenu>
    </StyledMenuContainer>
  )
}

export default Menu