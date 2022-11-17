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

    console.log(debitedAccount.balance, debitedAccount.id, 'debitada')
    console.log(creditedAccount.balance, creditedAccount.id, 'creditada')

    const [accountDebitedBalance] = await updateAccount({ balance: debitedAccount.balance - value, id: debitedAccount.id })
    const [accountCreditecBalance] = await updateAccount({ balance: creditedAccount.balance + value, id: creditedAccount.id })

    console.log(accountDebitedBalance, 'account Debited')
    console.log(accountCreditecBalance, 'account Credited')

    const result = await Transaction.create({ debitedAccountId, creditedAccountId, value })

    return result.status(201).json(result)
  } catch (error) {
    console.log(error)
    return { message: 'Erro ao cadastrar novo usuario' }
  }
}

export { createNewTransition }
