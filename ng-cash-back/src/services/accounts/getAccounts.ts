// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { Account } = require('../../database/models/index');

const getAllAccounts = async () => {
  try {
    const result = await Account.findAll()
    return result
  } catch (error) {
    console.log(error)
    return { message: 'Nenhuma conta registrada' }
  }
}

module.exports = { getAllAccounts }
