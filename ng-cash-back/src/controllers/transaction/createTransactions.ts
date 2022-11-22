/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
import moment from 'moment'

moment.locale('pt-br')

const service = require('../../services/transaction/createTransactions')

const createNewTransition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { debitedAccountId, creditedAccountId, value } = req.body

    const result = await service.createNewTransition({ debitedAccountId, creditedAccountId, value })

    console.log(moment(result.createdAt).format('DD-MM-YYYY HH:mm:ss'))

    return res.status(201).json({ id: result.id, debitedAccountId: result.debitedAccountId, creditedAccountId: result.creditedAccountId, value: result.value, createdAt: moment(result.createdAt).format('DD-MM-YYYY HH:mm:ss') })
  } catch (err) {
    console.log(err)

    next(err)
  }
}

export default createNewTransition
