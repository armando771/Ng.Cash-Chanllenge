import express from 'express'
import { createNewTransaction, getAllTransactions, getTransactionsByAccount } from '../controllers/transaction/'
import { authLogin } from '../middlewares/authentication'
import { ValidateTransaction } from '../middlewares/validateTransaction'

const router = express.Router({ mergeParams: true })

router.post('/', ValidateTransaction, createNewTransaction)
router.get('/:debitedAccountId', authLogin, getTransactionsByAccount)
router.get('/', authLogin, getAllTransactions)

export default router
