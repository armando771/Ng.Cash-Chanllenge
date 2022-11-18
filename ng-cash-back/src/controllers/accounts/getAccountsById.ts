/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response, NextFunction } from 'express'
const service = require('../../services/accounts/getAccountById')

const getAccountById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const response = await service.getAccountById(id)

    return res.status(200).json(response)
  } catch (err) {
    console.log(err, ' error')

    next(err)
  }
}

export default getAccountById
