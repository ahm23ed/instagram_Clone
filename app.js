import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import  * as indexRouter from "./modules/index.router.js"
import schedule from 'node-schedule'
import fs from 'fs'
import path from 'path'
import { createInvoice } from './services/pdf.js'
import sendEmail  from './services/email.js'
import cors  from 'cors'
import QRCode from 'qrcode'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import  connectDB from './DB/connection.js'
const app = express()
app.use(express.json())
const port = process.env.PORT
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors())
app.use('/api/v1/uploads', express.static(path.join(__dirname, './uploads')))
app.use('/api/v1/auth', indexRouter.authRouter)
app.use('/api/v1/user', indexRouter.userRouter)
app.use('/api/v1/post', indexRouter.postRouter)
app.use('/api/v1/admin', indexRouter.adminRouter)



connectDB()
app.listen(port, () => {
    console.log(`server is runnin on port :::: ${port}`);
})