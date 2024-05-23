import styled from "styled-components"
import Navbar from "../src/components/layout/Navbar"
import Container from "../src/components/layout/Container"
import CreatePost from "../src/components/cards/CreatePost"
import Post from "../src/components/cards/Post"
import H3 from "../src/components/typography/H3"

const Content = styled.div`
  margin 50px 0;
`

const LastPostText = styled(H3)`
  margin-top: 40px;
  padding: 0 10px;
`

const RefreshPosts = styled.span`
  font-weight: bold;
  color: ${props => props.theme.primary};
  cursor: pointer;
`

const RefreshPostsContainer = styled.div`
  display: flex;
  justify-content: right;
`

function HomePage () {
  return (
    <>
      <Navbar />
      <Content>
        <Container>
          <CreatePost />
          <LastPostText>Últimas postagens:</LastPostText>
          <RefreshPostsContainer>
            <RefreshPosts>Atualizar postagens</RefreshPosts>
          </RefreshPostsContainer>
        <Post />
        <Post />
        <Post />
        </Container>
      </Content>
    </>
  )
}

export default HomePage