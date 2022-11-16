import express from 'express'
import { getAllUsers, createNewUser } from '../controllers/users'
import { authLogin } from '../middlewares/authentication'
const router = express.Router({ mergeParams: true })

router.get('/', authLogin, getAllUsers)
router.post('/', createNewUser)

export default router
