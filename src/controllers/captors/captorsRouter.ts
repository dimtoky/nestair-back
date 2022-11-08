import express from 'express'
import multer from 'multer'
import { getCaptors, getcaptorById }from './captors'
import { authorize , authorizeAdmin } from '../../middlewares/authorizations'

const storage = multer.diskStorage({
    destination: './uploads/',
    filename (_req, file, cb) {
      cb(null, file.originalname)
    }
  })

 const upload = multer({ storage })
 const captorsRouter = express.Router()


  captorsRouter.get('/', authorizeAdmin, getCaptors)

  captorsRouter.get('/:id', authorize, getcaptorById)

//  captorsRouter.post('/alert/add', addAlert)

//  captorsRouter.get('/alert/get', getAllAlerts)

//  captorsRouter.get('/alert/get', getAlertById)


export default captorsRouter;