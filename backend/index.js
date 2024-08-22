import express from 'express'
import mongoose from 'mongoose'
import createConnection from './connection.js'
import router from './routes/route.js'


const app = express()
const PORT = 8000

createConnection("mongodb+srv://dasrajdeep734:rajdeep34@cluster0.fb7xf.mongodb.net/Crud")
.then(() => console.log("MongoDb connected successfully!"))
.catch((err) => console.log(err))

app.use(express.json())
app.use('/todo', router)


app.listen(PORT, () => console.log("server started successfully!"));