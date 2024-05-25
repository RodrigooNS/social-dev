import Joi from "joi"

import createHandler from "../../../lib/middlewares/nextConnect"
import validate from "../../../lib/middlewares/validation"

import { userLogin } from "../../../modules/user/userService"

const loginSchema = Joi.object({
  userOrEmail: Joi.string().required(),
  password: Joi.string().required()
})

const handler = createHandler()

handler.post(validate({ body: loginSchema }), async (req, res) => {
  try{
    const user = await userLogin(req.body)
    res.send(user)
  } catch (err) {
    console.error(err)
    res.status(500)
    throw err
  }
})

export default handler