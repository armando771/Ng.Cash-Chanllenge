import express from 'express'
import usersRoutes from './users'
import accountsRoutes from './accounts'
import loginRoutes from './login'
import transatinRoutes from './transitions'

const root = express.Router()

root.use('/auth', loginRoutes)
root.use('/users', usersRoutes)
root.use('/accounts', accountsRoutes)
root.use('/transations', transatinRoutes)

export default root
