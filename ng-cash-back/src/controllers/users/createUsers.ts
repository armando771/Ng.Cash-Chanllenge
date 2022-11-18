/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/users/createUsers')
const accountServices = require('../../services/accounts/createAccounts')

const createNewUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password, balance } = req.body

    const createAccount = await accountServices.createNewAccount({ balance })

    if (createAccount.id) {
      const response = await service.createNewUser({ username, password, accountId: createAccount.id })

      return res.status(200).json({ id: response.id, username, accountId: createAccount.id })
    }
  } catch (err) {
    console.log(err, ' error')

    next(err)
  }
}

export default createNewUser
