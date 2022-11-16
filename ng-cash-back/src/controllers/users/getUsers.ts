/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/users/getUsers')

const getAllUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await service.getAllUsers()

    return res.status(200).send(response)
  } catch (err) {
    console.log(err, ' error')

    next(err)
  }
}

export default getAllUsers
