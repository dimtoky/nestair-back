import express from 'express'
import { createUser, loginUser }from './user'

const authRouter = express.Router()


authRouter.post('/register' , createUser)

authRouter.post('/login', loginUser)

export default authRouter