import express from 'express'
import { getAllUsers, createNewUser, getUserByUsername, getUserById } from '../controllers/users'
import { authLogin } from '../middlewares/authentication'
import { validateFields, validateUserExists } from '../middlewares/usersValidate'
const router = express.Router({ mergeParams: true })

router.get('/get/:id', getUserById)
router.get('/:username', getUserByUsername)
router.get('/', authLogin, getAllUsers)
router.post('/', validateUserExists, validateFields, createNewUser)

export default router
