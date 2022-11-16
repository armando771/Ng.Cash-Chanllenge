import express from 'express'
import { makeUserLogin } from '../controllers/login/makeLogin'

const router = express.Router({ mergeParams: true })

router.post('/', makeUserLogin)

export default router
