/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
import moment from 'moment'
const service = require('../../services/transaction/getTransactionsByAccount')

interface Iteste {
  id: number;
  value: number;
  createdAt: string;
  debitedAccountId: number;
  creditedAccountId: number;
  accountsDeb: any;
  accountsCred: any
}

const getTransactionsByAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { debitedAccountId } = req.params
    const response = await service.getTransactionsByAccount(debitedAccountId)
    const arr: any = []

    response.forEach(({ id, value, createdAt, debitedAccountId, creditedAccountId, accountsDeb, accountsCred }: Iteste) => {
      const obj = {
        id,
        value,
        createdAt: moment(createdAt).format('DD-MM-YYYY HH:mm:ss'),
        debitedAccountId,
        creditedAccountId,
        accountsDeb,
        accountsCred
      }
      arr.push(obj)
    })

    return res.status(200).json(arr)
  } catch (err) {
    console.log(err, ' error')

    next(err)
  }
}

export default getTransactionsByAccount
