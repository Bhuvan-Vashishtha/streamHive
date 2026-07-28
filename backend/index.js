import dns from 'dns'
dns.setServers(['8.8.8.8', '8.8.4.4'])

import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/connectDb.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRouter from './route/authRoute.js'
import userRouter from './route/userRoute.js'
import contentRouter from './route/contentRoute.js'


dotenv.config()
const port = process.env.PORT || 8000


const app = express()
app.use(cookieParser())
app.use(cors({
  origin: (origin, callback) => {
    if (
      !origin ||
      origin === "http://localhost:5173" ||
      origin === "https://stream-hive-amber.vercel.app" ||
      /^https:\/\/stream-hive-.*-lucky-4eab\.vercel\.app$/.test(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));



app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/content",contentRouter)

app.get("/" , (req,res)=>{
    res.send("Hello from Server")
})

app.listen(port , ()=>{
    console.log(`Server Started on ${port}`)
    connectDb()
})