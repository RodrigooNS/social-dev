import { hashPassword } from '../../utils/bcrypt'

import User from './user.model'

export const userSignup = async (body) => {
  try {
    const user = {
      ...body,
      password: hashPassword(body.password)
    } 
    const dbUser = await User.create(user)
    return dbUser
  } catch (err) {
    throw err
  }
}