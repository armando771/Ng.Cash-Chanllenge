import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import path from 'path'
import fs from 'fs'

const secret = fs.readFileSync(path.resolve(__dirname, '../../jwt.evaluation.key'), 'utf8')

const authLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization

    if (!token) return res.status(401).send({ message: 'Token not found' })
    const decoded = jwt.verify(token, secret.trim())
    delete decoded.data.password

    next()
  } catch (err) {
    return res.status(401).send({ message: 'Expired or invalid token' })
  }
}

export { authLogin }
