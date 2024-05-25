import Joi from "joi"
import { withIronSessionApiRoute } from "iron-session/next"

import createHandler from "../../../lib/middlewares/nextConnect"
import validate from "../../../lib/middlewares/validation"

import { userSignup } from "../../../modules/user/userService"
import { ironConfig } from "../../../lib/middlewares/ironSession"

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

      req.session.user = {
        id: user._id,
        user: user.user
      }
      await req.session.save()

      res.status(201).json({ ok: true })
    } catch (err) {
      console.error(err)
      res.status(500)
      throw err
    }
  })

export default withIronSessionApiRoute(signup, ironConfig)