import express from 'express'
import cors from 'cors'
import root from '../routes/root'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', root)

export default app
