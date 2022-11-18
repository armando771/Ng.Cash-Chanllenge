import bcrypt from 'bcrypt'
// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { User } = require('../../database/models/index');

interface UsersBody {
    username: string;
    password: string;
    accountId: number;
}

const createNewUser = async (body: UsersBody) => {
  try {
    const { username, password, accountId } = body

    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await User.create({ username, password: hashedPassword, account_id: accountId })
    return result
  } catch (error) {
    console.log(error)
    return { message: 'Erro ao cadastrar novo usuario' }
  }
}

export { createNewUser }
