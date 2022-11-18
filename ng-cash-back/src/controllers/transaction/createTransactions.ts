/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/transaction/createTransactions')

const createNewTransition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { debitedAccountId, creditedAccountId, value } = req.body

    const result = await service.createNewTransition({ debitedAccountId, creditedAccountId, value })

    console.log(result, 'result')

    return res.status(201).json({ id: result.id, debitedAccountId: result.debitedAccountId, creditedAccountId: result.creditedAccountId, value: result.value, createdAt: result.createdAt })
  } catch (err) {
    console.log(err)

    next(err)
  }
}

export default createNewTransition
