/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/accounts/getAccounts')

const getAllAccounts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await service.getAllAccounts()
    console.log(response, 'resposta')

    return res.status(200).send(response)
  } catch (err) {
    console.log(err, ' error')

    next(err)
  }
}

export default getAllAccounts
