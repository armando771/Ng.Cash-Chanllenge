// eslint-disable-next-line @typescript-eslint/no-var-requires, semi
const { User } = require('../../database/models');

const getUserById = async (id: number) => {
  try {
    const result = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] }
    })
    return result
  } catch (error) {
    console.log(error)
    return { message: 'Nao foi possivel encontar um usuario com este id' }
  }
}

export { getUserById }
