/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/transaction/getTransactions')

const getAllTransactions = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await service.getAllTransactions()

    return res.status(200).json(response)
  } catch (err) {
    console.log(err, ' error')

    next(err)
  }
}

export default getAllTransactions
