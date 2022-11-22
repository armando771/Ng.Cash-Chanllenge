import { Op } from 'sequelize'

// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { Transaction, Account, User } = require('../../database/models');

const getTransactionsByAccount = async (debitedAccountId: number) => {
  try {
    const result = await Transaction.findAll({
      attributes: { exclude: ['debited_account_id', 'credited_account_id'] },
      where: {
        [Op.or]: [
          { debitedAccountId },
          { creditedAccountId: debitedAccountId }
        ]
      },
      include: [
        {
          model: Account,
          as: 'accountsDeb',
          attributes: { exclude: ['balance'] },
          include: [{
            model: User,
            as: 'users',
            attributes: { exclude: ['password', 'id', 'accountId'] }
          }]
        },
        {
          model: Account,
          as: 'accountsCred',
          attributes: { exclude: ['balance'] },
          include: [{
            model: User,
            as: 'users',
            attributes: { exclude: ['password', 'id', 'accountId'] }
          }]
        }
      ]
    })
    // Query usada para retornar o username para a tabela de transactions

    return result
  } catch (error) {
    console.log(error)
    return { message: 'Nenhum transaçao encontrada' }
  }
}

export { getTransactionsByAccount }
