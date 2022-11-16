import express from 'express'
import usersRoutes from './users'

const root = express.Router()

root.use('/users', usersRoutes)

export default root
