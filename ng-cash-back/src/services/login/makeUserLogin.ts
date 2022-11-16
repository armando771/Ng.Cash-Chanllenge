import jwt from 'jsonwebtoken'
import path from 'path'
import fs from 'fs'
import bcrypt from 'bcrypt'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { User } = require('../../database/models/index')

const jwtSecret = fs.readFileSync(path.resolve(__dirname, '../../../jwt.evaluation.key'), 'utf-8')

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256'
}

interface userData {
    username: string;
    password: string;
}

const authPassword = async (username: string, password: string) => {
  try {
    const myUser = await User.findOne({ where: { username } })

    const isValidPassword = await bcrypt.compare(password, myUser.password)

    if (isValidPassword) return myUser.password
  } catch (err) {
    console.log(err)
    return { message: 'Senha invalida' }
  }
}

const makeUserLogin = async (user: userData) => {
  try {
    const { username, password } = user

    const isValidPassword = await authPassword(username, password)

    const findMyUser = await User.findOne({ where: { username, password: isValidPassword } })

    if (!findMyUser) return { message: 'usuario inexistente' }

    const myToken = jwt.sign({ data: findMyUser }, jwtSecret.trim(), jwtConfig)
    return { token: myToken }
  } catch (error) {
    console.log(error)
    return { message: 'usuario inexistente' }
  }
}

export { makeUserLogin }
