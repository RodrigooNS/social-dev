import Joi from "joi"

const minMessage = 'Este campo deve ter pelo menos {{#limit}} caracteres'
const maxMessage = 'Este campo pode ter no máximo {{#limit}} caracteres'

export const signupSchema = Joi.object({
  name: Joi.string().required().max(30).message(maxMessage).min(2).message(minMessage),
  lastName: Joi.string().required().max(30).message(maxMessage).min(4).message(minMessage),
  user: Joi.string().required().max(30).message(maxMessage).min(8).message(minMessage),
  email: Joi.string().email({ tlds: { allow: false } }).required().max(50).message(maxMessage),
  password: Joi.string().required().max(50).message(maxMessage).min(8).message(minMessage)
})

