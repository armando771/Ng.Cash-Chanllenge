/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/users/createUsers')

const createNewUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password, accountId } = req.body
    const response = await service.createNewUser({ username, password, accountId })
    console.log(response, 'resposta')

    return res.status(200).send(response)
  } catch (err) {
    console.log(err, ' error')

    next(err)
  }
}

export default createNewUser
