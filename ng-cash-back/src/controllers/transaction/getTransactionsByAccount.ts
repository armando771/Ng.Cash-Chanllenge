/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/transaction/getTransactionsByAccount')

const getTransactionsByAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { debitedAccountId } = req.params
    const response = await service.getTransactionsByAccount(debitedAccountId)

    return res.status(200).json(response)
  } catch (err) {
    console.log(err, ' error')

    next(err)
  }
}

export default getTransactionsByAccount
