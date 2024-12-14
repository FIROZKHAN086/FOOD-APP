import express from 'express'
import { addto, getcart, remove } from '../controllers/Cartcontroller.js'
import authmiddel from '../middleware/auth.js'

const cartRoute = express.Router();

cartRoute.post('/add',authmiddel,addto)
cartRoute.post('/remove',authmiddel,remove)
cartRoute.post('/get',authmiddel,getcart)

export default cartRoute;