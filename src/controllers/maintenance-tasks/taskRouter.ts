import express from 'express'
import multer from 'multer'
import { addIncidents,deleteIncidents,modifyIncidents,getIncidents, getIncidentById, getImages}from './incidents'

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (_req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
 const upload = multer({ storage: storage })
const incidentsRouter = express.Router()



incidentsRouter.post('/add' ,upload.array('pictures',  5) ,addIncidents)

incidentsRouter.delete('/delete', deleteIncidents)

incidentsRouter.put('/modify', upload.array('pictures',  5) , modifyIncidents)

incidentsRouter.get('/', getIncidents)

incidentsRouter.get('/:id', getIncidentById)

incidentsRouter.get('/image/:filename', getImages)

export default incidentsRouter;