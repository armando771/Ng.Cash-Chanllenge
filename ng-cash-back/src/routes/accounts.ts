import express from 'express'
import { getAllAccounts, getAccountById } from '../controllers/accounts'
import { authLogin } from '../middlewares/authentication'

const router = express.Router({ mergeParams: true })

router.get('/:id', authLogin, getAccountById)
router.get('/', authLogin, getAllAccounts)

export default router
