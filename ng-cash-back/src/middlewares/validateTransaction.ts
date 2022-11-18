import { Request, Response, NextFunction } from 'express'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Account } = require('../database/models')

const ValidateTransaction = async (req: Request, res: Response, next: NextFunction) => {
  const { debitedAccountId, creditedAccountId, value } = req.body

  const debitedAccount = await Account.findByPk(debitedAccountId)
  const creditedAccount = await Account.findByPk(creditedAccountId)

  if (!creditedAccount) return res.status(400).json({ message: 'O usuario selecionado não existe' })

  if (debitedAccount.balance <= 0) return res.status(400).json({ message: 'Voce nao possui saldo em sua conta' })
  if (debitedAccount.balance < value) return res.status(400).json({ message: 'Saldo Insuficiente' })

  next()
}

export { ValidateTransaction }
