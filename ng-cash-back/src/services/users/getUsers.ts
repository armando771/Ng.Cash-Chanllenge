// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { User } = require('../../database/models/index');

const getAllUsers = async () => {
  try {
    const result = await User.findAll()
    return result
  } catch (error) {
    console.log(error)
    return { message: 'Nenhum usuario cadastrado' }
  }
}

module.exports = { getAllUsers }
