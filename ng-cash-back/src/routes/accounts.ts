import express from 'express'
import { createNewAccount, getAllAccounts } from '../controllers/accounts'

const router = express.Router({ mergeParams: true })

router.get('/', getAllAccounts)
router.post('/', createNewAccount)

export default router
