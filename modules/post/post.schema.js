import Joi from "joi"
import joiObjectid from "joi-objectid"

Joi.objectId = joiObjectid(Joi)

export const createPostSchema = Joi.object({
  text: Joi.string().required().max(256).message('Máximo de {{#limit}} caracteres')
})

export const deletePostSchema = Joi.object({
  id: Joi.objectId().required()
})