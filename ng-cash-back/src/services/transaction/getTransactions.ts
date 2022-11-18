// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { Transaction } = require('../../database/models');

const getAllTransactions = async () => {
  try {
    const result = await Transaction.findAll({ attributes: { exclude: ['debited_account_id', 'credited_account_id'] } })
    console.log(result, 'resultado')
    return result
  } catch (error) {
    console.log(error)
    return { message: 'Nenhum transaçao encontrada' }
  }
}

export { getAllTransactions }
