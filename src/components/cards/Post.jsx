import styled from "styled-components"

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

function Post () {
  return (
    <PostContainer>
      <StyledUsername>@nick</StyledUsername>
      <StyledDate>23/05/2024</StyledDate>
      <TextContainer>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </TextContainer>
    </PostContainer>
  )
}

export default Post