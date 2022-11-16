import jwt from 'jsonwebtoken'
import path from 'path'
import fs from 'fs'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { User } = require('../../database/models/index')

const jwtSecret = fs.readFileSync(path.resolve(__dirname, '../../../jwt.evaluation.key'), 'utf-8')

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256'
}

interface userData {
    username: string;
    password: number
}

const makeUserLogin = async (user: userData) => {
  try {
    const findMyUser = await User.findOne({ where: user })
    console.log(findMyUser, 'esse e meu user')
    if (!findMyUser) return { message: 'usuario inexistente' }

    const myToken = jwt.sign({ data: findMyUser }, jwtSecret.trim(), jwtConfig)
    console.log(myToken, 'esse e o token')
    return myToken
  } catch (error) {
    console.log(error)
    return { message: 'usuario inexistente' }
  }
}

export { makeUserLogin }
