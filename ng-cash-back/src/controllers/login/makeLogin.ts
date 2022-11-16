import { Request, Response, NextFunction } from 'express'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const service = require('../../services/login/makeUserLogin')

const makeUserLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body
    const response = await service.makeUserLogin({ username, password })
    return res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}

export { makeUserLogin }
