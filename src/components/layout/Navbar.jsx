import Link from "next/link";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";

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

const StyledLogout = styled.a`
  cursor: pointer;
`

function Navbar () {
  const router = useRouter()

  const handleLogout = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`)
    router.push('/login')
  }

  return (
    <StyledNavbvar>
      <StyledLogo>#SocialDev</StyledLogo>
      <div>
        <StyledLogout onClick={handleLogout}>Desconectar</StyledLogout>
      </div>
    </StyledNavbvar>
  )
}

export default Navbar