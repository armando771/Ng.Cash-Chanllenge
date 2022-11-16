// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { Account } = require('../../database/models/index');

interface AccountBody {
    balance: number;
}

const createNewAccount = async (body: AccountBody) => {
  try {
    const { balance } = body
    const result = await Account.create({ balance })
    console.log(result, 'results')
    return result
  } catch (error) {
    console.log(error)
    return { message: 'Erro ao cadastrar novo usuario' }
  }
}

export { createNewAccount }
