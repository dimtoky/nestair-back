import express from 'express'
import { Request, Response, NextFunction } from 'express'
import * as bodyParser from 'body-parser'
import morgan from 'morgan'
import router from './router'
import cors from 'cors'
import path from 'path'


export const app = express()

// Custom error handler
function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack)
  res.status(500).json({ error: err.message })
}

// Default route
function defaultRoute(req: Request, res: Response, next: NextFunction) {
  res.sendStatus(404)
}
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/public', express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('tiny'))
app.use(cors())
app.use('/', router)
app.use(defaultRoute) // default route has to be last route
app.use(errorHandler) // Error handler goes last