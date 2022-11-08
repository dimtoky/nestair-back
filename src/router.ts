import express from 'express'
import authRouter from './controllers/auth/authRouter'
import captorsRouter from './controllers/captors/captorsRouter'
import { authorize } from './middlewares/authorizations'
const router = express.Router()



// this is a global route
router.get('/health', (req, res) => {
        res.sendStatus(200)
    })

 router.use('/user', authRouter) // use routes from hello world component


 router.use('/captors' ,captorsRouter) // use routes from hello world component
export default router