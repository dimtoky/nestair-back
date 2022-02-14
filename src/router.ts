import express from 'express'
import authRouter from './controllers/auth/authRouter'
import { renderPDF, sendPDF } from './controllers/pdfgenerator'
const router = express.Router()

// this is a global route
router.get('/health', (req, res) => {
        res.sendStatus(200)
    })

 router.use('/user', authRouter) // use routes from hello world component

 router.get('/renderpdf' , renderPDF)

 router.get('/genpdf' , sendPDF)

export default router