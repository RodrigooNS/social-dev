import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios"
import { useState } from "react";

import { createPostSchema } from "../../../modules/post/post.schema";
import TextArea from "../inputs/TextArea";
import Button from "../inputs/Button";

const EditPost = ({ id, text, onSave }) => {
  const { control, handleSubmit, formState: { isValid } } = useForm ({
    resolver: joiResolver(createPostSchema),
    mode: 'all'
  })
  
  const [loading, setLoading] = useState(false)

  const handleEditPost = async (data) => {
    setLoading(true)
    try {
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        id,
        text: data.text
      })
      if (response.status === 200) {
        onSave()
      }
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(handleEditPost)}>
      <TextArea 
        placeholder="Digite sua mensagem" 
        rows="4" 
        control={control}
        name="text"
        maxLength="256"
        defaultValue={text}
      />
      <Button loading={loading} type="submit" disabled={!isValid}>Salvar alterações</Button>
    </form>
  )
}

export default EditPost