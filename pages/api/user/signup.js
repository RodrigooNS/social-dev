import Joi from "joi"

import createHandler from "../../../lib/middlewares/nextConnect"
import validate from "../../../lib/middlewares/validation"

import { userSignup } from "../../../modules/user/userService"

const postSchema = Joi.object({
  name: Joi.string().required().max(30),
  lastName: Joi.string().required().max(30),
  user: Joi.string().required().max(30),
  email: Joi.string().email().required().max(50),
  password: Joi.string().required().max(50).min(8)
})

const signup = createHandler()
  .post(validate({ body: postSchema }), async (req, res) => {
    try {
      const user = await userSignup(req.body)
      res.status(201).json(user)
    } catch (err) {
      console.error(err)
      res.status(500)
      throw err
    }
  })

export default signup