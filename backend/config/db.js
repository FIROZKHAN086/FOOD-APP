import mongoose from 'mongoose'

export const connectDB = async () =>{
   await mongoose.connect('mongodb+srv://computerpc096:06mOKBgtza2735SW@cluster0.owtmz.mongodb.net/food-del').then(()=> console.log("DBConnect ok"))}