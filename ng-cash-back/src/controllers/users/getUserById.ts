/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/users/getUserById')

const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    const response = await service.getUserById(id)

    return res.status(200).json(response)
  } catch (err) {
    console.log(err, ' error')

    next(err)
  }
}

export default getUserByUsername
