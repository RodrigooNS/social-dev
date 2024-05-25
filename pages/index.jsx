import styled from "styled-components"
import { withIronSessionSsr } from "iron-session/next"
import { ironConfig } from "../lib/middlewares/ironSession"

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

function HomePage ({ user }) {
  console.log(user)
  return (
    <>
      <Navbar />
      <Content>
        <Container>
          <CreatePost user={user.user} />
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

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user
    
    if (!user) {
      return {
        redirect: {
          permanent: false,
          destination: '/login'
        }
      }
    }
    console.log(user)

    return {
      props: {
        user
      }
    }
  }, ironConfig
)

export default HomePage