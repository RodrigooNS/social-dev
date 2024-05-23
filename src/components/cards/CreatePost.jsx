import styled from "styled-components";

import H4 from "../typography/H4"
import TextArea from "../inputs/TextArea";
import Button from "../inputs/Button"

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px 40px;

  @media (max-width: 500px) {
    padding: 10px;
  }
`
const Text = styled.p`
  font-weight: bold;
`
const TextContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  `
const BottomContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
`
const BottomText = styled.p`
  flex: 1;
`
function CreatePost () {
  return (
    <PostContainer>
      <H4><Text>No que você está pensando, @nick?</Text></H4>
      <TextContainer>
        <TextArea placeholder="Digite sua mensagem" rows="4" />
      </TextContainer>
      <BottomContainer>
        <BottomText>A sua mensagem será pública</BottomText>
        <Button>Enviar mensagem</Button>
      </BottomContainer>
    </PostContainer>
  )
}

export default CreatePost