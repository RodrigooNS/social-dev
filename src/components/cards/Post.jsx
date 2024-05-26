import styled from "styled-components"
import moment from "moment"

import Menu from "../navigation/Menu"

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px 40px;
  margin: 20px 0;
  border-radius: 8px;

  @media (max-width: 500px) {
    padding: 20px 10px;
  }
`

const StyledUsername = styled.p`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.p`
  font-size: 12px
`

const TextContainer = styled.p`
  margin-top: 10px;
`

const MenuContainer = styled.div`
  float: right
`

function Post ({ user, date, text }) {
  
  const handlePostEdit = () => {
    console.log("HANDLE POST EDIT")
  }

  const handlePostDelete = () => {
    console.log("HANDLE POST DELETE")
  }
  
  return (
    <PostContainer>
      <MenuContainer>
        <Menu 
          options={[
            {
              text: 'Editar',
              onClick: handlePostEdit
            },
            {
              text: 'Deletar',
              onClick: handlePostDelete
            }
          ]} 
        />
      </MenuContainer>
      <StyledUsername> @{user} </StyledUsername>
      <StyledDate> {moment(date).format('LLL')} </StyledDate>
      <TextContainer> {text} </TextContainer>
    </PostContainer>
  )
}

export default Post