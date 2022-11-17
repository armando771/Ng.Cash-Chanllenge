import express from 'express'
import { createNewTransition } from '../controllers/transaction/createTransactions'

const router = express.Router({ mergeParams: true })

router.post('/', createNewTransition)

export default router
