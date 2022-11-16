import express from 'express'
import getUsers from '../controllers/users/getUsers'

const router = express.Router({ mergeParams: true })

router.get('/', getUsers)

export default router
