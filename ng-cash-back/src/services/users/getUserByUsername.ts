// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { User } = require('../../database/models');

const getUserByUsername = async (username: string) => {
  try {
    const result = await User.findOne({
      where: { username },
      attributes: { exclude: ['password'] }
    })
    return result
  } catch (error) {
    console.log(error)
    return { message: 'Nao foi possivel encontar um usuario com este username' }
  }
}

export { getUserByUsername }
