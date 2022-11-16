// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { User } = require('../../database/models');

const getAllUsers = async () => {
  try {
    const result = await User.findAll()
    return result
  } catch (error) {
    console.log(error)
    return { message: 'Nenhum usuario cadastrado' }
  }
}

export { getAllUsers }
