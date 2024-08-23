import express from 'express'
import mongoose from 'mongoose'
import createConnection from './connection.js'
import router from './routes/route.js'
import  dotenv  from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()


createConnection(process.env.URI)
.then(() => console.log("MongoDb connected successfully!"))
.catch((err) => console.log(err))
app.use(cors())
app.use(express.json())
app.use('/todo', router)


app.listen(process.env.PORT || 8001, () => console.log("server started successfully!"));