import styled from "styled-components";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { useSWRConfig } from "swr"
import { useState } from "react";

import { createPostSchema } from "../../../modules/post/post.schema"

import H4 from "../typography/H4"
import TextArea from "../inputs/TextArea"
import Button from "../inputs/Button"

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px 40px;

  @media (max-width: 500px) {
    padding: 20px 10px;
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
function CreatePost ({ user }) {
  const { mutate } = useSWRConfig()
  const { control, handleSubmit, formState: { isValid }, reset } = useForm({
    resolver: joiResolver(createPostSchema),
    mode: 'all'
  })
  
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, data)
    if (response.status === 201) {
      reset()
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
    }
    setLoading(false)
  }

  return (
    <PostContainer>
      <H4><Text>No que você está pensando, @{user}?</Text></H4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextContainer>
          <TextArea 
            placeholder="Digite sua mensagem" 
            rows="4" 
            control={control}
            name="text"
            maxLength="256"
          />
        </TextContainer>
        <BottomContainer>
          <BottomText>A sua mensagem será pública</BottomText>
          <Button loading={loading} disabled={!isValid}>Enviar mensagem</Button>
        </BottomContainer>
      </form>
    </PostContainer>
  )
}

export default CreatePost