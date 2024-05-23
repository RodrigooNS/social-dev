import connect from "next-connect"
import Joi from "joi"

import validate from "../../../lib/middlewares/validation"

import { userSignup } from "../../../modules/user/userService"

const postSchema = Joi.object({
  name: Joi.string().required().max(30),
  lastName: Joi.string().required().max(30),
  user: Joi.string().required().max(30),
  email: Joi.string().email().required().max(50),
  password: Joi.string().required().max(50).min(8)
})

const signup = connect()
  .post(validate({ body: postSchema }), (req, res) => {
    userSignup(req.body)
    res.status(200).json({ teste: "ok" })
  })

export default signup