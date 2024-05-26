import styled from "styled-components"
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { joiResolver } from "@hookform/resolvers/joi"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

import { signupSchema } from "../modules/user/user.schema"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import Button from "../src/components/inputs/Button"
import Input from "../src/components/inputs/Input"

const FormContainer = styled.div`
  margin-top: 60px;
`

const Form = styled.form`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Text = styled.p`
  text-align: center;
`

function SignupPage () {
  const router = useRouter()
  const { control, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: joiResolver(signupSchema)
  })

  const [loading, setLoading] = useState(false)

  const handleForm = async (data) => {
    setLoading(true)
    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, data)
      if (status === 201) {
        router.push('/')
      }
    } catch (err) {
      if (err.response.data.code === 11000) {
        if (err.response.data.duplicatedKey === 'user') {
          setError('user', { type: 'duplicated.user' })
        } if (err.response.data.duplicatedKey === 'email') {
          setError('email', { type: 'duplicated.email' })
        }
      }
    }
    setLoading(false)
  }

  return (
    <ImageWithSpace>
      <H1>#SocialDev</H1>
      <H4>Tudo que acontece no mundo dev está aqui!</H4>
      <FormContainer>
        <H2>Crie sua conta:</H2>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Input label="Nome" name="name" control={control} />
          <Input label="Sobrenome" name="lastName" control={control} />
          <Input label="Nome de usuário" name="user" control={control} />
          <Input label="E-mail" type="email" name="email" control={control} />
          <Input label="Senha" type="password" name="password" control={control} />
          <Button 
            type="submit" 
            disabled={Object.keys(errors).length > 0}
            loading={loading}
          >
            Criar conta
          </Button>
        </Form>
        <Text>Já possui uma conta? <Link href="/login">Faça login</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default SignupPage