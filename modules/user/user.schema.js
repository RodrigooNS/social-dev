import Joi from "joi"

export const signupSchema = Joi.object({
  name: Joi.string().required().max(30),
  lastName: Joi.string().required().max(30),
  user: Joi.string().required().max(30),
  email: Joi.string().email({ tlds: { allow: false } }).required().max(50),
  password: Joi.string().required().max(50).min(8)
})

