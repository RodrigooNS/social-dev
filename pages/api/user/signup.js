import { withIronSessionApiRoute } from 'iron-session/next';

import mongoose from 'mongoose';

import { userSignup } from '../../../modules/user/userService';
import { signupSchema } from '../../../modules/user/user.schema';
import { ironConfig } from '../../../lib/middlewares/ironSession';

async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { error } = signupSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: error.message, details: error.details });
  }

  console.log(req.body);

  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  try {
    const user = await userSignup(req.body);

    req.session.user = {
      id: user._id,
      user: user.user,
    };
    await req.session.save();

    res.status(201).json({ ok: true });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send({
        code: 11000,
        duplicatedKey: Object.keys(err.keyPattern)[0],
      });
    }
    console.error(err);
    res.status(500);
    throw err;
  }
}

export default withIronSessionApiRoute(handler, ironConfig);
