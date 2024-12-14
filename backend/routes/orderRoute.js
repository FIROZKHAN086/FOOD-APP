import express from "express"
import authmiddel from '../middleware/auth.js'
import { PlaceOrder } from "../controllers/orderController.js"


const orderRoute = express.Router();
  
orderRoute.post("/place",authmiddel,PlaceOrder)

export default orderRoute;