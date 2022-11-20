// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { Account } = require('../../database/models');

const getAccountById = async (id: number) => {
  try {
    const result = await Account.findOne({ where: { id } })
    return result
  } catch (error) {
    console.log(error)
    return { message: 'conta nao encontrada' }
  }
}

export { getAccountById }
