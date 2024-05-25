import Joi from "joi"
import { withIronSessionApiRoute } from "iron-session/next"

import createHandler from "../../../lib/middlewares/nextConnect"
import validate from "../../../lib/middlewares/validation"

import { userLogin } from "../../../modules/user/userService"
import { ironConfig } from "../../../lib/middlewares/ironSession"

const loginSchema = Joi.object({
  userOrEmail: Joi.string().required(),
  password: Joi.string().required()
})

const handler = createHandler()

handler.post(validate({ body: loginSchema }), async (req, res) => {
  try{
    const user = await userLogin(req.body)
    req.session.user = {
      id: user._id,
      user: user.user
    }
    await req.session.save()
    res.send({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500)
    throw err
  }
})

export default withIronSessionApiRoute(handler, ironConfig)