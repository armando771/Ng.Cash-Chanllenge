import { updateAccount } from '../accounts/updateAccounts'
// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { Transaction, Account } = require('../../database/models/index');

interface TransitionBody {
    debitedAccountId: number;
    creditedAccountId: number;
    value: number;
}

const createNewTransition = async (body: TransitionBody) => {
  try {
    const { debitedAccountId, creditedAccountId, value } = body

    const debitedAccount = await Account.findByPk(debitedAccountId)
    const creditedAccount = await Account.findByPk(creditedAccountId)

    await updateAccount({ balance: debitedAccount.balance - value, id: debitedAccount.id })
    await updateAccount({ balance: creditedAccount.balance + value, id: creditedAccount.id })

    const result = await Transaction.create({ debitedAccountId, creditedAccountId, value })

    return result
  } catch (error) {
    console.log(error)
    return { message: 'Erro ao cadastrar novo usuario' }
  }
}

export { createNewTransition }
