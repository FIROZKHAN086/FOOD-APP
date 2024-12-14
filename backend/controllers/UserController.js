import Usermodel from '../models/Usermodel.js';
import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'
import validator from 'validator'
import userRouter from '../routes/User.js';

const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
      const user  = await Usermodel.findOne({email})
      if (!user) {
        res.json({success:false,message:"User not vailed"})
      }
      const isMatch = await bcrypt.compare(password,user.password)
      if (!isMatch) {
        res.json({success:false,message:'invalid'})
      }
      const token = creatToken(user._id);
      res.json({success:true,message:token})

    } catch (error) {
      console.log(error);
      res.json({success:false,message:"eRRror"})
    }
}
const creatToken = (id) => {
  return jwt.sign({id},process.env.JWT_SECRET)
} 
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try {
      const exit = await Usermodel.findOne({email});
      if(exit){
        return res.json({success:false,message:"Already Have acount"})
      }
      if (!validator.isEmail(email)) {
        return res.json({success:false,message:"Give Vaild Email"})
      }
      if (password.length<8) {
        return res.json({success:false,message:"Use Strong Passsword"})
      }
      const salt = await bcrypt.genSalt(10)
      const haspasword = await bcrypt.hash(password,salt)

      const newUser = new Usermodel({
        name:name,
        password:haspasword,
        email:email,
      })

     const user = await newUser.save()
      const token = creatToken(user._id)
      res.json({success:true,message:token})

    } catch (error) {
      console.log(error);
      res.json({success:false,message:'ERrror'})
      
    }
}


export {loginUser,registerUser}