// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { Account } = require('../../database/models/index');

interface AccountBody {
    balance: number;
    id: number;
}

const updateAccount = async (body: AccountBody) => {
  try {
    const { balance, id } = body
    const result = await Account.update({ balance }, { where: { id } })
    return result
  } catch (error) {
    console.log(error)
    return { message: 'erro ao atualizar saldo' }
  }
}

export { updateAccount }
