import Link from "next/link";
import styled from "styled-components";

const StyledNavbvar = styled.div`
  background-color: ${props => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 100px;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`

const StyledLogo = styled.span`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
`

function Navbar () {
  return (
    <StyledNavbvar>
      <StyledLogo>#SocialDev</StyledLogo>
      <div>
        <Link href="/login">Desconectar</Link>
      </div>
    </StyledNavbvar>
  )
}

export default Navbar