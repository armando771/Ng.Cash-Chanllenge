/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/accounts/createAccounts')

const createNewAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { balance } = req.body
    const response = await service.createNewAccount({ balance })

    return res.status(200).send(response)
  } catch (err) {
    console.log(err, ' error')

    next(err)
  }
}

export default createNewAccount
