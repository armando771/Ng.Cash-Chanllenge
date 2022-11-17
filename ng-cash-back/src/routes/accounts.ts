import express from 'express'
import { getAllAccounts } from '../controllers/accounts'

const router = express.Router({ mergeParams: true })

router.get('/', getAllAccounts)

export default router
