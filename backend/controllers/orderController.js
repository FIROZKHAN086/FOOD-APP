import orderModel from '../models/orderModel.js'
import Usermodel from '../models/Usermodel.js'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const PlaceOrder = async (req,res) => {
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            itemId:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await Usermodel.findByIdAndUpdate(req.body.userId,{cartData:{}})

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"usa",
                product:{
                    name:item.name
                },
                unit_amount:item.price*100*80
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency:"usa",
                product_data:{
                    name:"Deliver Charges"
                },
                unit_amount:2*100*80
            },
            quantity:1
        })
    } catch (error) {
        
    }
}

export {PlaceOrder}
