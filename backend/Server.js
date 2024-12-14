import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/User.js'
import 'dotenv/config'
import cartRoute from './routes/cartRoute.js'
import orderRoute from './routes/orderRoute.js'
import path from 'path'


const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

const _dirname = path.resolve();




connectDB()
//api end points
app.use("/api",foodRouter)
app.use("/images",express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRoute)
app.use("/api/order",orderRoute)

app.use(express.static(path.join(_dirname,"FronTant/dist")))

app.get('*', (_,res) => {
    res.sendFile(path.resolve(_dirname,"FronTant" ,"dist" ,"index.html"))
})

app.get("/", (req,res)=>{
    res.send(`"API WORKING On ${port}"`)
})

app.listen(port,()=>{
    console.log(`Api Working on ${port}`);
    
})
  