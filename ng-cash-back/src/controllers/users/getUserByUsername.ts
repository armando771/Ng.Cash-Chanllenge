/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/users/getUserByUsername')

const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.params

    const response = await service.getUserByUsername(username)

    return res.status(200).json(response)
  } catch (err) {
    console.log(err, ' error')

    next(err)
  }
}

export default getUserByUsername
