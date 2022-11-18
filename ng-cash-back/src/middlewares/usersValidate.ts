import Joi from 'joi'
import { Request, Response, NextFunction } from 'express'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { User } = require('../database/models/index')

const schema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().required().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    'Deve conter pelo menos: uma letra maiúscula, uma letra minúscula, um número e pelo menos um destes símbolos: #?!@$ %^&*-')
})

const validateFields = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body
  const { error } = schema.validate({ username, password })

  if (error) return res.status(400).json({ message: error?.message.split('the')[1] })

  next()
}

const validateUserExists = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body

  const myUser = await User.findOne({ where: { username } })

  if (myUser) return res.status(400).json({ message: 'User already registered' })

  next()
}

export { validateFields, validateUserExists }
