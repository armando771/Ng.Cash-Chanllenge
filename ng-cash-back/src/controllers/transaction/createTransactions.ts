/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/transaction/createTransactions')

const createNewTransition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { debitedAccountId, creditedAccountId, value } = req.body

    const result = await service.createNewTransition({ debitedAccountId, creditedAccountId, value })
    return result
  } catch (err) {
    console.log(err)

    next(err)
  }
}

export { createNewTransition }
